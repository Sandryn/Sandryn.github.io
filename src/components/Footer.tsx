const Footer = () => {
  return (
    <footer className="py-6 px-6 border-t border-border bg-card">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="text-xl font-bold gradient-text">SLN</span>
        <p className="text-sm text-muted-foreground">
          © 2026 Sandrine Lyton Nejesa
        </p>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
