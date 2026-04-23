---
name: messaging-system
description: Senior playbook for Demarketplace chat (Supabase Realtime). Enforces single 1:1 threads, WhatsApp-style context preview attachments, draft-to-live creation via server transactions, admin dispute join, 3-pane UI (list/chat/info+media), strict RLS compatibility, and reliable realtime. Analyze, debug, and improve the Demarketplace chat and messaging system across UI, API, Supabase schema, RLS, realtime, and routing triggers. Use for issues like missing chats, duplicate threads, context cards, unread counts, offer flows, and message delivery/read problems.

---

# Messaging System Skill (Demarketplace)

This skill is the authoritative implementation contract for Demarketplace messaging. It is written to prevent the current failure modes (draft creation blocked by RLS, draft attachments failing, inconsistent offer/service-offer flows, broken read receipts, broken reply plumbing, broken redirects, and unreliable realtime).

## Non-negotiables

1) **Exactly one general chat per user pair** (buyer/seller). Listing/order does not create a new conversation.
2) **Context preview attaches to a message** (WhatsApp quote-style), is clickable, and routes to the entity page.
3) **Draft mode must be server-created**: conversation + participants must be created via a single server transactional path (RPC/API). No client inserts into participants.
4) **Admin/support join only via dispute** and must be visually distinct.
5) **Realtime must update** the chat window + conversation list without refresh, with dedupe and optimistic reconciliation.
6) **RLS-safe by design**: policies must allow the exact SELECT/INSERT/UPDATE patterns used by the UI and realtime.

---

# Current System Topology (Must Maintain)

- Routes: `/messages`, `/messages/new`, `/messages/u/[username]`, `/messages/[id]`
- Draft conversation mode creates conversation on first send (currently risky/broken due to RLS and attachment flows)
- Message types exist: `text`, `offer`, `image`, `document`, `listing_inquiry`, `order_inquiry`, partial `service_offer`
- Unread via `messages.read`, presence via `users.last_seen` heartbeat
- Desktop 3-pane UI and mobile list/chat switch

The implementation must preserve these UX patterns while fixing architecture defects.

---

# Core Architecture Decisions

## A) Conversation identity
- **General 1:1:** exactly one conversation between two users for regular messaging.
- **Dispute:** a separate conversation type for admin/support join.

Recommended schema addition for enforcing uniqueness:
- `conversations.type` in (`general`, `dispute`)
- `conversations.pair_key` for `general` only: `"<minUserId>:<maxUserId>"` with **unique index** on `(type, pair_key)`.

If pair_key is not available, enforce uniqueness through a single server RPC that:
- locks, finds existing, or creates exactly one conversation.

## B) Context attachments are message-level
Do not rely on conversation-level `listing_id/order_id`. Context must persist on the **message** so it:
- appears for both parties
- survives refresh
- works across multiple listings/orders in the same unified chat

