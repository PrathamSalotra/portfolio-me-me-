import { Project } from "@/lib/types";

/**
 * ============================================================================
 * PLACEHOLDER CONTENT MARKER
 * ============================================================================
 * The 4 projects seeded below are placeholder content reflecting:
 *   1. A multi-agent orchestration system
 *   2. A self-correcting agent loop
 *   3. A persistent-memory agent
 *   4. A tool-use guardrails project
 *
 * Please edit or replace these entries with your actual project metadata,
 * repositories, live demos, and tags.
 * ============================================================================
 */
export const projects: Project[] = [
  {
    slug: "multi-agent-orchestrator",
    title: "LangGraph Multi-Agent Orchestration System",
    description:
      "A hierarchical supervisor-worker agent architecture built with LangGraph and GPT-4o that autonomously synthesizes, reviews, and tests production codebases with continuous observability.",
    tags: [
      "LangGraph",
      "LangChain",
      "Multi-agent",
      "LangSmith",
      "TypeScript",
      "Python",
    ],
    repoUrl: "https://github.com/example/multi-agent-orchestrator",
    demoUrl: "https://orchestrator-demo.example.com",
    hasCaseStudy: true,
  },
  {
    slug: "self-correcting-agent-loop",
    title: "Autonomous Self-Correcting Code Generation Loop",
    description:
      "An iterative reflexing agent loop that executes generated code in an isolated sandbox, parses AST static analysis errors, and autonomously patches failures until tests pass.",
    tags: ["LangChain", "Reflexion", "Docker Sandbox", "AST Parsing", "FastAPI"],
    repoUrl: "https://github.com/example/self-correcting-agent-loop",
    demoUrl: "https://reflexion-loop.example.com",
    hasCaseStudy: true,
  },
  {
    slug: "persistent-memory-agent",
    title: "Persistent-Memory Long-Horizon Agent",
    description:
      "A semantic memory and temporal retrieval engine powered by Qdrant vector database and episodic summarization, enabling AI agents to retain context across months of interactions.",
    tags: [
      "Qdrant",
      "pgvector",
      "Semantic Memory",
      "Embeddings",
      "LangChain",
    ],
    repoUrl: "https://github.com/example/persistent-memory-agent",
    hasCaseStudy: true,
  },
  {
    slug: "tool-use-guardrails",
    title: "Deterministic Guardrails & Policy Enforcement Proxy",
    description:
      "A low-latency security gateway for LLM tool calling that enforces JSON schema invariants, blocks prompt injection payloads, and audits sensitive API executions in real time.",
    tags: [
      "Guardrails",
      "Tool-use",
      "Schema Validation",
      "Security",
      "FastAPI",
    ],
    repoUrl: "https://github.com/example/tool-use-guardrails",
    demoUrl: "https://guardrails-proxy.example.com",
    hasCaseStudy: true,
  },
];
