import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The image shared links show. Satori reads neither CSS variables nor the stylesheet,
// so its colors are written out here.
const ink = "#183221";
const ivory = "#faf8f4";
const muted = "#5c665d";
const gold = "#d5a72f";

export default async function OpengraphImage() {
  const dir = join(process.cwd(), "src/app/_og");
  const [font, farm] = await Promise.all([
    readFile(join(dir, "cormorant-garamond-500.ttf")),
    readFile(join(process.cwd(), "public/farm/eggs-room.jpeg")),
  ]);
  const photo = (data: Buffer) => `data:image/jpeg;base64,${data.toString("base64")}`;

  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: ivory }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: 600,
          padding: "64px 56px",
          color: ink,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}><div style={{ display: "flex", width: 32, height: 40, borderRadius: "52% 52% 48% 48%", background: gold }} /><div style={{ fontSize: 27, letterSpacing: 5, textTransform: "uppercase" }}>{site.shortName}</div></div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 64, height: 2, background: gold, marginBottom: 28 }} />
          <div style={{ fontSize: 82, lineHeight: .92, letterSpacing: -2 }}>Fresh eggs,</div>
          <div style={{ fontSize: 82, lineHeight: .92, letterSpacing: -2, fontStyle: "italic" }}>gathered daily.</div>
        </div>
        <div style={{ fontSize: 24, color: muted }}>30-egg crates · Sango Ota, Ogun State</div>
      </div>
      {/* biome-ignore lint/performance/noImgElement: Satori draws plain <img>, not next/image */}
      <img src={photo(farm)} width={600} height={630} alt="" style={{ objectFit: "cover" }} />
    </div>,
    { ...size, fonts: [{ name: "Cormorant Garamond", data: font, weight: 500, style: "normal" }] },
  );
}
