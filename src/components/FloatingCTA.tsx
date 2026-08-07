"use client";

import { useEffect, useState } from "react";
import { CTA } from "@/lib/content";
import { Icon } from "@/components/icons";

// Mobile sticky action bar — a single form-only CTA that scrolls to #book.
// Contains ZERO tel links by design; phone lives in the header, hero and footer.
export function FloatingCTA(): React.ReactElement {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = (): void => setShow(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-[var(--color-border)] bg-white/95 px-3 py-2.5 backdrop-blur-md transition-all duration-300 sm:hidden [box-shadow:0_-6px_24px_-12px_rgba(3,70,68,0.35)] ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
      style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}
    >
      <a href={CTA.bookAnchor} className="btn btn-primary w-full">
        {CTA.primary}
        <Icon name="arrow" className="h-4 w-4" strokeWidth={2.2} />
      </a>
    </div>
  );
}
