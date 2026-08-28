import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { About } from "@/components/sections/about";
import { BuildersLab } from "@/components/sections/builders-lab";
import { CodingProfiles } from "@/components/sections/coding-profiles";
import { Contact } from "@/components/sections/contact";
import { CurrentFocus } from "@/components/sections/current-focus";
import { FutureDirection } from "@/components/sections/future-direction";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <CodingProfiles />
        <Projects />
        <CurrentFocus />
        <FutureDirection />
        <BuildersLab />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
