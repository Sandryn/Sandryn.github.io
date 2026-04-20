import {
  SiReact, SiHtml5, SiCss, SiTailwindcss,
  SiDjango, SiPostgresql, SiGit, SiStrapi,
  SiPython, SiJavascript,
} from "react-icons/si";
import type { IconType } from "react-icons";

const skills: { name: string; icon: IconType; color: string }[] = [
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
  { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS3", icon: SiCss, color: "text-[#1572B6]" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Django", icon: SiDjango, color: "text-[#44B78B]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  { name: "Strapi", icon: SiStrapi, color: "text-[#4945FF]" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-pink-200/20 to-purple-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-gradient-to-br from-lavender/20 to-peach/10 blur-3xl pointer-events-none" />
      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        <div className="text-center space-y-2">
          <p className="text-primary font-mono text-sm tracking-widest"> MY SKILLS AND EXPERTISE </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/40 transition-all duration-300"
              >
                <Icon className={`w-9 h-9 ${skill.color}`} />
                <span className="text-xs font-medium text-muted-foreground">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
