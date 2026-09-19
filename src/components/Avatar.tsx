import Image from "next/image";
import { CONTENT } from "@/content";

export function Avatar() {
  return (
    <span
      className="avatar-swap"
      style={{
        width: "0.78em",
        height: "0.78em",
        transform: "translateY(0.06em)",
      }}
    >
      <Image
        src={CONTENT.avatar.src}
        alt={CONTENT.avatar.alt}
        fill
        sizes="132px"
        className="avatar-base-img"
      />
      <Image
        src={CONTENT.avatar.hoverSrc}
        alt=""
        fill
        sizes="132px"
        aria-hidden
        className="avatar-hover-img"
      />
    </span>
  );
}
