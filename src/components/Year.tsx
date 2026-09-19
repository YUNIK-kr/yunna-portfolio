"use client";

export function Year({
  initialYear,
  format = "full",
}: {
  initialYear: number;
  format?: "full" | "short";
}) {
  const year =
    typeof window !== "undefined" ? new Date().getFullYear() : initialYear;

  return (
    <span suppressHydrationWarning>
      {format === "short" ? String(year).slice(-2) : year}
    </span>
  );
}
