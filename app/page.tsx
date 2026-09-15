import { About } from "@/components/sections/about";
import { Capabilities } from "@/components/sections/capabilities";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { Projects } from "@/components/sections/projects";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";

export default function Home() {
  return (
    <>
      <a className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-full bg-espresso px-4 py-2 text-xs font-bold text-paper-light transition focus:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mocha" href="#main">
        Skip to content
      </a>
      <div className="grain" aria-hidden="true" />

      <SiteHeader />

      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Capabilities />
        <Journey />
        <Contact />
      </main>

      <SiteFooter />
    </>
  );
}
