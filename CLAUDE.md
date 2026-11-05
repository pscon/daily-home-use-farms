# Daily Home Use Farm Limited — repository notes

## Product scope

This is a frontend-only Next.js storefront for selling Small, Medium and Big eggs in whole 30-egg crates. The minimum order is one crate and there is no configured maximum.

The cart is stored in the browser. Checkout hands an itemized order to WhatsApp. Delivery, wholesale pricing and the final Paystack payment amount are confirmed manually.

## Development

```bash
fnm use
pnpm install
pnpm dev
pnpm typecheck
```

## Important files

- `apps/ecommerce-shop-demo/src/lib/site.ts` — business and navigation configuration
- `apps/ecommerce-shop-demo/src/lib/catalog/products.ts` — products and placeholder prices
- `apps/ecommerce-shop-demo/src/lib/catalog/collections.ts` — storefront collections
- `apps/ecommerce-shop-demo/src/app/page.tsx` — homepage composition
- `apps/ecommerce-shop-demo/src/app/home.scss` — homepage-specific styling
- `apps/ecommerce-shop-demo/public/farm/` — approved media

## Rules

- Keep all public prices in NGN.
- Every sellable unit is one 30-egg crate.
- Do not claim the frontend verifies Paystack payments.
- Do not invent reviews, certifications, delivery promises or farm statistics.
- Use only owner-supplied or commercially licensed media.
- Preserve responsive behavior, keyboard access and visible focus states.
