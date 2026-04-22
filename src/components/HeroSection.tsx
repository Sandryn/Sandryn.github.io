import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg.jpg')" }}
      />
      {/* Overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/65" />
      {/* No extra blobs — keep it clean */}

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 pt-20 pb-10">

        {/* Left — text */}
        <div className="flex-1 space-y-6">
          <p className="text-xl font-bold text-white tracking-widest">Hello, My Name Is</p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white">
            SANDRINE <span className="gradient-text">LYTON</span><br />NEJESA
          </h1>

          <p className="text-lg font-bold text-white/90">
            I'm a <span className="text-primary font-bold">Full Stack Junior Developer</span>
          </p>

          <p className="text-white font-semibold max-w-md leading-relaxed">
            Building modern web applications that solve real-world problems from e-commerce platforms to healthcare systems.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" className="rounded-full px-8 gap-2" asChild>
              <a href="#projects">View My Work <ArrowDown className="w-4 h-4" /></a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 gap-2" asChild>
              <a href="#contact"><Download className="w-4 h-4" /> Get In Touch</a>
            </Button>
          </div>
        </div>

        {/* Right — photo */}
        <div className="flex-shrink-0 relative">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
            <img
              src="/IMG_2382.JPG"
              alt="Sandrine Lyton Nejesa"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 flex items-center gap-2 shadow-md whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-semibold text-gray-800"> open to work </span>
          </div>
        </div>

      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="hsl(330 30% 95%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
