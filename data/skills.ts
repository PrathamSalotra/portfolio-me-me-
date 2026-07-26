import { SkillCategory } from "@/lib/types";

/**
 * ============================================================================
 * PLACEHOLDER CONTENT MARKER
 * ============================================================================
 * Categorized skills grid for AI & Full-Stack Systems Engineering.
 * Please edit or replace these categories and items to match your exact stack.
 * ============================================================================
 */
export const skillCategories: SkillCategory[] = [
  {
    category: "Agent Frameworks",
    skills: [
      { name: "LangGraph", description: "Stateful multi-agent workflows & cycles", highlighted: true },
      { name: "LangChain", description: "LLM application orchestration & tools", highlighted: true },
      { name: "AutoGen", description: "Multi-agent conversational systems", highlighted: false },
      { name: "CrewAI", description: "Role-playing autonomous AI agent teams", highlighted: false },
      { name: "LlamaIndex", description: "Data frameworks for LLM context", highlighted: false },
    ],
  },
  {
    category: "Observability & Tracing",
    skills: [
      { name: "LangSmith", description: "LLM evaluation, debugging & trace analytics", highlighted: true },
      { name: "Arize Phoenix", description: "Open-source AI observability & evals", highlighted: true },
      { name: "Helicone", description: "LLM logging, latency & cost monitoring", highlighted: false },
      { name: "OpenTelemetry", description: "Distributed systems tracing & metrics", highlighted: false },
    ],
  },
  {
    category: "Memory & Retrieval",
    skills: [
      { name: "Qdrant", description: "High-performance semantic vector search", highlighted: true },
      { name: "pgvector", description: "PostgreSQL vector similarity search", highlighted: true },
      { name: "Milvus", description: "Cloud-native distributed vector database", highlighted: false },
      { name: "Redis", description: "In-memory caching & semantic cache store", highlighted: false },
    ],
  },
  {
    category: "LLM Infrastructure & ML",
    skills: [
      { name: "PyTorch", description: "Deep learning & tensor computation", highlighted: true },
      { name: "vLLM", description: "High-throughput LLM serving & PagedAttention", highlighted: true },
      { name: "Ollama", description: "Local quantized model execution & API", highlighted: false },
      { name: "Hugging Face", description: "Transformers, datasets & fine-tuning pipelines", highlighted: false },
    ],
  },
  {
    category: "Engineering Architecture",
    skills: [
      { name: "TypeScript", description: "Strictly-typed scalable web applications", highlighted: true },
      { name: "Next.js", description: "App Router, Server Components & API routes", highlighted: true },
      { name: "Docker", description: "Containerized agent sandboxing & deployment", highlighted: false },
      { name: "FastAPI", description: "High-performance async Python backend APIs", highlighted: false },
      { name: "Vercel", description: "Edge deployment & CI/CD automation", highlighted: false },
    ],
  },
];
