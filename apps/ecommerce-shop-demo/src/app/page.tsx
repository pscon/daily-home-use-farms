import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/home/hero/hero";
import { ProductGrid } from "@/components/product-grid/product-grid";
import { getProductsByHandles } from "@/lib/catalog";
import { NEW_ARRIVALS } from "@/lib/catalog/collections";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import "./home.scss";

export const metadata: Metadata = { ...pageMetadata({ title: site.name, description: site.description, path: "/" }), title: { absolute: `${site.name} | ${site.tagline}` } };
export default async function HomePage() {
  const products = await getProductsByHandles(NEW_ARRIVALS);
  return <>
    <Hero />
    <section className="farm-strip" aria-label="Farm promises"><span>Farm fresh</span><i>✦</i><span>Three sizes</span><i>✦</i><span>30 eggs per crate</span><i>✦</i><span>Pickup or delivery</span></section>
    <section className="section farm-collection" aria-labelledby="daily-collection"><div className="farm-heading"><div><p className="farm-kicker">The daily collection</p><h2 id="daily-collection">Choose your crate.</h2></div><p>All three sizes are available. Prices are temporary and the final total is confirmed with you before payment.</p></div><ProductGrid products={products} label="Fresh egg crates" /></section>
    <section className="farm-editorial"><div className="farm-editorial__image"><Image src="/farm/eggs-basket.jpg" alt="Fresh eggs arranged in a woven basket" fill sizes="(min-width:64rem) 56vw,100vw" /></div><div className="farm-editorial__copy"><p className="farm-kicker">From our hands to your home</p><h2>A dependable daily staple, handled with care.</h2><p>We supply households, bakers, restaurants, caterers and retailers with fresh eggs from Sango Ota.</p><p>Ordering more? Add the crates you need and we’ll discuss wholesale pricing directly.</p><Link className="farm-link" href="/about">Discover our farm <span>↗</span></Link></div></section>
    <section className="section farm-steps"><div className="farm-heading"><div><p className="farm-kicker">A simple way to buy</p><h2>From bag to pickup.</h2></div></div><ol><li><span>01</span><h3>Choose</h3><p>Select a size and add one or more 30-egg crates.</p></li><li><span>02</span><h3>Confirm</h3><p>Send your bag on WhatsApp. We agree delivery and any wholesale price.</p></li><li><span>03</span><h3>Pay</h3><p>Use the Paystack payment link shared after your final total is confirmed.</p></li></ol></section>
    <section className="farm-story"><div><p className="farm-kicker">The real farm</p><h2>Plenty ready,<br/><em>every day.</em></h2><p>Our own photographs show the eggs currently handled by Daily Home Use Farm Limited.</p><a className="farm-link" href="https://wa.me/2348023457318" target="_blank" rel="noreferrer">Ask about today's stock <span>↗</span></a></div><div className="farm-story__image"><Image src="/farm/eggs-nest.jpg" alt="Brown eggs in cartons" fill sizes="(min-width:64rem) 45vw,100vw" /></div></section>
    <section className="farm-location"><div className="farm-location__intro"><p className="farm-kicker">Visit or call</p><h2>Open every day,<br/><em>7am to 10pm.</em></h2></div><div className="farm-location__details"><div className="farm-location__contact"><p>22 Tarmac Road<br/>Sango Ota, Ogun State</p><p><a href="tel:+2348023457318">0802 345 7318</a><br/><a href="mailto:hello@dailyhomeusefarm.com">hello@dailyhomeusefarm.com</a></p></div><a className="farm-button" href="https://wa.me/2348023457318" target="_blank" rel="noreferrer">Start a WhatsApp chat <span aria-hidden="true">↗</span></a></div></section>
  </>;
}
