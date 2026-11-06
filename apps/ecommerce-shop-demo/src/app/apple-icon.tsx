import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// The home-screen icon: Daily Farm's golden egg on deep farm green.
export default async function AppleIcon() {
  const font = await readFile(join(process.cwd(), "src/app/_og/cormorant-garamond-500.ttf"));

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background: "#183221",
        borderRadius: 36,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 108, height: 132, borderRadius: "52% 52% 48% 48%", background: "#d5a72f", color: "#183221", fontSize: 76, lineHeight: 1, paddingBottom: 8 }}>D</div>
    </div>,
    { ...size, fonts: [{ name: "Cormorant Garamond", data: font, weight: 500, style: "normal" }] },
  );
}
