import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/icons";
import { TRUST_ITEMS, PHONE, PHONE_HREF } from "@/lib/content";

export function TrustBar(): React.ReactElement {
  return (
    <section id="trust-bar" className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-9">
        <Reveal>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-6 lg:grid-cols-4">
            {TRUST_ITEMS.map((item, i) => (
              <li
                key={item.label}
                className={`flex flex-col gap-1 lg:pl-6 ${
                  i === 0 ? "" : "lg:border-l lg:border-[var(--color-border)]"
                }`}
              >
                <span className="flex items-baseline gap-1.5">
                  {i === 0 && (
                    <Icon name="star" className="h-4 w-4 self-center text-[var(--color-primary)]" strokeWidth={0} fill="currentColor" />
                  )}
                  <span className="font-display text-[26px] font-light leading-none tracking-tight text-[var(--color-text)] md:text-[30px]">
                    {item.stat}
                  </span>
                </span>
                <span className="text-[13px] leading-snug text-[var(--color-muted)]">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-7 border-t border-[var(--color-border)] pt-5 text-center text-[13px] text-[var(--color-muted)]">
            Questions before you book?{" "}
            <a
              href={PHONE_HREF}
              className="font-medium text-[var(--color-deep)] underline-offset-2 hover:underline"
            >
              Call {PHONE}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
