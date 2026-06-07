import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", className)}>
      <span className="text-blue-500 uppercase tracking-wider text-sm font-medium">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mt-2">{title}</h2>
    </div>
  );
}
