import { SkillCategory } from "@/lib/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "AI & Agent Frameworks",
    skills: [
      {
        name: "LangGraph",
        description:
          "Multi-agent state machines & hierarchical supervisor-worker architectures.",
        highlighted: true,
      },
      {
        name: "LangChain",
        description:
          "RAG pipelines, custom document loaders, and semantic retrieval chains.",
        highlighted: true,
      },
      {
        name: "LangSmith",
        description: "Continuous tracing, latency profiling, and LLM evaluation loops.",
        highlighted: true,
      },
      {
        name: "RAG & Vector Search",
        description:
          "Semantic chunking (500 tokens), bge-small-en-v1.5 embeddings, and Llama-3.1-8B-Instruct.",
        highlighted: true,
      },
      {
        name: "YOLOv8 & MediaPipe",
        description:
          "Real-time object detection and face mesh pipelines optimized under 100ms.",
        highlighted: true,
      },
      {
        name: "HuggingFace",
        description: "Model fine-tuning, inference APIs, and transformer architectures.",
      },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      {
        name: "Python",
        description: "AI/ML scripting, FastAPI/Flask backends, OpenCV & automation.",
        highlighted: true,
      },
      {
        name: "Java",
        description: "Object-oriented software design, Spring Boot enterprise backends.",
        highlighted: true,
      },
      {
        name: "JavaScript / TypeScript",
        description: "Strictly typed full-stack development across Node.js & React.",
        highlighted: true,
      },
      {
        name: "C++ / C",
        description: "Systems programming, data structures, algorithms & memory control.",
      },
      {
        name: "HTML5 / CSS3",
        description: "Modern semantic web markup and responsive design.",
      },
    ],
  },
  {
    category: "Full-Stack & Web Frameworks",
    skills: [
      {
        name: "React.js / Next.js",
        description: "App Router, Server Components, Zustand state management.",
        highlighted: true,
      },
      {
        name: "Node.js & Express.js",
        description: "High-concurrency RESTful APIs and real-time Socket.io servers.",
        highlighted: true,
      },
      {
        name: "FastAPI & Flask",
        description: "Low-latency Python routing for AI detection triggers under 250ms.",
        highlighted: true,
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first responsive UI, dark mode & glassmorphism systems.",
        highlighted: true,
      },
      {
        name: "Socket.io",
        description: "Real-time bi-directional messaging with JWT & Bcrypt auth.",
      },
      {
        name: "Spring Boot",
        description: "Enterprise Java backend architectures and REST services.",
      },
    ],
  },
  {
    category: "Cloud, Databases & DevOps",
    skills: [
      {
        name: "AWS (S3, Lambda)",
        description: "Serverless backend scripting and cloud object storage provisioning.",
        highlighted: true,
      },
      {
        name: "MongoDB",
        description:
          "NoSQL schema design storing 7,000+ real-time chat messages with 35% speed boost.",
        highlighted: true,
      },
      {
        name: "MySQL",
        description: "Relational schema modeling and Lucid ORM integration.",
        highlighted: true,
      },
      {
        name: "Docker & Microservices",
        description: "Containerized deployment and isolated service architectures.",
      },
      {
        name: "Redis",
        description: "In-memory caching and real-time pub/sub session stores.",
      },
    ],
  },
  {
    category: "Engineering Tools & Testing",
    skills: [
      {
        name: "Git & GitHub",
        description: "Version control, collaborative code reviews, and CI/CD pipelines.",
        highlighted: true,
      },
      {
        name: "VSCode & IntelliJ / PyCharm",
        description: "Advanced IDE debugging across TypeScript, Java, and Python.",
      },
      {
        name: "Postman",
        description: "API testing, load simulation, and endpoint documentation.",
      },
      {
        name: "Jest",
        description: "Automated unit testing and regression verification suites.",
      },
      {
        name: "Jupyter Notebooks",
        description: "Exploratory data analysis and ML experiment prototyping.",
      },
    ],
  },
];
