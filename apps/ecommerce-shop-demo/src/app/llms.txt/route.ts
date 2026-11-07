import { absoluteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

export function GET() {
  const body = `# ${site.name}

> ${site.description}

${site.displayName} is the customer-facing name of ${site.name}. The business supplies fresh eggs from its egg depot at ${site.address}.

## Essential facts

- Products: Small, Medium and Big eggs
- Pack size: 30 eggs per complete crate
- Minimum order: 1 crate
- Maximum order: No stated maximum
- Opening hours: ${site.hours}
- Pickup: ${site.address}
- Delivery: Availability and fee are agreed by phone or WhatsApp
- Primary payment: Bank transfer after the final total is confirmed
- Alternative payment: A Paystack payment link may be provided
- Prices: Current prices are confirmed directly; no fixed price is published online
- WhatsApp and primary call: ${site.phone}
- Alternative call line: ${site.secondaryPhone}

## Main pages

- [Home](${absoluteUrl("/")})
- [All egg crates](${absoluteUrl("/collections/all")})
- [Small eggs](${absoluteUrl("/collections/small-eggs")})
- [Medium eggs](${absoluteUrl("/collections/medium-eggs")})
- [Big eggs](${absoluteUrl("/collections/big-eggs")})
- [Our egg depot](${absoluteUrl("/about")})
- [Chickens](${absoluteUrl("/poultry/chickens")})
- [Turkeys](${absoluteUrl("/poultry/turkeys")})
- [Day-old chicks](${absoluteUrl("/poultry/day-old-chicks")})

## Ordering

Choose one or more crates online, then contact the depot to confirm today's price, stock, pickup or delivery details, and the final total before paying.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
