import { ArrowRightIcon } from "@nuvui/icons";
import { Button } from "@nuvui/react";
import Image from "next/image";
import Link from "next/link";
import "./hero.scss";
export function Hero() {
  return <section className="hero farm-hero" aria-labelledby="hero-title">
    <div className="hero__media">
      <Link className="hero__figure" href="/products/medium-eggs-30-crate" aria-label="Shop Medium eggs"><Image className="hero__image" src="/farm/eggs-room.jpeg" alt="Stacks of fresh eggs at Daily Home Use Farm" fill preload loading="eager" sizes="(min-width:64rem) 30vw,50vw" /></Link>
      <Link className="hero__figure hero__figure--offset" href="/products/big-eggs-30-crate" aria-label="Shop Big eggs"><Image className="hero__image" src="/farm/eggs-close.jpeg" alt="Close view of fresh brown eggs in crates" fill preload loading="eager" sizes="(min-width:64rem) 30vw,50vw" /></Link>
    </div>
    <div className="hero__content"><p className="hero__eyebrow">From our farm in Ogun State</p><h1 id="hero-title" className="hero__title">Fresh eggs,<br/><em>gathered daily.</em></h1><p className="hero__lede">Choose Small, Medium or Big eggs in complete crates of 30. We confirm every order personally before payment.</p><div className="hero__actions"><Button asChild size="lg"><Link href="/collections/all">Shop eggs <ArrowRightIcon size={16}/></Link></Button><Button asChild size="lg" intent="secondary"><a href="https://wa.me/2348023457318" target="_blank" rel="noreferrer">Talk to the farm</a></Button></div></div>
  </section>;
}
