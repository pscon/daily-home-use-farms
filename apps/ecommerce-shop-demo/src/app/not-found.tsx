import { Button } from "@nuvui/react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="page page--message">
      <p className="page__eyebrow">Error 404</p>
      <h1 className="page__title">We couldn’t find that page</h1>
      <p className="page__lede">
        The product or page you were looking for may have moved, or the link may be out of date.
      </p>
      <div className="page__actions">
        <Button asChild>
          <Link href="/collections/all">Shop fresh eggs</Link>
        </Button>
        <Button asChild intent="secondary">
          <Link href="/">Back to the egg depot</Link>
        </Button>
      </div>
    </div>
  );
}
