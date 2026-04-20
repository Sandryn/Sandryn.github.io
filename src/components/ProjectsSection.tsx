import { ExternalLink, Code2, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "APF Project",
    subtitle: "Accountancy Practitioners Forum",
    description: "A platform for APF streamlining operations and improving accessibility to services. Features role-based access, member management, and event coordination.",
    tech: ["React", "Django", "PostgreSQL"],
    image: "/apf-project.jpg.png",
    stats: [
      { value: "1000+", label: "Members" },
      { value: "10+", label: "Events" },
      { value: "100+", label: "Resources" },
    ],
    github: "#",
    live: "https://apfuganda.org",
  },
  {
    title: "ShopConnect",
    subtitle: "Location-Based Commerce",
    description: "Connecting shoppers and business owners with QR code-based shop identification, vendor/shopper roles, and location-based discovery.",
    tech: ["React", "Django", "PostgreSQL"],
    image: "",
    stats: [
      { value: "2", label: "User Roles" },
      { value: "QR", label: "Based ID" },
      { value: "GPS", label: "Discovery" },
    ],
    github: "#",
    live: null,
  },
  {
    title: "HealthLink",
    subtitle: "Healthcare Platform",
    description: "Connecting patients, doctors, pharmacists, and lab personnel — improving communication and access to healthcare services.",
    tech: ["React", "Django", "PostgreSQL"],
    image: "",
    stats: [
      { value: "4", label: "User Types" },
      { value: "Real-time", label: "Comms" },
      { value: "Secure", label: "Records" },
    ],
    github: "#",
    live: null,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <p className="text-primary font-mono text-sm tracking-widest">// My Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {project.image && (
                <div className="w-full h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-8 flex flex-col md:flex-row gap-8">
                <div className="flex-1 space-y-4">
                  <div>
                    <p className="text-primary font-mono text-xs tracking-widest mb-1">{project.subtitle}</p>
                    <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-1 items-center">
                    <Button variant="outline" size="sm" className="rounded-full gap-1.5" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Code2 className="w-3.5 h-3.5" /> GitHub
                      </a>
                    </Button>
                    {project.live ? (
                      <Button size="sm" className="rounded-full gap-1.5" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                        </a>
                      </Button>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground border border-dashed border-border rounded-full px-3 py-1.5">
                        <Clock className="w-3.5 h-3.5" /> Coming Soon
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex md:flex-col justify-around md:justify-center gap-4 md:min-w-[160px]">
                  {project.stats.map((s) => (
                    <div key={s.label} className="text-center bg-secondary/50 rounded-xl border border-border px-4 py-3">
                      <p className="text-xl font-bold gradient-text">{s.value}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
