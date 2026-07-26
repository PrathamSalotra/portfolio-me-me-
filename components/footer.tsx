import * as React from "react";
import { Mail, Terminal } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./social-icons";
import { bioData } from "@/data/bio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30 mt-24 py-12">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand signature */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">
              {bioData.name}
            </p>
            <p className="text-xs font-mono text-muted-foreground">
              {bioData.role} · Agentic AI Architecture
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={bioData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-full border border-border bg-card hover:border-primary/50 hover:text-primary text-muted-foreground transition-all duration-200"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
          <a
            href={bioData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-full border border-border bg-card hover:border-primary/50 hover:text-primary text-muted-foreground transition-all duration-200"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${bioData.email}`}
            aria-label="Email Alex"
            className="p-2 rounded-full border border-border bg-card hover:border-primary/50 hover:text-primary text-muted-foreground transition-all duration-200"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright & Next.js attribution */}
        <div className="text-center sm:text-right text-xs text-muted-foreground space-y-1">
          <p>
            © {currentYear} {bioData.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] opacity-70">
            Built with Next.js App Router · Tailwind CSS · Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
