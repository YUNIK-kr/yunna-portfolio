import { CONTENT } from "@/content";
import { Year } from "@/components/Year";

export function Footer() {
  const { footer } = CONTENT;
  const initialYear = new Date().getFullYear();

  return (
    <footer className="fixed inset-x-0 bottom-0 z-10 px-6 pb-6 sm:px-8">
      <div className="grid grid-cols-2 gap-y-4 md:flex md:items-end md:justify-between">
        <div className="micro-label text-white">
          <p>
            {footer.name} — {footer.age}
          </p>
          <p>
            {footer.copyrightPrefix}
            <Year initialYear={initialYear} />
          </p>
        </div>

        <nav aria-label="Social links, column one" className="micro-label text-ink">
          {footer.linksColumnOne.map((link) => (
            <a key={link.label} href={link.href} className="link-wipe block">
              {link.label}
            </a>
          ))}
        </nav>

        <nav aria-label="Social links, column two" className="micro-label text-ink">
          {footer.linksColumnTwo.map((link) => (
            <a key={link.label} href={link.href} className="link-wipe block">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex justify-end">
          <a
            href={footer.talk.href}
            className="talk-link micro-label inline-flex items-center gap-1 text-ink"
          >
            <span className="talk-arrow talk-arrow--left">→</span>
            <span className="link-wipe">{footer.talk.label}</span>
            <span className="talk-arrow talk-arrow--right">←</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
