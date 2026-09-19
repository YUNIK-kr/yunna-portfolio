import Image from "next/image";
import { CONTENT } from "@/content";

export function Portrait() {
  return (
    <div className="relative left-1/2 h-[42svh] w-[88vw] -translate-x-1/2 bg-photo-bg sm:aspect-auto md:absolute md:left-0 md:top-[52svh] md:h-[62svh] md:w-[36vw] md:translate-x-0">
      <Image
        src={CONTENT.portrait.src}
        alt={CONTENT.portrait.alt}
        fill
        sizes="(min-width: 900px) 36vw, 88vw"
        className="object-cover"
        priority
      />
    </div>
  );
}
