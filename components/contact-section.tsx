"use client";

import * as React from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  Loader2,
  Terminal,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./social-icons";
import { bioData } from "@/data/bio";

export function ContactSection() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage("Please complete all fields.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");

      // Delightful confetti micro-interaction on success
      try {
        confetti({
          particleCount: 75,
          spread: 60,
          origin: { y: 0.8 },
          colors: ["#10b981", "#34d399", "#059669"],
        });
      } catch {
        // Ignore confetti error if canvas is unavailable
      }
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please email directly."
      );
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-card/40 border-t border-border/80">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact & Availability */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20">
              <span>05. INITIALIZE CONTACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Let&apos;s Build Production AI Systems.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Interested in discussing Retrieval-Augmented Generation (RAG) pipelines, real-time computer vision latency optimization, or full-stack software engineering opportunities? Send a message below or reach out directly.
            </p>

            {/* Direct Contact Card */}
            <div className="p-5 rounded-2xl glass-panel border border-border/80 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-muted-foreground uppercase">
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${bioData.email}`}
                    className="text-base font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {bioData.email}
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>Phone / Call</span>
                <span className="text-foreground font-semibold">+91-9682507935</span>
              </div>

              <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>Response Time</span>
                <span className="text-primary">&lt; 24 Hours</span>
              </div>
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-3">
              <a
                href={bioData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3 rounded-xl border border-border bg-card/60 hover:border-primary/50 text-center text-sm font-medium text-foreground hover:text-primary transition-all duration-200 flex items-center justify-center gap-2"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={bioData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3 rounded-xl border border-border bg-card/60 hover:border-primary/50 text-center text-sm font-medium text-foreground hover:text-primary transition-all duration-200 flex items-center justify-center gap-2"
              >
                <LinkedInIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Resend Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl glass-panel border border-border/80 space-y-6 shadow-xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <div className="flex items-center gap-2 text-xs font-mono text-primary">
                  <Terminal className="w-4 h-4" />
                  <span>POST /api/contact</span>
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  Resend API Verified
                </span>
              </div>

              {/* Status Alert Messages */}
              {status === "success" && (
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/30 text-primary text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>
                    Message received! I&apos;ll get back to you within 24 hours.
                  </span>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive text-sm flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMessage || "Failed to send message."}</span>
                </div>
              )}

              {/* Form Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono font-medium text-foreground uppercase"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ada Lovelace"
                    className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono font-medium text-foreground uppercase"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ada@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-xs font-mono font-medium text-foreground uppercase"
                >
                  Message / Architecture Inquiry
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your AI agent goals or engineering team..."
                  className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all outline-none resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 flex items-center justify-center gap-2 cyber-glow"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting payload...</span>
                  </>
                ) : (
                  <>
                    <span>Send message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
