import { CONTENT } from "@/content";
import { Avatar } from "@/components/Avatar";
import { HeadlineReveal } from "@/components/HeadlineReveal";
import { MicroLabel } from "@/components/MicroLabel";

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-start px-6 pt-24 sm:px-8 md:pt-16">
      <HeadlineReveal>
        <div className="relative ml-auto flex w-full max-w-[1600px] flex-col items-end text-right text-ink md:w-[92%]">
          {/* Line 1 */}
          <h1 className="w-full">
            <span
              className="reveal-line display-line block text-[clamp(32px,7.2vw,132px)]"
              style={{ width: "100%" }}
            >
              {CONTENT.hero.line1}{" "}
              <Avatar />{" "}
              {CONTENT.hero.avatarConnector}
            </span>

            {/* Line 2 */}
            <span
              className="reveal-line display-line block text-[clamp(32px,7.2vw,132px)]"
              style={{ width: "92%", marginLeft: "auto" }}
            >
              {CONTENT.hero.line2}
            </span>

            {/* Line 3 */}
            <span className="relative block" style={{ width: "80%", marginLeft: "auto" }}>
              <span className="reveal-line display-line block text-[clamp(40px,9.5vw,170px)]">
                {CONTENT.hero.disciplineOne}
              </span>
              <MicroLabel
                label={CONTENT.microLabels.services}
                className="absolute right-full top-0 mr-4 hidden w-40 md:block"
              />
            </span>

            {/* Line 4 */}
            <span className="relative block" style={{ width: "64%", marginLeft: "auto" }}>
              <span className="reveal-line display-line block text-[clamp(40px,9.5vw,170px)]">
                {CONTENT.hero.disciplineTwo}
              </span>
              <MicroLabel
                label={CONTENT.microLabels.disciplines}
                className="absolute right-full top-0 mr-4 hidden w-40 md:block"
              />
            </span>

            {/* Line 5 */}
            <span className="relative block" style={{ width: "48%", marginLeft: "auto" }}>
              <span className="reveal-line display-line block text-[clamp(40px,9.5vw,170px)]">
                {CONTENT.hero.role}
              </span>
              <MicroLabel
                label={CONTENT.microLabels.aside}
                className="absolute left-full top-0 ml-4 hidden w-40 text-left md:block md:text-right"
              />
            </span>
          </h1>

          {/* Mobile: micro-labels collapse to one inline line */}
          <p className="micro-fade micro-label mt-6 w-full text-left md:hidden">
            {CONTENT.microLabels.services.line1}, {CONTENT.microLabels.services.line2},{" "}
            {CONTENT.microLabels.disciplines.line1}, {CONTENT.microLabels.disciplines.line2},{" "}
            {CONTENT.microLabels.aside.line1} {CONTENT.microLabels.aside.line2}
          </p>
        </div>
      </HeadlineReveal>
    </section>
  );
}
