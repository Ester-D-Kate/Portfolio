type TermDefinitionProps = {
  term: string;
  definition: string;
  align?: "left" | "center" | "right";
};

const tooltipAlignment = {
  left: "left-0",
  center: "left-1/2 -translate-x-1/2",
  right: "right-0",
};

export function TermDefinition({
  term,
  definition,
  align = "center",
}: TermDefinitionProps) {
  const tooltipId = `definition-${term.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <span className="group relative inline-flex">
      <button
        aria-describedby={tooltipId}
        className="cursor-help border-b border-dotted border-current bg-transparent p-0 font-inherit text-inherit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mocha"
        type="button"
      >
        {term}
      </button>
      <span
        className={`pointer-events-none invisible absolute top-full z-30 mt-3 w-[min(16rem,calc(100vw-2rem))] rounded-md bg-espresso p-3 text-left font-sans text-[.7rem] font-normal normal-case leading-5 tracking-normal text-paper-light opacity-0 shadow-lg transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 ${tooltipAlignment[align]}`}
        id={tooltipId}
        role="tooltip"
      >
        {definition}
      </span>
    </span>
  );
}
