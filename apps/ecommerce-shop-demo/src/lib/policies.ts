import { site } from "./site";
export interface Policy { slug:string; title:string; description:string; updated:string; sections:readonly {heading:string; paragraphs:readonly string[]}[]; faq?:readonly {question:string;answer:string}[] }
export const policies = [
  { slug:"shipping-returns", title:"Pickup, delivery and order issues", description:"How pickup, delivery, payment confirmation and damaged egg reports work.", updated:"2026-11-06", sections:[
    { heading:"Pickup", paragraphs:[`Pickup is available from ${site.address}, ${site.hours}. Send your bag on WhatsApp first so we can confirm availability and prepare the order.`, "Bring or show the WhatsApp conversation when collecting your crates."] },
    { heading:"Delivery", paragraphs:["Delivery coverage, timing and fees are agreed by phone or WhatsApp. The website subtotal does not include delivery.", "We share or confirm a Paystack payment link after agreeing the final total. We verify payment before dispatch or pickup."] },
    { heading:"Eggs and order issues", paragraphs:["Eggs are perishable food products, so confirmed orders cannot be returned because a customer changes their mind. Please inspect crates when they are collected or delivered.", `If eggs are missing or visibly damaged at handover, photograph the crate and contact ${site.phone} or ${site.secondaryPhone} immediately. The farm will review the order and agree the appropriate resolution directly with you.`] },
  ], faq:[{question:"Is there a minimum order?",answer:"Yes. The minimum is one complete crate of 30 eggs."},{question:"Is there a maximum?",answer:"No website maximum is set. Large and wholesale orders are confirmed manually."},{question:"Can I return eggs?",answer:"Eggs cannot be returned for a change of mind. Visible damage or missing eggs should be reported immediately at pickup or delivery."},{question:"Can I pay on the website?",answer:"For this first version, payment is completed through the Paystack link shared after order confirmation."}] },
  { slug:"privacy", title:"Privacy", description:`How ${site.name} handles information used for enquiries and orders.`, updated:"2026-11-06", sections:[
    { heading:"Your browser", paragraphs:["Your shopping bag is stored locally in your browser. It is not sent to the farm until you choose to open WhatsApp and send the prepared message."] },
    { heading:"Order conversations", paragraphs:[`WhatsApp and Paystack process information under their own policies. ${site.name} uses the details you send only to answer enquiries, confirm payment and fulfil orders.`] },
  ] },
  { slug:"terms", title:"Terms of service", description:`The initial ordering terms for ${site.name}.`, updated:"2026-11-06", sections:[
    { heading:"Pricing and availability", paragraphs:["All displayed prices are temporary until the owner supplies final prices. Availability, wholesale pricing, delivery and the final payable amount are confirmed before payment.", "Adding products to the browser bag does not reserve stock or create a confirmed order."] },
    { heading:"Payment", paragraphs:["The website does not directly process or verify payments. The farm confirms the appropriate Paystack payment link and verifies the transaction before fulfilment."] },
    { heading:"Perishable products", paragraphs:["Eggs are perishable and cannot be returned because of a change of mind. Customers should inspect crates at handover and report visible damage or missing eggs immediately so the farm can review the order."] },
  ] },
] as const satisfies readonly Policy[];
