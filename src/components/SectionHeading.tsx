import { Reveal } from "@/components/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  onDark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  onDark = false,
}: SectionHeadingProps): React.ReactElement {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  const titleColor = onDark ? "text-white" : "text-[var(--color-text)]";
  const introColor = onDark ? "text-white/80" : "text-[var(--color-muted)]";
  const eyebrowColor = onDark ? "text-[var(--color-primary)]" : "";

  return (
    <Reveal className={`max-w-2xl ${alignCls}`}>
      <p className={`eyebrow ${eyebrowColor}`}>{eyebrow}</p>
      <h2 className={`h2 mt-3 ${titleColor}`}>{title}</h2>
      {intro && (
        <p className={`mt-4 text-[16px] md:text-[17px] leading-relaxed ${introColor}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
