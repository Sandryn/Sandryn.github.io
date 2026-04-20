const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "3+", label: "Projects Completed" },
  { value: "2", label: "Industries" },
  { value: "8+", label: "Technologies" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14">

        {/* Left — photo */}
        <div className="flex-shrink-0 relative">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-200/50 to-purple-200/30 blur-xl scale-105" />
          <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border border-border shadow-xl">
            <img
              src="/IMG_2382.JPG"
              alt="Sandrine Lyton Nejesa"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 shadow whitespace-nowrap">
              <span className="text-xs font-mono font-semibold text-primary">&lt; available for hire /&gt;</span>
            </div>
          </div>
        </div>

        {/* Right — content */}
        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-tight">
              ABOUT ME
            </h2>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm <span className="text-foreground font-medium">Sandrine Lyton Nejesa</span>, a Full Stack Junior Developer with a background in Software Engineering, passionate about building systems that solve real-world problems.
            </p>
            <p>
              I've worked on projects in <span className="text-foreground font-medium">e-commerce and healthcare</span>, focusing on seamless user experiences and efficient backend systems.
            </p>
            <p>
              I enjoy turning ideas into functional applications and continuously pushing the boundaries of what I can build.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {stats.map((s) => (
              <div key={s.label} className="bg-card rounded-xl border border-border p-4 text-center shadow-sm">
                <p className="text-2xl font-bold gradient-text">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
