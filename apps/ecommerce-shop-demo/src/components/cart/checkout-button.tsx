"use client";
import { ArrowRightIcon } from "@nuvui/icons";
import { Button } from "@nuvui/react";
import { cartTotals, useCartLines } from "./cart-store";
const money = (value:number) => new Intl.NumberFormat("en-NG", { style:"currency", currency:"NGN", maximumFractionDigits:0 }).format(value);
export function CheckoutButton({ className }: { className?: string }) {
  const lines = useCartLines();
  const { subtotal } = cartTotals(lines);
  function order() {
    const items = lines.map(line => `• ${line.title}: ${line.quantity} crate${line.quantity === 1 ? "" : "s"} (${money(line.price * line.quantity)})`);
    const text = ["Hello Daily Home Use Farm, I would like to order:", "", ...items, "", `Estimated retail subtotal: ${money(subtotal)}`, "", "Please confirm availability, pickup/delivery, wholesale pricing if applicable, and my final total."].join("\n");
    window.open(`https://wa.me/2348023457318?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }
  return <Button className={className} size="lg" onClick={order}>Confirm on WhatsApp <ArrowRightIcon size={16}/></Button>;
}
