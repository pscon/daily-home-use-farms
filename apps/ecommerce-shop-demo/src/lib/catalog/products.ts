import type { Product } from "./types";
export const products = [
  {
    handle: "small-eggs-30-crate", title: "Small Eggs",
    summary: "A dependable everyday 30-egg crate for homes and small kitchens.",
    description: ["Fresh Small eggs packed as one complete crate of 30.", "A practical choice for everyday cooking, breakfast, snacks and household use.", "The displayed price is temporary. We confirm availability, delivery and the final total on WhatsApp before payment."],
    price: 4500, color: "Natural brown", sizes: ["Crate"], gender: "unisex", category: "small", rating: 5, reviewCount: 0,
    images: [
      { src: "/farm/eggs-close.jpeg", alt: "Fresh brown eggs stacked in crates at Daily Home Use Farm" },
      { src: "/farm/eggs-room.jpeg", alt: "Fresh egg inventory arranged in the farm packing room" },
      { src: "/farm/eggs-basket.jpg", alt: "Fresh eggs arranged in a rustic basket" },
    ],
  },
  {
    handle: "medium-eggs-30-crate", title: "Medium Eggs",
    summary: "Our versatile house favourite, supplied as a fresh 30-egg crate.",
    description: ["Fresh Medium eggs packed as one complete crate of 30.", "Balanced in size and ideal for families, bakers, caterers and food businesses.", "The displayed price is temporary. Wholesale pricing can be discussed for larger quantities."],
    price: 5000, color: "Natural brown", sizes: ["Crate"], gender: "unisex", category: "medium", rating: 5, reviewCount: 0,
    images: [
      { src: "/farm/eggs-room.jpeg", alt: "Many crates of fresh brown eggs ready for customers" },
      { src: "/farm/eggs-close.jpeg", alt: "Close view of farm eggs arranged in trays" },
      { src: "/farm/eggs-nest.jpg", alt: "Fresh eggs beside a woven basket" },
    ],
  },
  {
    handle: "big-eggs-30-crate", title: "Big Eggs",
    summary: "Generously sized eggs in a complete 30-egg crate.",
    description: ["Fresh Big eggs packed as one complete crate of 30.", "A fuller option for generous portions, bakeries, restaurants and high-volume kitchens.", "There is no maximum online quantity. Send your bag to us and we will confirm stock and any wholesale offer."],
    price: 5500, color: "Natural brown", sizes: ["Crate"], gender: "unisex", category: "big", rating: 5, reviewCount: 0,
    images: [
      { src: "/farm/eggs-close.jpeg", alt: "Large fresh brown eggs arranged in farm crates" },
      { src: "/farm/eggs-room.jpeg", alt: "Stacks of 30-egg crates at Daily Home Use Farm" },
      { src: "/farm/hens.jpg", alt: "Hens walking outdoors on a farm" },
    ],
  },
] as const satisfies readonly Product[];
