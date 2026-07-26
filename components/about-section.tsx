"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Cpu, Code2 } from "lucide-react";
import { bioData } from "@/data/bio";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-border/80">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Section Heading & Philosophy Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20">
              <span>01. ABOUT ME</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Technical Credibility Over Hype
            </h2>
            <p className="text-sm font-mono text-muted-foreground">
              Specializing in self-correcting agent architectures, semantic memory retrieval, and LLM evaluation loops.
            </p>

            {/* Quick architectural principles card */}
            <div className="mt-8 p-5 rounded-xl border border-border bg-card/60 space-y-3">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-primary">
                <Terminal className="w-4 h-4" />
                <span>Core Engineering Philosophy</span>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>
                    Deterministic fallback policies & JSON schema invariants for every LLM tool call.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Cpu className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>
                    Continuous trace observability via LangSmith & Arize Phoenix to profile latency and cost.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Code2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>
                    Strictly-typed TypeScript and Python interfaces across distributed multi-agent systems.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* 2-3 Paragraph Bio Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            {bioData.aboutParagraphs.map((paragraph: string, idx: number) => (
              <p
                key={idx}
                className="first:text-foreground first:font-medium first:text-lg sm:first:text-xl"
              >
                {paragraph}
              </p>
            ))}


          </motion.div>
        </div>
      </div>
    </section>
  );
}
