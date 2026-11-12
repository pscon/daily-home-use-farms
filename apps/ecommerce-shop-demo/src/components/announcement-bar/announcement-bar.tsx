import Link from "next/link";
import "./announcement-bar.scss";
export function AnnouncementBar() {
  return <aside className="announcement-bar" aria-label="Store news"><p className="announcement-bar__text">Fresh eggs in Sango Ota · Open 24/7 · <Link className="announcement-bar__link" href="/policies/shipping-returns">Delivery agreed by phone</Link></p></aside>;
}
