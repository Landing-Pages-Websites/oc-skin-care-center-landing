import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CtaRow } from "@/components/CtaRow";
import { Icon } from "@/components/icons";
import { WHY_POINTS, WHY_INTRO, WHY_IMAGE } from "@/lib/content";

const POINT_ICONS = ["leaf", "bookOpen", "shield", "tag"];

export function WhyUs(): React.ReactElement {
  return (
    <section id="why-us" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Founder image */}
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3px] shadow-card-lg">
              <Image
                src={WHY_IMAGE.src}
                alt={WHY_IMAGE.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>

          {/* Philosophy */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">Our philosophy</p>
              <h2 className="h2 mt-3 text-[var(--color-text)]">
                Care that supports your skin, not just a quick fix
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-[var(--color-muted)] md:text-[17px]">
                {WHY_INTRO}
              </p>
            </Reveal>

            <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {WHY_POINTS.map((p, i) => (
                <Reveal key={p.id} delay={i * 50}>
                  <div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-[3px] bg-[var(--color-primary)]/12 text-[var(--color-deep)]">
                      <Icon name={POINT_ICONS[i]} className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-4 font-display text-[18px] font-medium text-[var(--color-text)]">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-muted)]">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={80}>
          <CtaRow className="mt-16" />
        </Reveal>
      </div>
    </section>
  );
}
