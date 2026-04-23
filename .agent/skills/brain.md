# Development Brain - Phase 2 Session

This document consolidates the technical context, implementation details, and architectural decisions made during the Phase 2 feature expansion (Jan 23, 2026).

## 🧩 Architectural Overview

### 1. Chat Order Context (`order_inquiry`)
- **Objective**: Link messaging to specific orders without requiring URL navigation.
- **Implementation**: 
    - Introduced a new message type: `order_inquiry`.
    - Metadata includes: `order_id`, `item_title`, `order_total`, `order_status`, `item_image`.
    - **Logic**: When a user clicks "Chat" from an Order Page, the metadata is passed. If it's the first message, the `order_inquiry` block is rendered as a rich card in `MessageBubble.tsx`.

### 2. Auto-Confirmation System
- **Objective**: Protect sellers from "forgotten" confirmations while giving buyers a clear window to dispute.
- **Database logic**:
    - Column `auto_confirm_at` added to `order_items`.
    - Trigger `on_order_item_delivered` sets this to `NOW() + 24 hours` when status becomes `delivered`.
- **Frontend**: `CountdownTimer` component added to `OrderDetailPage` to show buyers the remaining time.

### 3. Progressive Review System
- **Objective**: Allow feedback updates while ensuring integrity.
- **Logic**:
    - Users can see their own reviews on the Order Detail page.
    - **Edit Policy**: Reviews can be updated within **1 hour** of creation (enforced by RLS and API).
    - **API**: `/api/reviews/submit` redesigned to handle UPSERTs.

---

## 🗄️ Database Changes (Phase 2 Migration)

### New Table: `notifications`
```sql
CREATE TABLE public.notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id),
    type TEXT NOT NULL,
    title TEXT NOT NULL,
    message TEXT,
    metadata JSONB,
    read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Schema Modifications
- `users`: Added Google OAuth name resolution logic in `handle_new_user()` trigger.
- `order_items`: Added `auto_confirm_at` (TIMESTAMPTZ).
- `reviews`: Added support for editing within 1 hour via RLS.

---

## 📡 API Updates

### `POST /api/reviews/submit`
- **Body**: `{ id?, rating, comment, order_id?, transaction_id?, reviewed_user_id }`
- **Logic**: If `id` is present, it validates that `created_at > (NOW() - INTERVAL '1 hour')` and user owns the review before updating.

### `POST /api/escrow/action`
- **Logic**: Sellers marking items "shipped" or "delivered" now triggers notification events.

---

## 🚧 Known Debt & Next Steps

1. **Cron Job Execution**: The `auto_confirm_eligible_orders()` function exists but needs a scheduler (Supabase Edge Function or GitHub Action) to run hourly.
2. **Real-time UX**: The `OrderDetailPage` does not yet subscribe to real-time status changes.
3. **Dispute Resolution**: Currently only creates a record. Needs an admin-mediated chat interface and evidence upload UI.
