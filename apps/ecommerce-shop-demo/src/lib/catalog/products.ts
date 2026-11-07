import type { Product } from "./types";
export const products = [
  {
    handle: "small-eggs-30-crate", title: "Small Eggs",
    summary: "A dependable everyday 30-egg crate for homes and small kitchens.",
    description: ["Fresh Small eggs packed as one complete crate of 30.", "A practical choice for everyday cooking, breakfast, snacks and household use.", "Contact the egg depot on WhatsApp or call for today’s price, availability and delivery details."],
    price: 4500, color: "Natural brown", sizes: ["Crate"], gender: "unisex", category: "small", rating: 5, reviewCount: 0,
    images: [
      { src: "/farm/eggs-close.jpeg", alt: "Fresh brown eggs stacked in crates at Daily Home Use Farm" },
      { src: "/farm/eggs-room.jpeg", alt: "Fresh egg inventory arranged in the depot room" },
      { src: "/farm/eggs-basket.jpg", alt: "Fresh eggs arranged in a rustic basket" },
    ],
  },
  {
    handle: "medium-eggs-30-crate", title: "Medium Eggs",
    summary: "Our versatile house favourite, supplied as a fresh 30-egg crate.",
    description: ["Fresh Medium eggs packed as one complete crate of 30.", "Balanced in size and ideal for families, bakers, caterers and food businesses.", "Contact the egg depot on WhatsApp or call for today’s price. Larger quantities can be discussed directly."],
    price: 5000, color: "Natural brown", sizes: ["Crate"], gender: "unisex", category: "medium", rating: 5, reviewCount: 0,
    images: [
      { src: "/farm/eggs-room.jpeg", alt: "Many crates of fresh brown eggs ready for customers" },
      { src: "/farm/eggs-close.jpeg", alt: "Close view of fresh eggs arranged in trays" },
      { src: "/farm/eggs-nest.jpg", alt: "Fresh eggs beside a woven basket" },
    ],
  },
  {
    handle: "big-eggs-30-crate", title: "Big Eggs",
    summary: "Generously sized eggs in a complete 30-egg crate.",
    description: ["Fresh Big eggs packed as one complete crate of 30.", "A fuller option for generous portions, bakeries, restaurants and high-volume kitchens.", "There is no maximum online quantity. Send your bag to us and we will confirm today’s depot price, stock and quantity offer."],
    price: 5500, color: "Natural brown", sizes: ["Crate"], gender: "unisex", category: "big", rating: 5, reviewCount: 0,
    images: [
      { src: "/farm/eggs-close.jpeg", alt: "Large fresh brown eggs arranged in crates" },
      { src: "/farm/eggs-room.jpeg", alt: "Stacks of 30-egg crates at Daily Home Use Farm" },
      { src: "/farm/hens.jpg", alt: "Hens walking outdoors on a farm" },
    ],
  },
] as const satisfies readonly Product[];
