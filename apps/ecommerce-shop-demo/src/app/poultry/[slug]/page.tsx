import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPoultryPage, poultryPages } from "@/lib/poultry";
import { site } from "@/lib/site";
import "./poultry.scss";

export function generateStaticParams() {
  return poultryPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/poultry/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = getPoultryPage(slug);
  if (!page) return {};
  return { title: page.title, description: page.intro };
}

export default async function PoultryDetailPage({ params }: PageProps<"/poultry/[slug]">) {
  const { slug } = await params;
  const page = getPoultryPage(slug);
  if (!page) notFound();
  const whatsapp = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(page.enquiry)}`;

  return (
    <article className="poultry-page">
      <nav className="poultry-page__crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span><span>Poultry</span><span aria-hidden="true">/</span><strong>{page.title}</strong>
      </nav>
      <section className="poultry-page__hero">
        <div className="poultry-page__copy">
          <p className="poultry-page__eyebrow">{page.eyebrow}</p>
          <h1>{page.headline}</h1>
          <p className="poultry-page__intro">{page.intro}</p>
          <a className="poultry-page__button" href={whatsapp} target="_blank" rel="noreferrer">Ask about {page.title.toLowerCase()} <span aria-hidden="true">↗</span></a>
        </div>
        <div className="poultry-page__image"><Image src={page.image} alt={page.imageAlt} fill priority sizes="(min-width: 64rem) 52vw, 100vw" /></div>
      </section>
      <section className="poultry-page__details">
        <p className="poultry-page__eyebrow">Before you order</p>
        <h2>Availability first.<br/><em>Then we make it simple.</em></h2>
        <div><p>{page.note}</p><p>Pickup is available daily from 7am to 10pm at 22 Tarmac Road, Sango Ota. Delivery is agreed by phone.</p></div>
      </section>
      {page.slug === "chickens" && <section className="poultry-page__film"><video autoPlay muted loop playsInline preload="metadata" poster="/farm/hens-coop.jpg"><source src="/farm/hens-video.mp4" type="video/mp4" /></video><div><p className="poultry-page__eyebrow">Around the laying house</p><h2>See life around the coop.</h2><p>Supporting farm footage gives you a closer look at the birds behind the everyday egg.</p></div></section>}
      <section className="poultry-page__more">
        <p className="poultry-page__eyebrow">Also from the farm</p>
        <div>{poultryPages.filter((item) => item.slug !== page.slug).map((item) => <Link href={`/poultry/${item.slug}`} key={item.slug}><span>{item.title}</span><span aria-hidden="true">↗</span></Link>)}</div>
      </section>
    </article>
  );
}
