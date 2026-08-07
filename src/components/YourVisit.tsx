import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CtaRow } from "@/components/CtaRow";
import { VISIT_STEPS, VISIT_INTRO } from "@/lib/content";

export function YourVisit(): React.ReactElement {
  return (
    <section id="your-visit" className="bg-[var(--color-deep)] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-[var(--color-primary)]">Your visit</p>
          <h2 className="h2 mt-3 text-white">How booking works — confirmed by a real person</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-white/85 md:text-[17px]">
            {VISIT_INTRO}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Steps */}
          <ol className="lg:col-span-7">
            {VISIT_STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 50}>
                <li className={`flex gap-6 py-6 ${i === 0 ? "" : "border-t border-white/15"}`}>
                  <span className="font-display text-[34px] font-light leading-none text-white/45">
                    {s.n}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-display text-[19px] font-medium text-white">{s.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-white/80">{s.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          {/* Space imagery */}
          <Reveal delay={80} className="lg:col-span-5">
            <div className="flex flex-col gap-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[3px]">
                <Image
                  src="/images/treatment-room.jpg"
                  alt="A facial in progress in a calm OC Skin Care Center treatment room"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[3px]">
                <Image
                  src="/images/studio-interior.jpg"
                  alt="The reception and interior of the OC Skin Care Center studio"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <CtaRow onDark className="mt-16" />
        </Reveal>
      </div>
    </section>
  );
}
