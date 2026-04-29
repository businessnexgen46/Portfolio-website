import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-xl mb-2">SABARISH</div>
            <p className="text-sm text-muted-foreground">
              Building high-converting websites for modern businesses
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2026 Sabarish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
