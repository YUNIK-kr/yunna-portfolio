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
    title: "Yunna — Designer",
    description: "Portfolio of Yunna, brand and product designer.",
  },
  hero: {
    line1: "HI, WELCOME",
    avatarConnector: "HOME",
    line2: "IT'S ME — YUNNA®",
    disciplineOne: "BRAND,",
    disciplineTwo: "PRODUCT,",
    role: "DESIGNER",
  },
  avatar: {
    src: "/avatar.jpg",
    hoverSrc: "/avatar-hover.jpg",
    alt: "Black and white photobooth portrait of Yunna",
  },
  microLabels: {
    services: {
      line1: "IDENTITY, ART DIRECTION",
      line2: "UI, WEBSITES",
    } satisfies MicroLabel,
    disciplines: {
      line1: "PACKAGING, PRINT",
      line2: "ICONS, ASSETS",
    } satisfies MicroLabel,
    aside: {
      line1: "IN THE END, I'M",
      line2: "JUST A DESIGNER",
    } satisfies MicroLabel,
  },
  portrait: {
    src: "/placeholder.jpg",
    alt: "Black and white photobooth portrait of Yunna, cropped tall",
  },
  wordmark: "YUNNA®—'26",
  footer: {
    name: "Yunna",
    age: "24",
    copyright: "@Copyright 2026",
    linksColumnOne: [
      { label: "Instagram", href: "https://instagram.com/" },
      { label: "Dribbble", href: "https://dribbble.com/" },
    ] satisfies FooterLink[],
    linksColumnTwo: [
      { label: "Twitter", href: "https://twitter.com/" },
      { label: "VSCO", href: "https://vsco.co/" },
    ] satisfies FooterLink[],
    talk: {
      label: "Let's talk",
      href: "mailto:hello@yunna.design",
    } satisfies FooterLink,
  },
} as const;
