import { CatMark } from "./cat-mark";

export function SiteFooter() {
  return (
    <footer className="bg-mocha py-6 text-paper-light">
      <div className="mx-auto flex min-h-48 w-[min(1280px,calc(100%-1.5rem))] items-end justify-between gap-8 md:w-[min(1280px,calc(100%-3rem))]">
        <div className="flex items-center gap-4">
          <CatMark className="w-11 text-paper-light" />
          <p className="text-xs leading-6 opacity-75">
            Designed with coffee.
            <br />
            Engineered with curiosity.
          </p>
        </div>
        <p className="hidden text-xs opacity-75 md:block">© 2026 Arunya</p>
        <a
          className="text-xs font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper-light"
          href="#top"
        >
          Back to the top ↑
        </a>
      </div>
    </footer>
  );
}
