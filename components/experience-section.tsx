"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";

interface TimelineItem {
  type: "experience" | "education" | "certification";
  roleOrDegree: string;
  organization: string;
  location: string;
  period: string;
  highlights: string[];
  skills: string[];
}

const timelineData: TimelineItem[] = [
  {
    type: "experience",
    roleOrDegree: "Full-Stack Development Engineering Intern",
    organization: "UniConverge Technologies Pvt. Ltd.",
    location: "Noida, Uttar Pradesh",
    period: "Feb 2026 – May 2026",
    highlights: [
      "Built RESTful APIs and integrated them into the backend, reducing data-processing latency by 250ms.",
      "Implemented a full course selector with 12 courses using Node.js, Cloudinary, MySQL, and Lucid ORM.",
      "Provisioned AWS (S3, Lambda) cloud infrastructure for scripting and developing backend and database components.",
    ],
    skills: ["Node.js", "AWS S3", "AWS Lambda", "MySQL", "REST APIs", "Lucid ORM"],
  },
  {
    type: "experience",
    roleOrDegree: "Research Assistant",
    organization: "Graphic Era (Deemed to be) University",
    location: "Dehradun, Uttarakhand",
    period: "Aug 2025 – Apr 2026",
    highlights: [
      "Applied computer vision image detection models like YOLOv8 NANO and MediaPipe Face Mesh, reducing inference delay to under 100ms.",
      "Developed a Streamlit-based dashboard to visualize real-time YOLO and OpenCV outputs including gaze estimation, face detection, and multi-object tracking.",
      "Implemented Python Flask-to-FastAPI asynchronous routing for detection triggers, achieving response latency under 250ms.",
    ],
    skills: [
      "YOLOv8 NANO",
      "MediaPipe",
      "OpenCV",
      "FastAPI",
      "Flask",
      "Streamlit",
      "Python",
    ],
  },
  {
    type: "education",
    roleOrDegree: "B.Tech. in Computer Science",
    organization: "Graphic Era Institute of Technology",
    location: "Dehradun, Uttarakhand",
    period: "Expected July 2026",
    highlights: [
      "GPA: 7.8/10.0 — Dean's List Honor Student.",
      "Concentrations: Retrieval-Augmented Generation (RAG) and Applied Software Engineering Principles.",
      "Graphic Era Project and Research Leader (Aug 2025 – Apr 2026), mentoring peers in generative AI and software architecture.",
    ],
    skills: ["Data Structures & Algorithms", "Agentic AI", "Generative AI", "OOP", "DBMS"],
  },
  {
    type: "certification",
    roleOrDegree: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    organization: "Oracle Cloud",
    location: "Online / Global",
    period: "Aug 2025 – Aug 2027",
    highlights: [
      "Certified in Oracle Cloud AI foundations, machine learning infrastructure, and cloud AI services.",
      "Completed Walmart USA Advanced Software Engineering Virtual Experience (Jul 2026).",
    ],
    skills: ["Oracle Cloud AI", "ML Infrastructure", "Software Engineering"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20 mb-3">
            <span>03. WORK & EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Experience & Credentials
          </h2>
          <p className="text-base text-muted-foreground mt-2">
            Professional software engineering internships, academic AI research, and computer science honors.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="relative border-l-2 border-border/70 ml-3 md:ml-6 pl-6 md:pl-10 space-y-12">
          {timelineData.map((item, index) => {
            const isWork = item.type === "experience";
            const isEdu = item.type === "education";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute -left-[35px] md:-left-[51px] top-1.5 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isWork
                      ? "bg-primary/20 border-primary text-primary shadow-lg shadow-primary/20"
                      : isEdu
                        ? "bg-emerald-500/20 border-emerald-500 text-emerald-400"
                        : "bg-teal-500/20 border-teal-500 text-teal-400"
                  }`}
                >
                  {isWork && <Briefcase className="w-3.5 h-3.5" />}
                  {isEdu && <GraduationCap className="w-3.5 h-3.5" />}
                  {!isWork && !isEdu && <Award className="w-3.5 h-3.5" />}
                </div>

                {/* Card Container */}
                <div className="p-6 md:p-8 rounded-2xl glass-panel border border-border/80 hover:border-primary/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/5">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                        {item.organization}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-foreground mt-0.5">
                        {item.roleOrDegree}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-primary/80" />
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-primary/80" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlight bullets */}
                  <ul className="space-y-2 mt-4">
                    {item.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-border/50">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-secondary/70 text-foreground border border-border/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
