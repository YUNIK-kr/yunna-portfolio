import { CONTENT } from "@/content";

export function Wordmark() {
  return (
    <div className="relative flex justify-end px-6 pb-28 pt-16 sm:px-8 md:pb-32">
      <p className="display-line text-right text-[clamp(64px,11vw,190px)] text-ink">
        {CONTENT.wordmark}
      </p>
    </div>
  );
}
