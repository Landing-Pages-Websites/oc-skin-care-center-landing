import { CTA, PHONE, PHONE_HREF } from "@/lib/content";
import { Icon } from "@/components/icons";

interface CtaRowProps {
  onDark?: boolean;
  className?: string;
}

// Primary book action + phone, side by side and centered — the CTA row that
// closes every content section.
export function CtaRow({ onDark = false, className = "" }: CtaRowProps): React.ReactElement {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 sm:flex-row ${className}`}
    >
      <a href={CTA.bookAnchor} className="btn btn-primary w-full sm:w-auto">
        {CTA.primary}
        <Icon name="arrow" className="h-4 w-4" strokeWidth={2.2} />
      </a>
      <a
        href={PHONE_HREF}
        className={`btn w-full sm:w-auto ${onDark ? "btn-secondary-light" : "btn-secondary"}`}
        aria-label={`Call OC Skin Care Center at ${PHONE}`}
      >
        <Icon name="phone" className="h-4 w-4" strokeWidth={0} fill="currentColor" />
        {PHONE}
      </a>
    </div>
  );
}
