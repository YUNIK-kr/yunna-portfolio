export type FooterLink = {
  label: string;
  href: string;
};

export type MicroLabel = {
  line1: string;
  line2: string;
};

export const CONTENT = {
  meta: {
    title: "Yunna — Founder",
    description: "Portfolio of Yunna, founder.",
  },
  hero: {
    line1: "HI, WELCOME",
    avatarConnector: "HOME",
    line2: "IT'S ME — YUNNA®",
    role: "FOUNDER",
  },
  avatar: {
    src: "/avatar.jpg",
    hoverSrc: "/avatar-hover.jpg",
    alt: "Black and white photobooth portrait of Yunna",
  },
  microLabels: {
    aside: {
      line1: "IN THE END, I'M",
      line2: "JUST A FOUNDER",
    } satisfies MicroLabel,
  },
  portrait: {
    src: "/placeholder.jpg",
    alt: "Black and white photobooth portrait of Yunna, cropped tall",
  },
  wordmarkPrefix: "YUNNA®—'",
  footer: {
    name: "Yunna",
    age: "24",
    copyrightPrefix: "@Copyright ",
    linksColumnOne: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/yunnajo/" },
    ] satisfies FooterLink[],
    linksColumnTwo: [
      { label: "Email", href: "mailto:yunna.song.jo@gmail.com" },
    ] satisfies FooterLink[],
    talk: {
      label: "Let's talk",
      href: "mailto:yunna.song.jo@gmail.com",
    } satisfies FooterLink,
  },
} as const;
