import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Arrow() {
  return (
    <ArrowUpRight
      className="size-4"
      aria-hidden="true"
    />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  titleClassName,
  copyClassName,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  titleClassName?: string;
  copyClassName?: string;
}) {
  return (
    <div className="mb-12 grid gap-8 border-t border-line pt-4 md:grid-cols-[20%_1fr_32%] md:items-end md:gap-8 lg:mb-24">
      <p className="font-mono text-[.68rem] font-bold uppercase tracking-[.13em] text-mocha">
        <span className="inline-flex items-center gap-3 border-b border-current pb-2">
          <span className="h-px w-10 bg-current" />
          {eyebrow}
        </span>
      </p>
      <h2
        className={cn(
          "font-serif text-5xl leading-[.9] tracking-[-.06em] md:text-7xl lg:text-[6.1rem]",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {copy ? (
        <p className={cn("max-w-xl text-sm leading-7 text-muted", copyClassName)}>
          {copy}
        </p>
      ) : null}
    </div>
  );
}
