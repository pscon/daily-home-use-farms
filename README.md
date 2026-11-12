# Daily Home Use Farm Limited

Mobile-first egg storefront for Daily Home Use Farm Limited, based in Sango Ota, Ogun State.

Customers can browse Small, Medium and Big eggs, add whole 30-egg crates to a persistent browser cart, and send an itemized order to the farm through WhatsApp. Delivery fees, wholesale pricing and the final Paystack payment amount are confirmed directly with the customer.

## Business details

- Address: Sango Ota, Ogun State
- Phone and WhatsApp: 08023457318
- Opening hours: Open 24/7
- Working email: hello@dailyhomeusefarm.com
- Currency: Nigerian naira (NGN)

## Technology

- Next.js 16
- React 19
- TypeScript
- Sass
- pnpm workspaces and Turborepo
- Browser-local cart storage
- WhatsApp order handoff

The MVP has no commerce backend or database. Paystack payment links are shared after the farm confirms the final order total.

## Local development

The repository includes a `.node-version` file for Node 26. With `fnm` installed:

```bash
fnm use
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

If port 3000 is occupied, the development server prints the next available local URL.

## Useful commands

```bash
pnpm dev
pnpm typecheck
pnpm build
pnpm lint
```

## Project structure

```text
apps/ecommerce-shop-demo/
  public/farm/          Farm and licensed stock media
  src/app/              Pages, metadata and policies
  src/components/       Storefront components
  src/lib/catalog/      Products and collections
  src/lib/site.ts       Business identity and contact details
```

## Current product data

The initial prices are placeholders and must be replaced before launch:

- Small Eggs — ₦4,500 per 30-egg crate
- Medium Eggs — ₦5,000 per 30-egg crate
- Big Eggs — ₦5,500 per 30-egg crate

## Media

The primary inventory photographs were supplied by the farm owner. Additional photographs in `public/farm` must have documented commercial usage rights. Do not add demo or third-party media without checking its license.

## License

The codebase retains the license and copyright notices in [LICENSE](./LICENSE). Product photography, business information and brand assets are not granted under the software license.
