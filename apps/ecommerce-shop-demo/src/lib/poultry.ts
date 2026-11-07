export type PoultryPage = {
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  intro: string;
  image: string;
  imageAlt: string;
  note: string;
  enquiry: string;
};

export const poultryPages: PoultryPage[] = [
  {
    slug: "chickens",
    title: "Chickens",
    eyebrow: "Poultry from Sango Ota",
    headline: "Healthy birds, supplied with a human touch.",
    intro: "Ask our depot about chickens currently available, the quantities you need and collection or delivery arrangements.",
    image: "/farm/hen-laying-eggs.jpg",
    imageAlt: "Brown laying hen in a nesting box beside fresh eggs",
    note: "Stock and pricing change, so every poultry order is confirmed directly with the depot before payment.",
    enquiry: "Hello, I would like to ask about available chickens.",
  },
  {
    slug: "turkeys",
    title: "Turkeys",
    eyebrow: "Depot poultry",
    headline: "Turkey orders, confirmed around your needs.",
    intro: "Tell us the number of turkeys you need and when you need them. We will confirm current availability and pricing by phone or WhatsApp.",
    image: "/farm/turkeys.jpg",
    imageAlt: "White turkeys in a farm enclosure",
    note: "Because availability changes, turkey orders are enquiries until the depot confirms your quantity and price.",
    enquiry: "Hello, I would like to ask about available turkeys.",
  },
  {
    slug: "day-old-chicks",
    title: "Day-old chicks",
    eyebrow: "Young birds",
    headline: "Start your flock with the right conversation.",
    intro: "Contact us about upcoming batches, available quantities and the collection arrangements for day-old chicks.",
    image: "/farm/chick.jpg",
    imageAlt: "A young yellow chick",
    note: "Batch dates and breeds need to be confirmed directly with the depot. We will share the current details when you enquire.",
    enquiry: "Hello, I would like to ask about day-old chicks.",
  },
];

export function getPoultryPage(slug: string) {
  return poultryPages.find((page) => page.slug === slug);
}
