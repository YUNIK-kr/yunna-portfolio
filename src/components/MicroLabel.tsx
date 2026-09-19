import type { CSSProperties } from "react";
import type { MicroLabel as MicroLabelType } from "@/content";

export function MicroLabel({
  label,
  className,
  style,
}: {
  label: MicroLabelType;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <p
      className={`micro-label micro-fade text-right text-ink ${className ?? ""}`}
      style={style}
    >
      {label.line1}
      <br />
      {label.line2}
    </p>
  );
}
