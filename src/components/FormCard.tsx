"use client";

import { useRef, useState } from "react";
import { useMegaLeadForm } from "@/hooks/useMegaLeadForm";
import { LOOKING_FOR_OPTIONS, FORM_COPY, PHONE, PHONE_HREF } from "@/lib/content";
import { Icon } from "@/components/icons";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    MegaTag?: {
      trackEvent?: (event: string, payload?: Record<string, unknown>) => void;
    };
  }
}

const EMAIL_PATTERN = "[A-Za-z0-9._%+\\-]+@[A-Za-z0-9.\\-]+\\.[A-Za-z]{2,}";
const PHONE_PATTERN = "\\(\\d{3}\\) \\d{3}-\\d{4}";

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (!digits) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function qualificationOf(lookingFor: string): { qualified: boolean; label: string } {
  const match = LOOKING_FOR_OPTIONS.find((o) => o.value === lookingFor);
  if (!match) return { qualified: false, label: "unknown" };
  if (!match.qualified) return { qualified: false, label: "disqualified" };
  return { qualified: true, label: match.nurture ? "qualified_nurture" : "qualified" };
}

interface FormCardProps {
  idPrefix?: string;
  className?: string;
}

export function FormCard({
  idPrefix = "hero",
  className = "",
}: FormCardProps): React.ReactElement {
  const { submit } = useMegaLeadForm();
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Synchronous re-entry latch — a rapid click burst yields exactly ONE POST.
  const inFlightRef = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  const fireTracking = (label: string, qualified: boolean): void => {
    if (typeof window === "undefined") return;
    const route = window.location.pathname;
    // Mega optimizer event FIRST, then the GTM dataLayer signal.
    window.MegaTag?.trackEvent?.("form_submit", {
      form_route: route,
      qualification: label,
      qualified,
    });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "form_submit",
      form_route: route,
      qualification: label,
      qualified,
    });
  };

  // Validate FIRST (native), then submit. Button is type="button" so the
  // optimizer's capture-phase listener never fires on empty/invalid clicks.
  const handleValidateClick = (): void => {
    const form = formRef.current;
    if (!form) return;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    form.requestSubmit();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (inFlightRef.current) return;
    inFlightRef.current = true;
    setSubmitting(true);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const lookingFor = String(fd.get("looking_for") ?? "");
    const { qualified, label } = qualificationOf(lookingFor);

    try {
      await submit({
        first_name: String(fd.get("first_name") ?? "").trim(),
        last_name: String(fd.get("last_name") ?? "").trim(),
        email: String(fd.get("email") ?? "").trim(),
        phone: String(fd.get("phone") ?? "").replace(/\D/g, ""),
        looking_for: lookingFor,
        qualified,
        qualification: label,
      });
      fireTracking(label, qualified);
      setSubmitted(true);
    } catch (err) {
      // Every submission shows the same success state — no rejection screen.
      console.error("Lead submission failed:", err);
      fireTracking(label, qualified);
      setSubmitted(true);
    } finally {
      inFlightRef.current = false;
      setSubmitting(false);
    }
  };

  const cardBase =
    "bg-white border border-[var(--color-border)] shadow-card-lg rounded-[3px]";

  if (submitted) {
    return (
      <div className={`${cardBase} p-8 md:p-10 ${className}`}>
        <div className="flex flex-col items-center text-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)]/15">
            <Icon name="check" className="h-7 w-7 text-[var(--color-deep)]" strokeWidth={2.2} />
          </span>
          <h3 className="h3 text-[var(--color-text)]">Request received</h3>
          <p className="text-[15px] leading-relaxed text-[var(--color-muted)]">
            {FORM_COPY.thankYouBody}
          </p>
        </div>
      </div>
    );
  }

  const labelCls =
    "block text-[13px] font-medium tracking-wide text-[var(--color-text)] mb-1.5";
  const fieldCls =
    "w-full min-h-[48px] rounded-[2px] px-4 py-3 text-[16px] bg-white border border-[var(--color-border)] text-[var(--color-text)] placeholder:text-[var(--color-muted)] transition-colors focus:outline-none focus:border-[var(--color-deep)] focus:ring-2 focus:ring-[var(--color-deep)]/25";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Request an appointment at OC Skin Care Center"
      className={`${cardBase} p-6 md:p-7 ${className}`}
    >
      <div className="mb-5">
        <p className="eyebrow">{FORM_COPY.eyebrow}</p>
        <h3 className="h3 mt-2 text-[var(--color-text)]">{FORM_COPY.heading}</h3>
        <p className="mt-2 text-[14px] leading-snug text-[var(--color-muted)]">
          {FORM_COPY.subheading}
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor={`${idPrefix}-first_name`} className={labelCls}>
              First name
            </label>
            <input
              id={`${idPrefix}-first_name`}
              name="first_name"
              type="text"
              required
              autoComplete="given-name"
              placeholder="First name"
              className={fieldCls}
              disabled={submitting}
            />
          </div>
          <div>
            <label htmlFor={`${idPrefix}-last_name`} className={labelCls}>
              Last name
            </label>
            <input
              id={`${idPrefix}-last_name`}
              name="last_name"
              type="text"
              required
              autoComplete="family-name"
              placeholder="Last name"
              className={fieldCls}
              disabled={submitting}
            />
          </div>
        </div>

        <div>
          <label htmlFor={`${idPrefix}-email`} className={labelCls}>
            Email
          </label>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            required
            pattern={EMAIL_PATTERN}
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldCls}
            disabled={submitting}
          />
        </div>

        <div>
          <label htmlFor={`${idPrefix}-phone`} className={labelCls}>
            Phone
          </label>
          <input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            required
            inputMode="numeric"
            pattern={PHONE_PATTERN}
            autoComplete="tel"
            placeholder="(949) 555-0123"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            className={fieldCls}
            disabled={submitting}
          />
        </div>

        <div>
          <label htmlFor={`${idPrefix}-looking_for`} className={labelCls}>
            What best describes what you&apos;re looking for?
          </label>
          <div className="relative">
            <select
              id={`${idPrefix}-looking_for`}
              name="looking_for"
              required
              defaultValue=""
              className={`${fieldCls} appearance-none pr-10`}
              disabled={submitting}
            >
              <option value="" disabled>
                Select one…
              </option>
              {LOOKING_FOR_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.value}
                </option>
              ))}
            </select>
            <Icon
              name="chevronDown"
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-muted)]"
              strokeWidth={2}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleValidateClick}
          disabled={submitting || submitted}
          className="btn btn-primary w-full"
        >
          {submitting ? "Sending…" : FORM_COPY.submitLabel}
          {!submitting && <Icon name="arrow" className="h-4 w-4" strokeWidth={2.2} />}
        </button>

        <p className="text-center text-[12px] leading-relaxed text-[var(--color-muted)]">
          {FORM_COPY.reassurance} Prefer to talk now?{" "}
          <a
            href={PHONE_HREF}
            className="font-medium text-[var(--color-deep)] underline-offset-2 hover:underline"
          >
            {PHONE}
          </a>
        </p>
      </div>
    </form>
  );
}
