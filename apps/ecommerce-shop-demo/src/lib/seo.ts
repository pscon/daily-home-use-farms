import "server-only";
import { siteUrl } from "@/env";
import type { Product } from "./catalog/types";
import { site } from "./site";

// schema.org objects for the JSON-LD on each page. Only facts the page itself shows go in:
// the demo's star ratings are left out on purpose, since they aren't real reviews.

export function absoluteUrl(path: string): string {
  return new URL(path, `${siteUrl()}/`).toString();
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "Store"],
    "@id": absoluteUrl("/#organization"),
    name: site.name,
    alternateName: site.displayName,
    description: site.description,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/icon.svg"),
    image: absoluteUrl("/farm/daily-farm-social.jpg"),
    email: site.email,
    telephone: site.phoneHref,
    address: {
      "@type": "PostalAddress",
      streetAddress: "22 Tarmac Road",
      addressLocality: "Sango Ota",
      addressRegion: "Ogun State",
      addressCountry: "NG",
    },
    areaServed: [
      { "@type": "City", name: "Sango Ota" },
      { "@type": "AdministrativeArea", name: "Ogun State" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "22:00",
    },
    paymentAccepted: "Bank transfer; Paystack payment link when provided",
    contactPoint: [
      { "@type": "ContactPoint", telephone: site.phoneHref, contactType: "sales", availableLanguage: "English" },
      { "@type": "ContactPoint", telephone: site.secondaryPhoneHref, contactType: "sales", availableLanguage: "English" },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: site.name,
    alternateName: site.displayName,
    url: absoluteUrl("/"),
    inLanguage: site.locale,
    publisher: { "@id": absoluteUrl("/#organization") },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${absoluteUrl("/search")}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqPageJsonLd(items: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbJsonLd(trail: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function itemListJsonLd(name: string, products: readonly Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/products/${product.handle}`),
      name: product.title,
    })),
  };
}

export function productJsonLd(product: Product) {
  const url = absoluteUrl(`/products/${product.handle}`);
  return {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "@id": `${url}#product`,
    name: product.title,
    description: product.description.join(" "),
    url,
    image: product.images.map((image) => absoluteUrl(image.src)),
    brand: { "@type": "Brand", name: site.name },
    color: product.color,
    productGroupID: product.handle,
    variesBy: ["https://schema.org/size"],
    hasVariant: product.sizes.map((size) => ({
      "@type": "Product",
      sku: `${product.handle}-${size.toLowerCase()}`,
      name: `${product.title}, ${product.color}, ${size}`,
      size,
      color: product.color,
      image: absoluteUrl(product.images[0]?.src ?? "/icon.svg"),
    })),
  };
}
