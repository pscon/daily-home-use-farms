export const GENDERS = ["unisex"] as const;
export type Gender = (typeof GENDERS)[number];
export const CATEGORIES = ["small", "medium", "big"] as const;
export type Category = (typeof CATEGORIES)[number];
export const SIZES = ["Crate"] as const;
export type Size = (typeof SIZES)[number];
export const SORTS = ["featured", "price-asc", "price-desc", "rating", "name"] as const;
export type Sort = (typeof SORTS)[number];
export interface ProductImage { readonly src: string; readonly alt: string }
export interface Product {
  readonly handle: string; readonly title: string; readonly summary: string; readonly description: readonly string[];
  readonly price: number; readonly compareAtPrice?: number; readonly color: string; readonly sizes: readonly Size[];
  readonly gender: Gender; readonly category: Category; readonly rating: number; readonly reviewCount: number;
  readonly images: readonly ProductImage[];
}
export interface Collection {
  readonly handle: string; readonly title: string; readonly description: string; readonly tagline: string;
  readonly image: ProductImage; readonly rule: CollectionRule;
}
export type CollectionRule =
  | { readonly kind: "all" } | { readonly kind: "gender"; readonly gender: Gender }
  | { readonly kind: "category"; readonly category: Category } | { readonly kind: "sale" }
  | { readonly kind: "handles"; readonly handles: readonly string[] };
export const PRODUCT_IMAGE_SIZE = 1024;
