import { cn } from "@/lib/utils";
import { CatMark } from "./cat-mark";

function SteamWisps({ className }: { className: string }) {
  return (
    <svg
      className={cn("steam-wisps", className)}
      viewBox="0 0 220 260"
      aria-hidden="true"
    >
      <path className="steam-wisp steam-wisp-a" d="M70 238 C35 202 80 166 53 122 C30 84 72 49 60 16" />
      <path className="steam-wisp steam-wisp-b" d="M111 246 C78 205 128 167 99 121 C73 80 121 48 108 10" />
      <path className="steam-wisp steam-wisp-c" d="M153 238 C125 199 171 170 147 131 C126 96 170 60 158 24" />
    </svg>
  );
}

function MokaArt() {
  return (
    <svg className="moka-illustration" viewBox="0 0 1186 1125" aria-hidden="true">
      <defs>
        <clipPath id="moka-clean-clip" clipPathUnits="userSpaceOnUse">
          <path
            fillRule="evenodd"
            d="M0 0H1186V1125H0V0ZM0 300H180V730H0V300Z"
          />
        </clipPath>
      </defs>
      <image
        href="/audioflow-brewing-moka-colored.png"
        width="1186"
        height="1125"
        clipPath="url(#moka-clean-clip)"
      />
    </svg>
  );
}

export function CoffeeScene() {
  return (
    <div
      className="coffee-scene relative aspect-square w-full max-w-[560px] justify-self-end"
      aria-label="A peaceful cat beside a moka pot and fresh coffee"
    >
      <div className="absolute left-[8%] top-[5%] aspect-square w-[78%] rounded-full bg-[#dbc9ae] shadow-[inset_0_0_0_1px_rgba(111,69,52,.08)]" />
      <MokaArt />
      <SteamWisps className="moka-steam" />
      <div className="coffee-cup" aria-hidden="true">
        <div className="coffee-surface" />
        <div className="cup-handle" />
      </div>
      <SteamWisps className="cup-steam-art" />
      <CatMark className="cat-illustration" />
      <div className="scene-table" />
      <span className="bean bean-one" aria-hidden="true" />
      <span className="bean bean-two" aria-hidden="true" />
      <span className="bean bean-three" aria-hidden="true" />
      <p className="scene-note">
        currently brewing
        <br />
        gentle machines
      </p>
    </div>
  );
}
