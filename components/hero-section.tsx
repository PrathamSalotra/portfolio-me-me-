"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./social-icons";
import { bioData } from "@/data/bio";

export function HeroSection() {
  const handleResumeClick = () => {
    // Optional interactive micro-animation / visual feedback
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Subtle Cyber-Teal Grid & Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full opacity-60 dark:opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Top availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/30 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>Agentic AI & Multi-Agent Systems Engineer</span>
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground leading-none"
          >
            {bioData.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl font-medium text-primary mt-3 sm:mt-4 tracking-tight"
          >
            {bioData.role}
          </motion.p>

          {/* One-line Tagline & Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-muted-foreground mt-4 sm:mt-6 leading-relaxed max-w-2xl"
          >
            {bioData.intro}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mt-8 sm:mt-10"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cyber-glow"
            >
              <span>View projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={bioData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResumeClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-card text-foreground border border-border hover:border-primary/50 hover:bg-secondary/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <FileText className="w-4 h-4 text-primary" />
              <span>Download resume</span>
            </a>
          </motion.div>

          {/* Social icons row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-4 mt-10 pt-8 border-t border-border/60 text-xs font-mono text-muted-foreground"
          >
            <span>CONNECT</span>
            <div className="h-3 w-px bg-border" />
            <a
              href={bioData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={bioData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
