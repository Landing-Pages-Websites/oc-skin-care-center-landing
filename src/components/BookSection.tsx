import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaRow } from "@/components/CtaRow";
import { FormCard } from "@/components/FormCard";
import { Icon } from "@/components/icons";
import { BOOK, BRAND, PHONE, PHONE_HREF } from "@/lib/content";

export function BookSection(): React.ReactElement {
  return (
    <section id="book" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading eyebrow="Book your visit" title={BOOK.headline} intro={BOOK.sub} align="center" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <FormCard idPrefix="book" />
          </Reveal>

          <Reveal delay={80}>
            <div className="flex h-full flex-col overflow-hidden rounded-[3px] border border-[var(--color-border)] bg-white shadow-card">
              <div className="relative aspect-[16/11] w-full">
                <Image
                  src={BOOK.image.src}
                  alt={BOOK.image.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-5 p-7">
                <h3 className="h3 text-[var(--color-text)]">Visit us in Newport Beach</h3>
                <ContactRow icon="mapPin" label="Address">
                  {BRAND.address}
                </ContactRow>
                <ContactRow icon="phone" label="Phone" fill>
                  <a href={PHONE_HREF} className="text-[var(--color-deep)] underline-offset-2 hover:underline">
                    {PHONE}
                  </a>
                </ContactRow>
                <ContactRow icon="mail" label="Email">
                  <a href={BRAND.emailHref} className="text-[var(--color-deep)] underline-offset-2 hover:underline">
                    {BRAND.email}
                  </a>
                </ContactRow>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <CtaRow className="mt-14" />
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
  fill = false,
}: {
  icon: string;
  label: string;
  children: React.ReactNode;
  fill?: boolean;
}): React.ReactElement {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[3px] bg-[var(--color-primary)]/12 text-[var(--color-deep)]">
        <Icon name={icon} className="h-4 w-4" strokeWidth={fill ? 0 : 1.8} fill={fill ? "currentColor" : "none"} />
      </span>
      <div>
        <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[var(--color-muted)]">{label}</p>
        <p className="mt-0.5 text-[15px] leading-relaxed text-[var(--color-text)]">{children}</p>
      </div>
    </div>
  );
}
