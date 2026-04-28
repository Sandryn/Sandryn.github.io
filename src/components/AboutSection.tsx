const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "3+", label: "Projects Completed" },
  { value: "2", label: "Industries" },
  { value: "8+", label: "Technologies" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-secondary/40 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-bl from-purple-200/20 to-pink-200/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gradient-to-tr from-peach/10 to-lavender/10 blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14 relative z-10">

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
              <span className="text-xs font-mono font-semibold text-primary">available to work </span>
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
              I am a <span className="text-foreground font-medium">full-stack software developer</span> with a solid educational background in Software Engineering, and have been involved in developing various projects in the past.
            </p>
            <p>
              My areas of interest include designing and building applications that can be effectively <span className="text-foreground font-medium">scaled up and backed up with reliable systems</span>. I have been exposed to all aspects of the development process including system design, implementation, deployment, and end-user support.
            </p>
            <p>
              Apart from technical expertise, I also possess <span className="text-foreground font-medium">problem-solving skills</span> which come from past experiences working in support roles.
            </p>
            <p>
              I'm continuously improving my skills and currently focused on building high-quality applications while growing as a developer in <span className="text-foreground font-medium">collaborative and remote teams</span>.
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
