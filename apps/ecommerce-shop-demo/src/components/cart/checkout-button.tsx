"use client";
import { ArrowRightIcon } from "@nuvui/icons";
import { Button } from "@nuvui/react";
import { useCartLines } from "./cart-store";
export function CheckoutButton({ className }: { className?: string }) {
  const lines = useCartLines();
  function order() {
    const items = lines.map(line => `• ${line.title}: ${line.quantity} crate${line.quantity === 1 ? "" : "s"}`);
    const text = ["Hello Daily Home Use Farm Limited, I would like to order:", "", ...items, "", "Please confirm today’s egg price, availability, pickup/delivery details and my final total."].join("\n");
    window.open(`https://wa.me/2348023457318?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }
  return <Button className={className} size="lg" onClick={order}>Confirm on WhatsApp <ArrowRightIcon size={16}/></Button>;
}
