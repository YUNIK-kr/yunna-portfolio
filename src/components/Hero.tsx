import { CONTENT } from "@/content";
import { Avatar } from "@/components/Avatar";
import { HeadlineReveal } from "@/components/HeadlineReveal";
import { MicroLabel } from "@/components/MicroLabel";

const labelWidth = "clamp(120px, 15vw, 220px)";
const lineSizeSmall = "clamp(26px, min(7.2vw, 9svh), 132px)";
const lineSizeLarge = "clamp(34px, min(9.5vw, 11.5svh), 168px)";

export function Hero() {
  return (
    <section className="relative flex flex-col justify-start overflow-x-clip px-6 pt-24 sm:px-8 md:min-h-svh md:pt-16">
      <HeadlineReveal>
        <div className="flex w-full max-w-[1700px] flex-col md:ml-auto md:w-[92%]">
          <h1 className="flex flex-col text-ink">
            {/* Line 1 */}
            <span className="flex justify-start md:justify-end">
              <span
                className="reveal-line display-line text-left md:text-right"
                style={{ transitionDelay: "0ms", fontSize: lineSizeSmall }}
              >
                {CONTENT.hero.line1}{" "}
                <Avatar />{" "}
                {CONTENT.hero.avatarConnector}
              </span>
            </span>

            {/* Line 2 */}
            <span className="flex justify-start md:justify-end">
              <span
                className="reveal-line display-line text-left md:text-right"
                style={{ transitionDelay: "60ms", fontSize: lineSizeSmall }}
              >
                {CONTENT.hero.line2}
              </span>
            </span>

            {/* Line 3 — micro-label hangs off the right */}
            <span className="relative flex justify-start md:justify-end md:pr-[clamp(0px,17vw,280px)]">
              <span
                className="reveal-line display-line text-left md:text-right"
                style={{ transitionDelay: "120ms", fontSize: lineSizeLarge }}
              >
                {CONTENT.hero.disciplineOne}
              </span>
              <MicroLabel
                label={CONTENT.microLabels.services}
                className="absolute right-0 top-0 hidden md:block"
                style={{ width: labelWidth }}
              />
            </span>

            {/* Line 4 — micro-label hangs off the left */}
            <span className="relative flex justify-start md:justify-end md:pl-[clamp(0px,19vw,300px)]">
              <span
                className="reveal-line display-line text-left md:text-right"
                style={{ transitionDelay: "180ms", fontSize: lineSizeLarge }}
              >
                {CONTENT.hero.disciplineTwo}
              </span>
              <MicroLabel
                label={CONTENT.microLabels.disciplines}
                className="absolute left-0 top-0 hidden md:block"
                style={{ width: labelWidth }}
              />
            </span>

            {/* Line 5 — micro-label hangs off the right */}
            <span className="relative flex justify-start md:justify-end md:pr-[clamp(0px,17vw,280px)]">
              <span
                className="reveal-line display-line text-left md:text-right"
                style={{ transitionDelay: "240ms", fontSize: lineSizeLarge }}
              >
                {CONTENT.hero.role}
              </span>
              <MicroLabel
                label={CONTENT.microLabels.aside}
                className="absolute right-0 top-0 hidden md:block"
                style={{ width: labelWidth }}
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
