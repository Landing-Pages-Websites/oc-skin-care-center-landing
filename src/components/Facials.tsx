import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaRow } from "@/components/CtaRow";
import { Icon } from "@/components/icons";
import { FACIALS, FACIALS_INTRO } from "@/lib/content";

export function Facials(): React.ReactElement {
  return (
    <section id="facials" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Facial Treatments" title="Facials built around your skin" intro={FACIALS_INTRO} />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {FACIALS.map((f, i) => (
            <Reveal key={f.id} delay={i * 60}>
              <article className="flex h-full flex-col overflow-hidden rounded-[3px] border border-[var(--color-border)] bg-white shadow-card">
                {f.image ? (
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={f.image}
                      alt={f.alt ?? ""}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-3 border-b border-[var(--color-border)] bg-[var(--color-surface)] px-7 pt-7 pb-5">
                    <Icon name="sparkles" className="h-6 w-6 text-[var(--color-deep)]" strokeWidth={1.6} />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="h3 text-[var(--color-text)]">{f.name}</h3>
                    <span className="shrink-0 whitespace-nowrap pt-1 font-display text-[15px] font-medium text-[var(--color-deep)]">
                      {f.price}
                    </span>
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
                    {f.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <CtaRow className="mt-14" />
        </Reveal>
      </div>
    </section>
  );
}
