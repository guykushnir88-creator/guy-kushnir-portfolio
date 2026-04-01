export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg-primary py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-accent-blue font-semibold text-sm">GK</p>
        <p className="text-text-muted text-sm">
          © {new Date().getFullYear()} Guy Kushnir. Built with Claude AI. Framework v2.0
        </p>
        <div className="flex items-center gap-4 text-text-muted text-sm">
          <a
            href="mailto:Guykushnir88@gmail.com"
            className="hover:text-accent-blue transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/guy-kushnir-pm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-blue transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