### Required contract: `messages.metadata.context`
```json
{
  "context": {
    "kind": "listing" | "order" | "service" | "transaction",
    "id": "uuid-or-string",
    "title": "string",
    "subtitle": "string",
    "image": "https://...",
    "href": "/listing/<id>" | "/orders/<id>" | "/services/<id>" | "/transactions/<id>",
    "source": "entrypoint",
    "created_at": "iso"
  }
}

Rules:

Context is optional, but if present it MUST render as an attached preview card inside the bubble.

The preview card is clickable and navigates via href.

The composer may show a “draft context bar” prior to send; only persisted on send.

Server-Side Transactional Paths (Hard Requirement)

Current risk: participant insert policy is WITH CHECK (false) while draft creation still does client inserts. Fix by enforcing:

1) ensure_conversation(to_user_id, type='general')

Server RPC/API endpoint that:

computes pair_key

finds existing general conversation

if none, creates conversation AND inserts both participants in one transaction

returns conversation_id

Client must never insert participants directly.

2) send_message(conversation_id?, to_user_id?, payload)

Single canonical server path that supports:

draft send (no conversation_id yet): calls ensure_conversation, then inserts message

normal send (conversation_id present): inserts message

validates sender is a participant (or admin in dispute)

returns persisted message row

Payload fields:

body (string, nullable for context-only if allowed)

type (enum)

metadata (json, includes context, attachments, offer payload)

reply_to_message_id (nullable)

client_nonce (string) for optimistic reconciliation

Do not allow scattered routes writing different fields (e.g., content vs body). Canonical schema is body.

Draft Mode Rules (Fixes Current Broken Behaviors)

Draft objects must never use a fake conversation id like "draft" for sending attachments.

Draft UX

user enters via /messages/new?to=...&listing=... or /messages?to=...&orderId=...

UI opens a “draft chat state” (no conversation_id yet)

composer shows a context preview bar populated from listing/order/service data

Draft send rules

Text send: allowed; triggers server send_message with to_user_id and creates the conversation if missing.

Attachments send (image/document/offer/service_offer): must follow the same path:

if no conversation_id, server creates conversation first and then inserts message

If product decision is to block attachments until conversation exists, the UI must explicitly disable attachments in draft state. Prefer supporting attachments via server path.

Message Types and Canonical Rendering
Canonical message columns required on fetch

ChatWindow must select:

id, conversation_id, sender_id, body, type, metadata, created_at

read, read_at, delivered_at

reply_to_message_id (reply UI depends on it)

any fields needed for offer/service_offer rendering

Context preview rendering (must work for)

listing inquiry: metadata.context.kind='listing'

order inquiry: metadata.context.kind='order'

service context: metadata.context.kind='service' (serviceId must not be dropped between /messages/new and loader)

transaction context (if used)

Reply feature completeness

If reply_to exists, fetch referenced message summary (id, sender_id, snippet, type, metadata.context.title)

Bubble should render reply preview and allow scroll-to-original

Read Receipts (Fix Current Bug)

Current issue: realtime read update sets only read: true but UI uses read_at.

Hard rule:

Marking as read must set BOTH:

read = true

read_at = now()

Server endpoint for mark-read:

mark_conversation_read(conversation_id, up_to_message_id?) recommended

enforce recipient-only update in RLS

Realtime: Reliable Patterns (No Refresh)

Use Supabase postgres_changes.

Two subscription layers
1) Conversation list layer (left panel)

Subscribe to inserts on messages for conversations the user participates in.
On insert:

update local conversation summary:

last_message_at

last message preview (type aware)

unread counts if message not in active conversation

2) Active chat layer (middle panel)

Subscribe to:

INSERT on messages filtered by conversation_id=eq.<activeId>

UPDATE on messages filtered by conversation_id=eq.<activeId> (read updates, offer state changes)

Optimistic reconciliation (no duplicates)

When sending, generate metadata.client_nonce.

Optimistically insert a local message with temporary id.

When realtime/response returns persisted message with same nonce:

replace optimistic message (dedupe)

Common realtime blockers to explicitly validate

Supabase Realtime enabled for tables

RLS allows SELECT for participants (including admin participant in dispute)

filters are correct; avoid over-broad subscriptions that drop state updates

state updates use functional set to avoid overwriting appended messages

Desktop 3-Pane UI Contract
Left: Conversation list

shows unread badge

shows last message preview (do not always show listing chip due to fallback title like "General Chat")

selecting a conversation updates middle + right

Middle: Chat window

messages + composer

composer supports:

draft context bar (dismissible)

reply bar (dismissible)

attachments (image/document)

offers/service offers (consistent schema)

Right: Info panel + Media

Must be implemented as a reliable panel driven by active conversation:

participant profile + rating

shared orders list between participants (click -> order detail)

other listings by the participant (click -> listing)

report, block, mute

menu/tabs: Details | Media | Files

Media: images from messages (metadata attachments)

Files: documents from messages

Right panel must update on:

active conversation change

message inserts affecting media/files

block/report state changes

Admin/Support Join (Disputes)
Dispute conversation

conversations.type='dispute'

participants: buyer + seller + admin/support

admin can join only when dispute exists and is linked; never “global access to all chats” by default

Distinct admin message rendering

bubble includes role badge from participant role mapping:

Buyer / Seller / Admin / Support

do not infer from display name or email

style must be visually distinct for admin/support

Known Broken/Risky Areas to Fix (Must Be Addressed When Editing Messaging)

Draft creation blocked by RLS: eliminate client participant inserts; move to server transactional path.

Draft attachments failing: never send using "draft" id; create conversation first server-side.

Service custom offer insert: canonical message schema uses body, not content.

serviceId dropped between /messages/new and loader: preserve and map into metadata.context.kind='service'.

service_offer flow incomplete: choose one canonical endpoint and schema; do not update only messages.metadata if there is a separate service_custom_offers table.

Read receipts: set read_at when marking read.

Transaction redirect: do not match conversations.order_id against transactionId; use correct mapping (transaction -> order -> conversation) or attach transaction context to a message.

Rate limit inconsistency: ensure limiter actually respects limit params or standardize fixed limits.

Reply feature: fetch must include reply_to_message_id and referenced message summary.

Conversation list listing chip bug: do not always show listing chip due to fallback titles; render chips only when metadata.context exists on last message or conversation has explicit pinned context.

Minimal Test Matrix

Single thread: open chat from multiple listings/orders with same user → same conversation id

Context attach: listing + order context previews persist per message, clickable for both users

Draft attachments: image/document/offer from draft creates conversation and sends successfully

Realtime: two browsers; messages appear instantly in list + window; no refresh; no duplicates

Read receipts: receiving side marks read; sender sees read_at reflected

Reply: reply_to renders and can navigate to original

Admin dispute: admin join works only on disputes; badge + distinct styling

RLS: third user cannot select conversation/messages; realtime payloads still deliver for participants