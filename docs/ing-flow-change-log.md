# ING Recommendation Flow Change Log

## Scope
- Goal: align `home -> market -> detail -> purchase` as one recommendation-guided flow.
- Status: in progress
- Owner: Codex pair session

## Files Changed
- `app/data/mockdata.ts`
- `app/market/page.tsx`
- `app/market/[id]/page.tsx`
- `docs/ing-flow-change-log.md`

## What Changed
### Market page
- Repositioned from a generic listing page into a recommendation curation page.
- Simplified filters around skin focus, category, brand, and light sorting.
- Kept recommendation-first product browsing with reason and caution visible before detail.

### Product detail page
- Rebuilt as a judgment-support page instead of a plain commerce detail.
- Section order now follows: summary, recommendation reasoning, caution, ingredient interpretation, alternative, purchase CTA.
- Added explicit external purchase flow so recommendation can lead to action.

### Data model
- Added recommendation-oriented fields to `sampleProducts`:
  - `recommendedFor`
  - `recommendReason`
  - `recommendationPoints`
  - `caution`
  - `cautionPoints`
  - `oneLineSummary`
  - `purchaseLink`
  - `brandAlias`
- Expanded `detailedProducts` so all main products support the new detail page flow.
- Added lightweight TypeScript types for product summary/detail and ingredient combo data.

## Purchase Flow Notes
- Market cards are intended to move users into detail for judgment.
- Detail page includes external mall CTA to complete the flow.
- Current purchase links are placeholders and all route to Coupang home for now.

## Intentionally Left Untouched
- `app/page.tsx` home direction was preserved.
- Auth, signup, mypage, MBTI, backend, and database work were not touched.
- No large component architecture refactor was introduced.

## Follow-up Candidates
- Replace placeholder purchase links with product-specific external URLs.
- Sync home page local recommendation copy with `mockdata.ts` to avoid duplicate content.
- Clean up older repository-wide lint issues outside this focused flow work.

## Design Refresh (2026-03-25)
- Home and market pages received visual polish to align with the desired clean, modern brand tone.
- Adjusted chip/button weights, shadows, and backgrounds for a more consistent premium feel.
- Market grid now shows smaller cards to surface more products per view while keeping readability.

## Market Light Refactor (2026-03-25)
- Removed heavy top-area blocks to expose products within the first scroll.
- Reduced filter dominance: skin focus stays primary, category is secondary, brand/sorting removed from main UI.
- Added a clear top recommendation set (2-3 cards) followed by the rest of the comparison grid.
- Kept recommendation-first card scanning by de-emphasizing commerce cues in recommendation cards.
