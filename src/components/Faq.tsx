import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaRow } from "@/components/CtaRow";
import { Icon } from "@/components/icons";
import { FAQ } from "@/lib/content";

export function Faq(): React.ReactElement {
  return (
    <section id="faq" className="bg-[var(--color-surface)] py-20 md:py-28">
      <div className="faq mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Good to know"
          title="Questions clients ask us"
          intro="Straight answers, from our own treatments and pricing."
          align="center"
        />

        <div className="mt-12 space-y-3">
          {FAQ.map((item, i) => (
            <Reveal key={item.q} delay={i * 30}>
              <details className="group rounded-[3px] border border-[var(--color-border)] bg-white [&[open]]:shadow-card" name="faq">
                <summary className="flex items-center justify-between gap-4 p-5 md:p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--color-deepest)]">
                  <span className="font-display text-[17px] font-medium leading-snug text-[var(--color-text)] md:text-[18px]">
                    {item.q}
                  </span>
                  <Icon
                    name="plus"
                    className="faq-toggle mt-0.5 h-5 w-5 shrink-0 text-[var(--color-deep)]"
                    strokeWidth={2}
                  />
                </summary>
                <p className="px-5 pb-6 text-[15px] leading-relaxed text-[var(--color-muted)] md:px-6">
                  {item.a}
                </p>
              </details>
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
