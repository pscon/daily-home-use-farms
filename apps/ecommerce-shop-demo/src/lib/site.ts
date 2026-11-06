export const site = {
  name: "Daily Home Use Farm Limited", shortName: "Daily Home Use Farm",
  tagline: "Fresh eggs, gathered daily",
  description: "Fresh Small, Medium and Big eggs sold in 30-egg crates from our farm in Sango Ota, Ogun State.",
  locale: "en-NG", currency: "NGN", email: "hello@dailyhomeusefarm.com",
  phone: "08023457318", whatsapp: "2348023457318",
  address: "22 Tarmac Road, Sango Ota, Ogun State", hours: "7am–10pm daily",
  themeColor: { light: "#f3eee4", dark: "#18261c" },
} as const;

export const mainNav = [
  { label: "Shop eggs", href: "/collections/all" },
  { label: "Small", href: "/collections/small-eggs" },
  { label: "Medium", href: "/collections/medium-eggs" },
  { label: "Big", href: "/collections/big-eggs" },
  { label: "Our farm", href: "/about" },
] as const;

export const footerNav = [
  { title: "Shop", links: [
    { label: "All eggs", href: "/collections/all" }, { label: "Small eggs", href: "/collections/small-eggs" },
    { label: "Medium eggs", href: "/collections/medium-eggs" }, { label: "Big eggs", href: "/collections/big-eggs" },
  ] },
  { title: "Order", links: [
    { label: "Your bag", href: "/cart" }, { label: "Search", href: "/search" },
    { label: "Pickup & delivery", href: "/policies/shipping-returns" },
  ] },
  { title: "The farm", links: [
    { label: "Our story", href: "/about" }, { label: "Privacy", href: "/policies/privacy" },
    { label: "Terms", href: "/policies/terms" },
  ] },
] as const;
