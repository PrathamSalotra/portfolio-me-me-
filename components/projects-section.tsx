"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { GitHubIcon } from "./social-icons";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20 mb-3">
              <span>03. CASE STUDIES & CODE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Featured Agentic Systems
            </h2>
            <p className="text-base text-muted-foreground mt-2 max-w-2xl">
              Production architectures engineered for reliability. Each case study documents the goal, architecture, and exact failure modes encountered.
            </p>
          </div>

          <div className="text-xs font-mono text-muted-foreground self-start md:self-end">
            Showing {projects.length} featured systems
          </div>
        </motion.div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-between rounded-2xl glass-panel p-7 border border-border/80 hover:border-primary/60 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5"
            >
              <div>
                {/* Top card bar with icons */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      Agent Architecture
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View GitHub Repository"
                        className="p-2 rounded-lg bg-secondary/80 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-200"
                      >
                        <GitHubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Launch Live Demo"
                        className="p-2 rounded-lg bg-secondary/80 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title & One-line Description */}
                <Link href={`/projects/${project.slug}`} className="block">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </Link>

                <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tag Chips */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-secondary/70 text-secondary-foreground border border-border/80 group-hover:border-primary/30 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom "Read case study" Action Link */}
              <div className="mt-8 pt-5 border-t border-border/60 flex items-center justify-between">
                {project.hasCaseStudy ? (
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-emerald-300 transition-colors group/link"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Read case study</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                ) : (
                  <span className="text-xs font-mono text-muted-foreground">
                    Case study coming soon
                  </span>
                )}

                <span className="text-[11px] font-mono text-muted-foreground opacity-60">
                  /projects/{project.slug}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
