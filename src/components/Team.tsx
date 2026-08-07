import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaRow } from "@/components/CtaRow";
import { TEAM, TEAM_INTRO } from "@/lib/content";

export function Team(): React.ReactElement {
  return (
    <section id="team" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Meet the team" title="The providers behind your care" intro={TEAM_INTRO} />

        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, i) => (
            <Reveal key={member.id} delay={(i % 3) * 60}>
              <article className="group flex h-full flex-col">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3px] shadow-card">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="font-display text-[20px] font-medium text-[var(--color-text)]">
                    {member.name}
                  </h3>
                  <p className="eyebrow mt-1">{member.role}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
                    {member.bio}
                  </p>
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
