"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { FormCard } from "@/components/FormCard";
import { Icon } from "@/components/icons";
import { HERO, PHONE, PHONE_HREF } from "@/lib/content";

export function Hero(): React.ReactElement {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-white pt-24 pb-14 md:pt-32 md:pb-24"
    >
      {/* Full-bleed luminous backdrop + readable light scrim */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-glow.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/82 to-white/58 md:bg-gradient-to-r md:from-white md:via-white/90 md:to-white/35" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-x-10 gap-y-7 px-5 md:px-8 lg:grid-cols-12">
        {/* Intro */}
        <Reveal className="lg:col-span-6 lg:row-start-1 lg:self-end">
          <p className="accent text-[17px] text-[var(--color-deep)]">{HERO.eyebrow}</p>
          <h1 className="h1 mt-3 max-w-[15ch] text-[var(--color-text)]">{HERO.h1}</h1>
          <p className="accent mt-4 max-w-xl text-[18px] leading-relaxed text-[var(--color-muted)] md:text-[20px]">
            {HERO.sub}
          </p>
        </Reveal>

        {/* Form — directly under the intro on mobile, right column on desktop */}
        <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2">
          <Reveal delay={100}>
            <FormCard idPrefix="hero" />
          </Reveal>
        </div>

        {/* Supporting line + phone CTA */}
        <Reveal delay={80} className="lg:col-span-6 lg:col-start-1 lg:row-start-2 lg:self-start">
          <p className="max-w-xl text-[15px] leading-relaxed text-[var(--color-muted)]">
            {HERO.supporting}
          </p>
          <a
            href={PHONE_HREF}
            className="btn btn-secondary mt-6 w-full sm:w-auto"
            aria-label={`Call OC Skin Care Center at ${PHONE}`}
          >
            <Icon name="phone" className="h-4 w-4" strokeWidth={0} fill="currentColor" />
            {PHONE}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
