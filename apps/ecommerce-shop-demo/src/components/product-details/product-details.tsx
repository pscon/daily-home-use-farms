import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@nuvui/react";
import Link from "next/link";
import type { Product } from "@/lib/catalog/types";
import "./product-details.scss";
const HANDLING = ["One complete crate contains 30 eggs", "Keep in a cool, dry place", "Handle the crate upright and with care", "Availability is confirmed before payment"] as const;
export function ProductDetails({ product }: { product: Product }) {
  return <Accordion type="multiple" defaultValue={["description"]} className="product-details">
    <AccordionItem value="description"><AccordionTrigger headingLevel={2}>Description</AccordionTrigger><AccordionContent forceMount className="product-details__panel">{product.description.map(p => <p key={p} className="product-details__text">{p}</p>)}</AccordionContent></AccordionItem>
    <AccordionItem value="pack"><AccordionTrigger headingLevel={2}>Pack and handling</AccordionTrigger><AccordionContent forceMount className="product-details__panel"><ul className="product-details__list">{HANDLING.map(line => <li key={line}>{line}</li>)}</ul></AccordionContent></AccordionItem>
    <AccordionItem value="delivery"><AccordionTrigger headingLevel={2}>Pickup and delivery</AccordionTrigger><AccordionContent forceMount className="product-details__panel"><p className="product-details__text">Pickup is available daily from 7am to 10pm at 22 Tarmac Road, Sango Ota. Today’s egg price, delivery location, fee and timing are agreed with the egg depot by phone or WhatsApp before payment. <Link className="product-details__link" href="/policies/shipping-returns">Read the ordering details</Link>.</p></AccordionContent></AccordionItem>
  </Accordion>;
}
