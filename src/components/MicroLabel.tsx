import type { MicroLabel as MicroLabelType } from "@/content";

export function MicroLabel({
  label,
  className,
}: {
  label: MicroLabelType;
  className?: string;
}) {
  return (
    <p className={`micro-label micro-fade text-right text-ink ${className ?? ""}`}>
      {label.line1}
      <br />
      {label.line2}
    </p>
  );
}
