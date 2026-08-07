import Image from "next/image";
import { BRAND, CURRENT_YEAR, PHONE, PHONE_HREF } from "@/lib/content";
import { Icon } from "@/components/icons";

export function SiteFooter(): React.ReactElement {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex flex-col gap-3">
          <Image
            src="/logo.png"
            alt="OC Skincare Center"
            width={800}
            height={90}
            className="h-5 w-auto max-w-[188px] object-contain"
          />
          <p className="text-[13px] leading-relaxed text-[var(--color-muted)]">
            {BRAND.address}
          </p>
        </div>

        <div className="flex flex-col gap-2 text-[13px] text-[var(--color-muted)] md:items-end">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 font-medium text-[var(--color-deep)] underline-offset-2 hover:underline"
            aria-label={`Call OC Skin Care Center at ${PHONE}`}
          >
            <Icon name="phone" className="h-4 w-4" strokeWidth={0} fill="currentColor" />
            {PHONE}
          </a>
          <p>
            © {CURRENT_YEAR} {BRAND.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
