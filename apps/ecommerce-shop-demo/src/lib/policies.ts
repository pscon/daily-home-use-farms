import { site } from "./site";
export interface Policy { slug:string; title:string; description:string; updated:string; sections:readonly {heading:string; paragraphs:readonly string[]}[]; faq?:readonly {question:string;answer:string}[] }
export const policies = [
  { slug:"shipping-returns", title:"Pickup and delivery", description:"How pickup, delivery and payment confirmation work.", updated:"2026-11-05", sections:[
    { heading:"Pickup", paragraphs:[`Pickup is available from ${site.address}, ${site.hours}. Send your bag on WhatsApp first so we can confirm availability and prepare the order.`, "Bring or show the WhatsApp conversation when collecting your crates."] },
    { heading:"Delivery", paragraphs:["Delivery coverage, timing and fees are agreed by phone or WhatsApp. The website subtotal does not include delivery.", "We share or confirm a Paystack payment link after agreeing the final total. We verify payment before dispatch or pickup."] },
    { heading:"Order issues", paragraphs:[`For an exceptional missing or damaged order, call ${site.phone} as soon as possible so the farm can review it directly.`] },
  ], faq:[{question:"Is there a minimum order?",answer:"Yes. The minimum is one complete crate of 30 eggs."},{question:"Is there a maximum?",answer:"No website maximum is set. Large and wholesale orders are confirmed manually."},{question:"Can I pay on the website?",answer:"For this first version, payment is completed through the Paystack link shared after order confirmation."}] },
  { slug:"privacy", title:"Privacy", description:`How ${site.name} handles information used for enquiries and orders.`, updated:"2026-11-05", sections:[
    { heading:"Your browser", paragraphs:["Your shopping bag is stored locally in your browser. It is not sent to the farm until you choose to open WhatsApp and send the prepared message."] },
    { heading:"Order conversations", paragraphs:[`WhatsApp and Paystack process information under their own policies. ${site.name} uses the details you send only to answer enquiries, confirm payment and fulfil orders.`] },
  ] },
  { slug:"terms", title:"Terms of service", description:`The initial ordering terms for ${site.name}.`, updated:"2026-11-05", sections:[
    { heading:"Pricing and availability", paragraphs:["All displayed prices are temporary until the owner supplies final prices. Availability, wholesale pricing, delivery and the final payable amount are confirmed before payment.", "Adding products to the browser bag does not reserve stock or create a confirmed order."] },
    { heading:"Payment", paragraphs:["The website does not directly process or verify payments. The farm confirms the appropriate Paystack payment link and verifies the transaction before fulfilment."] },
  ] },
] as const satisfies readonly Policy[];
