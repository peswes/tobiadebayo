# Demarketplace Messaging Context

## System Snapshot
The messaging system is a Supabase Realtime chat implementation with:
- Routes: `/messages`, `/messages/new`, `/messages/u/[username]`, `/messages/[id]`
- Draft-first conversation flow: new conversation may not exist until first message send
- Message model supporting: `text`, `offer`, `image`, `document`, `listing_inquiry`, `order_inquiry`, `service_offer` (partially wired)
- Unread logic based on `messages.read`
- Presence based on `users.last_seen` via `heartbeat()`
- Desktop 3-pane layout (conversation list, chat window, info panel)
- Mobile list/chat switching behavior

## Entry Triggers To Messaging
Common chat triggers come from:
- Listing and feed pages -> `/messages/new?userId=...&listingId=...`
- Service pages -> `/messages/new?userId=...&serviceId=...`
- Order and seller dashboard pages -> `/messages?to=...&orderId=...`
- Profile page -> `/messages/new?userId=...`
- Username route -> `/messages/u/[username]` -> redirects to `/messages/new`
- Notification toast click -> `/messages/{conversationId}`

## Product Constraints
1. Keep one relationship-level general conversation between two users.
2. Context (listing/order/service reference) should be attached per message metadata, not tied to multiple duplicated conversations.
3. Admin joins only dispute threads and must be visually distinct.
4. Realtime updates should not require refresh.
5. Desktop right panel should support details and media/files discovery.

## Known Breakpoints
1. Conversation creation may fail if participant insert policies block client inserts.
2. Draft attachments can fail because attachment send uses `conversation.id` even when it is a temporary draft id.
3. Service custom offer API likely fails if writing `content` instead of `body` to `messages`.
4. `serviceId` may be forwarded in `/messages/new` but not fully consumed in `/messages` loader props.
5. Service-offer action handling can be inconsistent between `messages.metadata` and `service_custom_offers` rows.
6. Realtime read update may set `read` without `read_at`, while UI relies on `read_at` for checkmarks.
7. Transaction-to-chat redirect logic can mismatch transaction id vs order id context.
8. Rate-limit helper may ignore per-route limit argument.
9. Reply flow can be partial if `reply_to_message_id` is inserted but not selected/rendered.
10. Conversation list can show misleading listing chip fallback labels.

## DB / RLS Considerations
- `find_existing_conversation` function has evolved through multiple migrations; prefer current canonical behavior and avoid reintroducing old context-splitting behavior.
- Participant insert policy changes can break draft creation if client still inserts participants directly.
- Messaging INSERT/UPDATE policies must preserve sender integrity and participation checks.
- Realtime delivery relies on table publication and SELECT policy visibility.

## Preferred Fix Direction
1. Move conversation creation + participant creation to a trusted server-side transactional path.
2. Make draft attachment sends resolve/create conversation before insert.
3. Standardize message schema around `body` + `type` + `metadata`.
4. Keep per-message context metadata for listing/order/service cards.
5. Consolidate duplicated/legacy chat components to reduce drift.
6. Add query efficiency improvements (pagination/cursors, lightweight unread aggregation).

## Validation Checklist
Run these after any messaging change:
1. New chat from listing sends context card and persists.
2. New chat from order sends context card and persists.
3. Draft text and draft attachment both work.
4. Existing conversation send/receive realtime works.
5. Offer and service-offer actions update expected records.
6. Unread badge count is accurate after open/read/send.
7. Mobile navigation state and desktop 3-pane state are stable.
8. Dispute/admin conversation permissions still hold.
