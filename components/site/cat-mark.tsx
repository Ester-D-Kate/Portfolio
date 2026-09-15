import { cn } from "@/lib/utils";

const CAT_BODY_PATH =
  "M64 96c53 0 96 43 96 96l0 85.8c29.7-44.7 77.8-76.2 133.4-84 25.6 60 85.2 102.1 154.6 102.1 10.9 0 21.6-1.1 32-3.1L480 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-140.8-136 108.8 56 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-144 0c-53 0-96-43-96-96l0-224c0-16.6-12.6-30.2-28.7-31.8l-6.6-.3C44.6 158.2 32 144.6 32 128 32 110.3 46.3 96 64 96z";

const CAT_HEAD_PATH =
  "M533.8 3.2C544.2-5.5 560 1.9 560 15.5L560 128c0 61.9-50.1 112-112 112S336 189.9 336 128l0-112.5c0-13.6 15.8-21 26.2-12.3L416 48 480 48 533.8 3.2z";

export function CatMark({
  className,
  interactive = true,
}: {
  className?: string;
  interactive?: boolean;
}) {
  return (
    <span
      className={cn(
        "cat-mark relative block aspect-[576/512] text-mocha",
        interactive && "group",
        className,
      )}
      aria-hidden="true"
    >
      <svg className="absolute inset-0 size-full overflow-visible" viewBox="0 0 576 512">
        <path className="cat-mark-body" fill="currentColor" d={CAT_BODY_PATH} />
        <g className="cat-mark-head">
          <path fill="currentColor" d={CAT_HEAD_PATH} />
          <circle className="cat-mark-eye" cx="400" cy="128" r="20" />
          <circle className="cat-mark-eye" cx="496" cy="128" r="20" />
        </g>
      </svg>
    </span>
  );
}
