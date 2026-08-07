import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CtaRow } from "@/components/CtaRow";
import { Icon } from "@/components/icons";
import { INJECTABLES, INJECTABLES_INTRO, INJECTABLES_IMAGE } from "@/lib/content";

export function Injectables(): React.ReactElement {
  return (
    <section id="injectables" className="bg-[var(--color-surface)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Intro + on-brand image */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Injectables</p>
            <h2 className="h2 mt-3 text-[var(--color-text)]">
              Refreshed, never frozen — planned with a complimentary consultation
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-[var(--color-muted)] md:text-[17px]">
              {INJECTABLES_INTRO}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-[14px] font-medium text-[var(--color-deep)]">
              <Icon name="clock" className="h-4 w-4" strokeWidth={1.8} />
              Most Botox and Dysport visits take just 10–15 minutes with no downtime
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[3px] shadow-card-lg">
              <Image
                src={INJECTABLES_IMAGE.src}
                alt={INJECTABLES_IMAGE.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Treatments — alternating editorial rows */}
        <div className="mt-16 space-y-14 md:mt-20 md:space-y-20">
          {INJECTABLES.map((t, i) => (
            <Reveal key={t.id}>
              <article className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                <div className={`relative aspect-[5/4] w-full overflow-hidden rounded-[3px] shadow-card ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <Image
                    src={t.image}
                    alt={t.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="h3 text-[var(--color-text)]">{t.name}</h3>
                    <span className="shrink-0 whitespace-nowrap font-display text-[15px] font-medium text-[var(--color-deep)]">
                      {t.price}
                    </span>
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
                    {t.body}
                  </p>
                  {t.detail && (
                    <p className="mt-3 border-l-2 border-[var(--color-primary)] pl-4 text-[14px] leading-relaxed text-[var(--color-muted)]">
                      {t.detail}
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <CtaRow className="mt-16" />
        </Reveal>
      </div>
    </section>
  );
}
