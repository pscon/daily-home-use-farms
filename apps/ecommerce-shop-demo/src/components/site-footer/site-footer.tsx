import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import "./site-footer.scss";
export function SiteFooter() {
  return <footer className="site-footer">
    <div className="site-footer__main">
      <section className="site-footer__newsletter"><p className="site-footer__wordmark">{site.shortName}</p><h2 className="site-footer__heading">Fresh eggs, gathered daily.</h2><p className="site-footer__lede">Small, Medium and Big eggs in complete crates of 30. Pickup in Sango Ota or speak with us about delivery.</p><a className="site-footer__contact" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">Order on WhatsApp ↗</a></section>
      <nav className="site-footer__nav" aria-label="Footer">{footerNav.map(group => <div key={group.title} className="site-footer__group"><h2 className="site-footer__group-title">{group.title}</h2><ul className="site-footer__links">{group.links.map(link => <li key={link.href}><Link className="site-footer__link" href={link.href}>{link.label}</Link></li>)}</ul></div>)}</nav>
    </div>
    <div className="site-footer__base"><p>{site.address}</p><p><a href={`tel:+${site.whatsapp}`}>{site.phone}</a> · {site.hours}</p><a href={`mailto:${site.email}`}>{site.email}</a></div>
  </footer>;
}
