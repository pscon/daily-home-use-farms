import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import "./site-footer.scss";
export function SiteFooter() {
  return <footer className="site-footer">
    <div className="site-footer__main">
      <section className="site-footer__updates"><p className="site-footer__wordmark">{site.shortName}</p><h2 className="site-footer__heading">Want today’s stock and price updates?</h2><p className="site-footer__lede">Message the farm on WhatsApp for current egg availability, poultry stock, wholesale pricing and delivery arrangements.</p><a className="site-footer__contact" href={`https://wa.me/${site.whatsapp}?text=Hello%2C%20please%20send%20me%20today%27s%20stock%20and%20price%20updates.`} target="_blank" rel="noreferrer">Get updates on WhatsApp ↗</a></section>
      <nav className="site-footer__nav" aria-label="Footer">{footerNav.map(group => <div key={group.title} className="site-footer__group"><h2 className="site-footer__group-title">{group.title}</h2><ul className="site-footer__links">{group.links.map(link => <li key={link.href}><Link className="site-footer__link" href={link.href}>{link.label}</Link></li>)}</ul></div>)}</nav>
    </div>
    <div className="site-footer__base"><p>{site.address}</p><p><a href={`tel:+${site.whatsapp}`}>{site.phone}</a> · {site.hours}</p><a href={`mailto:${site.email}`}>{site.email}</a></div>
  </footer>;
}
