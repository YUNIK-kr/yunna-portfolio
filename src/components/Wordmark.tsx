import { CONTENT } from "@/content";
import { Year } from "@/components/Year";

export function Wordmark() {
  const initialYear = new Date().getFullYear();

  return (
    <div className="relative flex justify-end px-6 pb-28 pt-16 sm:px-8 md:pb-32 md:pl-[44vw]">
      <p
        className="display-line text-right text-ink"
        style={{ fontSize: "clamp(48px, min(8vw, 15svh), 150px)" }}
      >
        {CONTENT.wordmarkPrefix}
        <Year initialYear={initialYear} format="short" />
      </p>
    </div>
  );
}
