import * as v from "valibot";

// Display currencies. The catalog is priced in US dollars, and orders are charged in them;
// the others are shown for reference, converted at fixed demo rates. Swap the rates for a
// feed, or for prices per market from your commerce platform.

export const CURRENCIES = [{ code: "NGN", label: "Nigerian naira", rate: 1 }] as const;

export type CurrencyCode = (typeof CURRENCIES)[number]["code"];

export const BASE_CURRENCY: CurrencyCode = "NGN";

export const CURRENCY_COOKIE = "currency";

export const CurrencyCodeSchema = v.picklist(CURRENCIES.map((currency) => currency.code));

export function parseCurrency(value: unknown): CurrencyCode {
  const parsed = v.safeParse(CurrencyCodeSchema, value);
  return parsed.success ? parsed.output : BASE_CURRENCY;
}

/** Yen has no minor unit; everything else is shown to the cent. */
export function fractionDigits(_code: CurrencyCode): number { return 0; }

/** A price in US dollars, in the given currency, rounded the way that currency is written. */
export function convert(usd: number, code: CurrencyCode): number {
  const rate = CURRENCIES.find((currency) => currency.code === code)?.rate ?? 1;
  const factor = 10 ** fractionDigits(code);
  return Math.round(usd * rate * factor) / factor;
}
