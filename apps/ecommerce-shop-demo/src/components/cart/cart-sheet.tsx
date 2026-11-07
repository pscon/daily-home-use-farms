"use client";

import { ShoppingBagIcon } from "@nuvui/icons";
import {
  Button,
  Empty,
  EmptyActions,
  EmptyDescription,
  EmptyMedia,
  EmptyTitle,
  ItemGroup,
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@nuvui/react";
import Link from "next/link";
import { CartLineItem } from "./cart-line-item";
import { useCartDrawer } from "./cart-provider";
import { cartTotals, useCartLines } from "./cart-store";
import { CheckoutButton } from "./checkout-button";
import "./cart-sheet.scss";

// The header's bag button and the drawer it opens.
export function CartSheet() {
  const lines = useCartLines();
  const { open, setOpen } = useCartDrawer();
  const { count } = cartTotals(lines);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          intent="ghost"
          className="cart-sheet__trigger"
          aria-label={
            count === 0 ? "Bag, empty" : `Bag, ${count} ${count === 1 ? "crate" : "crates"}`
          }
        >
          <ShoppingBagIcon size={22} />
          {count > 0 && (
            <span className="cart-sheet__count" aria-hidden="true">
              {count}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="cart-sheet">
        <SheetHeader>
          <SheetTitle className="cart-sheet__title">Your bag</SheetTitle>
          <SheetDescription>
            {count === 0
              ? "Nothing here yet."
              : `${count} ${count === 1 ? "crate" : "crates"} ready to confirm.`}
          </SheetDescription>
        </SheetHeader>
        <SheetBody className="cart-sheet__body">
          {count === 0 ? (
            <Empty className="cart-sheet__empty">
              <EmptyMedia>
                <ShoppingBagIcon size={28} />
              </EmptyMedia>
              <EmptyTitle asChild>
                <h3>Your bag is empty</h3>
              </EmptyTitle>
              <EmptyDescription>
                Choose Small, Medium or Big eggs in complete crates of 30.
              </EmptyDescription>
              <EmptyActions>
                <SheetClose asChild>
                  <Button asChild>
                    <Link href="/collections/all">Shop fresh eggs</Link>
                  </Button>
                </SheetClose>
              </EmptyActions>
            </Empty>
          ) : (
            <>
              <ItemGroup aria-label="Egg crates in your bag" className="cart-sheet__lines">
                {lines.map((line) => (
                  <CartLineItem
                    key={`${line.handle}:${line.size}`}
                    line={line}
                    onNavigate={close}
                  />
                ))}
              </ItemGroup>
            </>
          )}
        </SheetBody>
        {count > 0 && (
          <SheetFooter className="cart-sheet__footer">
            <p className="cart-sheet__note">Today’s egg price, availability, delivery fee and final total are confirmed with the egg depot on WhatsApp or by phone.</p>
            <CheckoutButton className="cart-sheet__checkout" />
            <SheetClose asChild>
              <Button asChild intent="secondary" className="cart-sheet__view">
                <Link href="/cart">View bag</Link>
              </Button>
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
