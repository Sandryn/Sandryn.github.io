import { Mail, Phone, MapPin, Linkedin, Github, FileText } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to grow in my software development career.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Mail, label: "Email", value: "sandrynlyton@gmail.com", href: "mailto:sandrynlyton@gmail.com" },
              { icon: Phone, label: "Phone", value: "0754342540 / 0785965167", href: "tel:0754342540" },
              { icon: MapPin, label: "Location", value: "Kampala, Uganda", href: "#" },
              { icon: Linkedin, label: "LinkedIn", value: "sandrine-nejesa", href: "https://www.linkedin.com/in/sandrine-nejesa-529a4a221" },
              { icon: Github, label: "GitHub", value: "github.com/Sandryn", href: "https://github.com/Sandryn" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-primary font-mono tracking-wider">{label}</p>
                  <p className="text-sm font-semibold text-foreground">{value}</p>
                </div>
              </a>
            ))}
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-primary/10 border border-primary/30 shadow-sm hover:shadow-md hover:border-primary/60 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-primary font-mono tracking-wider">Resume</p>
                <p className="text-sm font-semibold text-foreground">View / Download CV</p>
              </div>
            </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
