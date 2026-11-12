import Link from "next/link";
import "./egg-sizes.scss";

// Drawn size comparison until owner-supplied photos of each egg size are available.
const sizes = [
  { label: "Small", href: "/collections/small-eggs", scale: 0.74 },
  { label: "Medium", href: "/collections/medium-eggs", scale: 0.87 },
  { label: "Big", href: "/collections/big-eggs", scale: 1 },
] as const;

export function EggSizes({ linked = true, compact = false }: { linked?: boolean; compact?: boolean }) {
  return (
    <ul className={`egg-sizes${compact ? " egg-sizes--compact" : ""}`} aria-label="Egg sizes: Small, Medium and Big">
      {sizes.map((size) => {
        const content = (
          <>
            <span className="egg-sizes__stage">
              <span className="egg-sizes__egg" style={{ "--egg-scale": size.scale } as React.CSSProperties} aria-hidden="true" />
            </span>
            <span className="egg-sizes__label">{size.label}</span>
            {!compact && <span className="egg-sizes__meta">30-egg crate</span>}
          </>
        );
        return (
          <li key={size.label} className="egg-sizes__item">
            {linked ? <Link className="egg-sizes__link" href={size.href} aria-label={`${size.label} eggs`}>{content}</Link> : <span className="egg-sizes__link">{content}</span>}
          </li>
        );
      })}
    </ul>
  );
}
