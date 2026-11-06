import {
  Button,
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarLink,
  NavbarMenu,
  NavbarNav,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@nuvui/react";
import { PhoneCallIcon } from "@nuvui/icons";
import Image from "next/image";
import Link from "next/link";
import { CartSheet } from "@/components/cart/cart-sheet";
import { site } from "@/lib/site";
import "./site-header.scss";

const products = [
  { href: "/collections/all", label: "Fresh eggs" },
  { href: "/poultry/chickens", label: "Chickens" },
  { href: "/poultry/turkeys", label: "Turkeys" },
  { href: "/poultry/day-old-chicks", label: "Day-old chicks" },
] as const;

function ProductsPanel() {
  return (
    <div className="site-header__panel">
      <div className="site-header__panel-links">
        <p className="site-header__panel-title">Our produce</p>
        <ul className="site-header__panel-list">
          {products.map((product, index) => (
            <li key={product.href}>
              <NavigationMenuLink asChild>
                <Link
                  className={`site-header__panel-link${index === 0 ? " site-header__panel-link--featured" : ""}`}
                  href={product.href}
                >
                  {product.label}
                  <span aria-hidden="true">↗</span>
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </div>
      <NavigationMenuLink asChild>
        <Link className="site-header__feature" href="/poultry/chickens">
          <span className="site-header__feature-media">
            <Image className="site-header__feature-image" src="/farm/hen-laying-eggs.jpg" alt="Brown laying hen in a nesting box beside fresh eggs" width={440} height={550} sizes="220px" />
          </span>
          <span className="site-header__feature-label">Life around the coop</span>
          <span className="site-header__feature-copy">See our poultry and ask about today’s availability.</span>
        </Link>
      </NavigationMenuLink>
    </div>
  );
}

export function SiteHeader() {
  return (
    <Navbar sticky collapse="lg" className="site-header">
      <NavbarBrand>
        <Link className="site-header__brand" href="/" aria-label={`${site.name}, home`}>
          <span className="site-header__mark" aria-hidden="true" />
          <span className="site-header__brand-full">Daily Home Use Farm</span>
          <span className="site-header__brand-short">Daily Farm</span>
        </Link>
      </NavbarBrand>
      <NavbarNav className="site-header__nav" asChild>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent><ProductsPanel /></NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem><NavigationMenuLink asChild><Link href="/collections/all">Shop eggs</Link></NavigationMenuLink></NavigationMenuItem>
            <NavigationMenuItem><NavigationMenuLink asChild><Link href="/about">Our farm</Link></NavigationMenuLink></NavigationMenuItem>
            <NavigationMenuItem><NavigationMenuLink asChild><Link href="/#ordering">How to order</Link></NavigationMenuLink></NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </NavbarNav>
      <NavbarActions className="site-header__actions">
        <Button className="site-header__call" asChild intent="ghost" size="sm"><a href={`tel:${site.phoneHref}`} aria-label={`Call Daily Home Use Farm on ${site.phone}`}><PhoneCallIcon size={16} /> Call</a></Button>
        <Button className="site-header__whatsapp" asChild intent="ghost" size="sm"><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a></Button>
        <CartSheet />
      </NavbarActions>
      <NavbarMenu>
        <div className="site-header__mobile">
          <p className="site-header__mobile-title">Products</p>
          {products.map((product) => <NavbarLink asChild key={product.href}><Link href={product.href}>{product.label}</Link></NavbarLink>)}
          <p className="site-header__mobile-title">Explore</p>
          <NavbarLink asChild><Link href="/about">Our farm</Link></NavbarLink>
          <NavbarLink asChild><Link href="/#ordering">How to order</Link></NavbarLink>
          <NavbarLink asChild><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp us</a></NavbarLink>
          <p className="site-header__mobile-title">Call the farm</p>
          <NavbarLink asChild><a className="site-header__phone-link" href={`tel:${site.phoneHref}`}><PhoneCallIcon size={17} /> {site.phone}</a></NavbarLink>
          <NavbarLink asChild><a className="site-header__phone-link" href={`tel:${site.secondaryPhoneHref}`}><PhoneCallIcon size={17} /> {site.secondaryPhone}</a></NavbarLink>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
