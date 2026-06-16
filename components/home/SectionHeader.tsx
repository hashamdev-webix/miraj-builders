type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  align?: "center" | "left";
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow ? (
        <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-3 font-heading text-3xl font-bold text-brand-900 sm:text-4xl">
        {title}
      </h2>
      <span className="mt-4 h-1 w-16 rounded-full bg-accent-500" />
    </div>
  );
}
