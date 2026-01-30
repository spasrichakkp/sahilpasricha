import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />

      {/* Footer integrated into main scroll flow */}
      <footer className="py-8 px-8 border-t border-white/5 text-sm text-muted-foreground flex justify-between">
        <span>© 2026 Agency Inc.</span>
        <span>Seoul / San Francisco</span>
      </footer>
    </div>
  );
}
