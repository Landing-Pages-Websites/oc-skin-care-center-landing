"use client";

import Image from "next/image";
import { CTA, PHONE, PHONE_HREF } from "@/lib/content";
import { Icon } from "@/components/icons";

export function Header(): React.ReactElement {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[var(--color-border)] bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3 md:px-8">
        <a
          href="#hero"
          className="flex shrink-0 items-center rounded-[2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-deepest)]"
          aria-label="OC Skin Care Center — home"
        >
          <Image
            src="/logo.png"
            alt="OC Skincare Center"
            width={800}
            height={90}
            priority
            className="h-5 w-auto max-w-[188px] object-contain md:h-6 md:max-w-none"
          />
        </a>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-[2px] border border-[var(--color-deep)] px-3 py-2 text-[13px] font-medium text-[var(--color-deep)] transition-colors hover:bg-[rgba(9,116,113,0.07)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-deepest)] md:px-4 md:text-sm"
            aria-label={`Call OC Skin Care Center at ${PHONE}`}
          >
            <Icon name="phone" className="h-4 w-4" strokeWidth={0} fill="currentColor" />
            <span>{PHONE}</span>
          </a>
          <a
            href={CTA.bookAnchor}
            className="hidden items-center gap-2 rounded-[2px] bg-[var(--color-primary)] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-[var(--color-on-primary)] transition-colors hover:bg-[var(--color-primary-hover)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-deepest)] md:inline-flex"
          >
            Book now
          </a>
        </div>
      </div>
    </header>
  );
}
