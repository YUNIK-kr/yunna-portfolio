import Image from "next/image";
import { CONTENT } from "@/content";

export function Portrait() {
  return (
    <div className="relative left-1/2 h-[48svh] w-screen -translate-x-1/2 bg-photo-bg sm:aspect-auto md:absolute md:left-0 md:top-[52svh] md:h-[70svh] md:w-[42vw] md:translate-x-0">
      <Image
        src={CONTENT.portrait.src}
        alt={CONTENT.portrait.alt}
        fill
        sizes="(min-width: 900px) 42vw, 100vw"
        className="object-cover"
        priority
      />
    </div>
  );
}
