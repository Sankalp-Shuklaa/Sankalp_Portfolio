import { Github, Linkedin, Code2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <a href="#home" className="text-2xl font-bold tracking-tighter text-primary inline-block mb-2">
            Sankalp<span className="text-foreground">.</span>
          </a>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Sankalp Shukla. All rights reserved.
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="http://github.com/Sankalp-Shuklaa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/sankalp-shukla-1650a7256"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://leetcode.com/u/Sankalp_Shukla2002/-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all hover:scale-110"
            aria-label="LeetCode"
          >
            <Code2 className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
