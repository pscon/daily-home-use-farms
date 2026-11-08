import { ArrowRightIcon } from "@nuvui/icons";
import { Button, Separator } from "@nuvui/react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteBreadcrumb } from "@/components/site-breadcrumb/site-breadcrumb";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import "./about.scss";
export const metadata: Metadata = pageMetadata({ title: "Our egg depot", description: `Meet ${site.name}, supplying fresh eggs from our Sango Ota egg depot.`, path: "/about", image: { url: "/farm/eggs-room.jpeg", width: 780, height: 1040, alt: "Fresh eggs at Daily Home Use Farm Limited" } });
const principles = [
  { title: "Fresh stock", text: "Small, Medium and Big eggs are prepared for household and business orders in complete 30-egg crates." },
  { title: "Clear ordering", text: "Choose your crates online, then speak with us directly to confirm stock, delivery and the final amount." },
  { title: "Built for every buyer", text: "We welcome families, bakers, restaurants, caterers and retailers, with wholesale discussions for larger quantities." },
] as const;
export default function AboutPage() { return <>
  <div className="page"><SiteBreadcrumb trail={[{name:"Home",path:"/"},{name:"Our egg depot",path:"/about"}]}/><header className="about__intro"><p className="page__eyebrow">Sango Ota · Ogun State · Nigeria</p><h1 className="about__title">Good eggs. Honest service. <em>Every day.</em></h1><p className="page__lede">{site.name} supplies fresh eggs by the crate from our egg depot at 22 Tarmac Road, Sango Ota. Build your bag online, then contact us for today’s depot price, availability and delivery details.</p></header></div>
  <div className="about__gallery"><figure className="about__figure"><Image className="about__image" src="/farm/eggs-close.jpeg" alt="Close view of fresh eggs in crates" fill preload sizes="(min-width:48rem) 33vw,100vw"/></figure><figure className="about__figure about__figure--tall"><Image className="about__image" src="/farm/eggs-room.jpeg" alt="Stacks of fresh egg crates in the depot" fill sizes="(min-width:48rem) 33vw,100vw"/></figure><figure className="about__figure"><Image className="about__image" src="/farm/eggs-basket.jpg" alt="Fresh eggs in a woven basket" fill sizes="(min-width:48rem) 33vw,100vw"/></figure></div>
  <section className="section about__principles" aria-labelledby="principles-title"><h2 id="principles-title" className="about__heading">What we stand for</h2><ol className="about__list">{principles.map((p,i)=><li key={p.title} className="about__principle"><span className="about__number">0{i+1}</span><h3 className="about__principle-title">{p.title}</h3><p className="about__principle-text">{p.text}</p></li>)}</ol><Separator className="about__rule"/><div className="about__cta"><p className="about__cta-text">Ready to choose your crates?</p><Button asChild size="lg"><Link href="/collections/all">Shop all eggs <ArrowRightIcon size={16}/></Link></Button></div></section>
  </>; }
