import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "youtube-rag-chatbot",
    title: "YouTube Video RAG Assistant",
    description:
      "A Retrieval-Augmented Generation application that extracts YouTube video transcripts, chunks them into 500-token semantic windows, and uses Llama-3.1-8B-Instruct with bge-small-en-v1.5 embeddings to answer context-aware queries.",
    tags: [
      "RAG",
      "Llama-3.1",
      "bge-small-en",
      "LangChain",
      "Python",
      "Transcript API",
    ],
    repoUrl: "https://github.com/PrathamSalotra",
    hasCaseStudy: true,
  },
  {
    slug: "ai-proctoring-system",
    title: "AI-Powered Real-Time Proctoring System",
    description:
      "An automated online examination proctoring engine capturing 30 FPS webcam streams to detect 5 distinct violation categories via computer vision, routed through a unified Python Flask-to-FastAPI API layer.",
    tags: [
      "Computer Vision",
      "YOLO",
      "OpenCV",
      "FastAPI",
      "Flask",
      "Real-Time ML",
    ],
    repoUrl: "https://github.com/PrathamSalotra",
    hasCaseStudy: true,
  },
  {
    slug: "sandesh-suvidha-messenger",
    title: "Sandesh Suvidha — Real-Time 1-to-1 Messenger",
    description:
      "A secure real-time messaging platform built with Socket.io, JWT & Bcrypt authentication, and a MongoDB schema storing 7,000+ chats with chat retrieval and load speed optimized by 35%.",
    tags: [
      "Socket.io",
      "React",
      "Zustand",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
    ],
    repoUrl: "https://github.com/PrathamSalotra",
    hasCaseStudy: true,
  },
  {
    slug: "multi-agent-orchestrator",
    title: "LangGraph Multi-Agent Orchestration System",
    description:
      "A hierarchical supervisor-worker agent architecture built with LangGraph that autonomously synthesizes, reviews, and audits codebases with continuous LangSmith observability.",
    tags: [
      "LangGraph",
      "LangChain",
      "Multi-agent",
      "LangSmith",
      "TypeScript",
      "Python",
    ],
    repoUrl: "https://github.com/PrathamSalotra",
    hasCaseStudy: true,
  },
];
