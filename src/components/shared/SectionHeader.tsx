type Props = {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
}: Props) {
  return (
    <div className={centered ? "text-center mb-16" : "mb-16"}>
      <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">
        {label}
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
