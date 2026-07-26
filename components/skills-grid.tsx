"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Database,
  Activity,
  Layers,
  Terminal,
  Sparkles,
} from "lucide-react";
import { skillCategories } from "@/data/skills";

const categoryIconMap: Record<string, React.ReactNode> = {
  "Agent Frameworks": <Layers className="w-5 h-5 text-primary" />,
  "Observability & Tracing": <Activity className="w-5 h-5 text-emerald-400" />,
  "Memory & Retrieval": <Database className="w-5 h-5 text-teal-400" />,
  "LLM Infrastructure & ML": <Cpu className="w-5 h-5 text-emerald-300" />,
  "Engineering Architecture": <Terminal className="w-5 h-5 text-primary" />,
};

export function SkillsGrid() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-card/40 border-y border-border/80">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20 mb-3">
            <span>02. TECHNICAL SPECS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Core Competencies & Stack
          </h2>
          <p className="text-base text-muted-foreground mt-2">
            Specialized tooling across agentic orchestration, observability, semantic memory, and modern full-stack engineering.
          </p>
        </motion.div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl glass-panel border border-border/80 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border/60">
                  <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    {categoryIconMap[group.category] || (
                      <Terminal className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <h3 className="text-base font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {group.category}
                  </h3>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      title={skill.description}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 ${
                        skill.highlighted
                          ? "bg-primary/10 border-primary/30 text-foreground hover:border-primary hover:bg-primary/20"
                          : "bg-secondary/60 border-border text-muted-foreground hover:text-foreground hover:border-border/80"
                      }`}
                    >
                      {skill.highlighted && (
                        <Sparkles className="w-3 h-3 text-primary shrink-0" />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom description preview */}
              <div className="mt-6 pt-3 border-t border-border/40 text-[11px] font-mono text-muted-foreground">
                {group.skills.filter((s) => s.highlighted).length} highlighted core technologies
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
