import type { Collection } from "./types";
export const NEW_ARRIVALS = ["small-eggs-30-crate", "medium-eggs-30-crate", "big-eggs-30-crate"] as const;
export const BESTSELLERS = ["medium-eggs-30-crate", "big-eggs-30-crate", "small-eggs-30-crate"] as const;
export const collections = [
  { handle: "all", title: "All eggs", tagline: "The daily collection", description: "Small, Medium and Big fresh eggs, each supplied in a complete crate of 30.", image: { src: "/farm/eggs-room.jpeg", alt: "Crates of fresh eggs at Daily Home Use Farm" }, rule: { kind: "all" } },
  { handle: "small-eggs", title: "Small Eggs", tagline: "Everyday value", description: "Fresh Small eggs in 30-egg crates for dependable everyday use.", image: { src: "/farm/eggs-close.jpeg", alt: "Small fresh eggs in crates" }, rule: { kind: "category", category: "small" } },
  { handle: "medium-eggs", title: "Medium Eggs", tagline: "The house favourite", description: "Versatile Medium eggs in 30-egg crates for families and food businesses.", image: { src: "/farm/eggs-room.jpeg", alt: "Medium fresh eggs ready for sale" }, rule: { kind: "category", category: "medium" } },
  { handle: "big-eggs", title: "Big Eggs", tagline: "A generous choice", description: "Generously sized fresh eggs, supplied in complete 30-egg crates.", image: { src: "/farm/eggs-close.jpeg", alt: "Big brown eggs arranged in crates" }, rule: { kind: "category", category: "big" } },
] as const satisfies readonly Collection[];
export const GENDER_COLLECTIONS = [] as const;
export const CATEGORY_COLLECTIONS = ["small-eggs", "medium-eggs", "big-eggs"] as const;
