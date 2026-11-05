import { Navbar, NavbarBrand, NavbarLink, NavbarMenu, NavbarNav } from "@nuvui/react";
import Link from "next/link";
import { CartSheet } from "@/components/cart/cart-sheet";
import { mainNav, site } from "@/lib/site";
import "./site-header.scss";

export function SiteHeader() {
  return (
    <Navbar sticky collapse="lg" className="site-header">
      <NavbarBrand><Link className="site-header__brand" href="/" aria-label={`${site.name}, home`}><span aria-hidden="true">◯</span> {site.shortName}</Link></NavbarBrand>
      <NavbarNav>{mainNav.map((link) => <NavbarLink asChild key={link.href}><Link href={link.href}>{link.label}</Link></NavbarLink>)}</NavbarNav>
      <div className="site-header__actions"><a className="site-header__whatsapp" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a><CartSheet /></div>
      <NavbarMenu>{mainNav.map((link) => <NavbarLink asChild key={link.href}><Link href={link.href}>{link.label}</Link></NavbarLink>)}</NavbarMenu>
    </Navbar>
  );
}
