import { SearchIcon } from "@nuvui/icons";
import {
  Button,
  Empty,
  EmptyActions,
  EmptyDescription,
  EmptyMedia,
  EmptyTitle,
  Input,
  InputGroup,
  InputGroupAddon,
} from "@nuvui/react";
import type { Metadata } from "next";
import Form from "next/form";
import Link from "next/link";
import { Suspense } from "react";
import { CatalogHeader } from "@/components/catalog-header/catalog-header";
import { CatalogToolbar } from "@/components/catalog-toolbar/catalog-toolbar";
import { CatalogSkeleton } from "@/components/page-skeleton/page-skeleton";
import { ProductGrid } from "@/components/product-grid/product-grid";
import { searchProducts } from "@/lib/catalog";
import { parseSearchParams } from "@/lib/catalog/query";
import { pageMetadata } from "@/lib/metadata";
import "./search.scss";

const suggestions = [
  { label: "Small eggs", q: "small eggs" },
  { label: "Medium eggs", q: "medium eggs" },
  { label: "Big eggs", q: "big eggs" },
  { label: "Crate of 30", q: "crate 30" },
] as const;

export async function generateMetadata({ searchParams }: PageProps<"/search">): Promise<Metadata> {
  const { q } = parseSearchParams(await searchParams);
  return pageMetadata({
    title: q ? `Search results for “${q}”` : "Search",
    description: "Search Daily Home Use Farm Limited's available egg sizes and crates.",
    path: "/search",
    // Result pages are thin and endless; keep them out of the index, but follow their links.
    noindex: true,
  });
}

// The URL is read inside a Suspense boundary, so a navigation shows the skeleton at once and
// the page streams in behind it. The HTML still carries the whole page for search engines.
export default function SearchPage(props: PageProps<"/search">) {
  return (
    <Suspense fallback={<CatalogSkeleton label="Searching the collection" />}>
      <Search {...props} />
    </Suspense>
  );
}

async function Search({ searchParams }: PageProps<"/search">) {
  const { q, sort } = parseSearchParams(await searchParams);
  const results = q ? await searchProducts(q, sort) : [];

  return (
    <>
      <CatalogHeader
        trail={[
          { name: "Home", path: "/" },
          { name: "Search", path: "/search" },
        ]}
        eyebrow="Find your eggs"
        title={q ? `“${q}”` : "Search"}
        description={
          q
            ? `${results.length} ${results.length === 1 ? "product matches" : "products match"} your search.`
            : "Search by egg size or crate type."
        }
      >
        <Form action="/search" className="search-form" role="search">
          <InputGroup className="search-form__group">
            <InputGroupAddon>
              <SearchIcon size={18} />
            </InputGroupAddon>
            <Input
              type="search"
              name="q"
              defaultValue={q}
              placeholder="Try “medium eggs” or “crate of 30”"
              aria-label="Search depot products"
              autoComplete="off"
              enterKeyHint="search"
              maxLength={80}
            />
          </InputGroup>
          <Button type="submit" size="lg">
            Search
          </Button>
        </Form>
      </CatalogHeader>

      {q && results.length > 0 && (
        <>
          <CatalogToolbar
            pathname="/search"
            title="Search results"
            count={results.length}
            sort={sort}
            keep={{ q }}
          />
          <div className="page page--flush">
            <ProductGrid
              products={results}
              label={`Search results for ${q}`}
              headingLevel={2}
              preloadCount={4}
            />
          </div>
        </>
      )}

      {(!q || results.length === 0) && (
        <div className="page">
          <Empty className="search-form__empty">
            <EmptyMedia>
              <SearchIcon size={28} />
            </EmptyMedia>
            <EmptyTitle asChild>
              <h2>{q ? "Nothing matches that search" : "Start with a word or two"}</h2>
            </EmptyTitle>
            <EmptyDescription>
              {q
                ? "Check the spelling, try a broader word, or start from one of these."
                : "Or begin with one of our available egg sizes."}
            </EmptyDescription>
            <EmptyActions className="search-form__suggestions">
              {suggestions.map((suggestion) => (
                <Button key={suggestion.q} asChild intent="secondary" size="sm">
                  <Link href={`/search?q=${encodeURIComponent(suggestion.q)}`}>
                    {suggestion.label}
                  </Link>
                </Button>
              ))}
            </EmptyActions>
          </Empty>
        </div>
      )}
    </>
  );
}
