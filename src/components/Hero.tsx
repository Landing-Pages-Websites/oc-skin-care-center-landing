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
      className="relative isolate overflow-hidden bg-white pb-14 md:pt-32 md:pb-24"
    >
      {/* Desktop-only full-bleed backdrop. The photo reads at full saturation on
          the right/center; a left-side readability gradient carries the near-black
          type and fades to fully transparent before the subject (right ~40% untouched). */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/images/hero-glow.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Left-side readability gradient. md (single-column): a moderate wash across
            the full width. lg (two-column): strong on the left, fully transparent by
            ~58% so the right ~40% shows the photo untouched. */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/45 lg:via-white/72 lg:via-34% lg:to-transparent lg:to-[58%]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-x-10 gap-y-7 px-5 md:px-8 lg:grid-cols-12">
        {/* Intro — mobile: a full-bleed photo panel with white type over a
            bottom-weighted dark scrim. Desktop: near-black type over the section backdrop. */}
        <Reveal className="relative -mx-5 md:mx-0 lg:col-span-6 lg:row-start-1 lg:self-end">
          <div className="absolute inset-0 z-0 md:hidden">
            <Image
              src="/images/hero-glow.jpg"
              alt=""
              fill
              loading="eager"
              sizes="100vw"
              className="object-cover object-[54%_26%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-black/62 via-30% to-black/85 to-92%" />
          </div>
          <div className="relative z-10 px-5 pt-24 pb-8 [text-shadow:0_1px_14px_rgba(0,0,0,0.55)] md:p-0 md:[text-shadow:none]">
            <p className="accent text-[17px] text-white md:text-[var(--color-deep)]">
              {HERO.eyebrow}
            </p>
            <h1 className="h1 mt-3 max-w-[15ch] text-white md:text-[var(--color-text)]">
              {HERO.h1}
            </h1>
            <p className="accent mt-4 max-w-xl text-[18px] leading-relaxed text-white/95 md:text-[20px] md:text-[var(--color-muted)] lg:max-w-md">
              {HERO.sub}
            </p>
          </div>
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
