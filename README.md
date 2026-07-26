# Personal AI/ML Developer Portfolio

A technically credible, resume-style developer portfolio website designed to showcase **Agentic AI systems, LangGraph/LangChain orchestration, multi-agent pipelines, and production LLM engineering**. 

Built with **Next.js 15+ App Router**, **TypeScript (Strict Mode)**, **Tailwind CSS**, **shadcn/ui**, **Framer Motion**, and **MDX Case Studies**. Designed around modern cyber-teal glassmorphism aesthetics and dark-mode-first engineering principles—rejecting generic corporate templates in favor of a clean, personal, high-density technical presentation.

---

## 📌 Project Description & Context

As AI systems move from zero-shot demos to long-horizon production agents, engineering credibility depends on understanding **where systems break and how they recover**. 

This portfolio showcases four core agentic AI architectures:
1. **LangGraph Multi-Agent Orchestration System**: Hierarchical supervisor-worker agent topology for complex codebase synthesis and audit.
2. **Autonomous Self-Correcting Code Generation Loop**: Sandbox execution and Reflexion-based AST error patching.
3. **Persistent-Memory Long-Horizon Agent**: Dual-layer (Episodic + Semantic) memory engine using Qdrant and exponential temporal decay.
4. **Deterministic Guardrails & Policy Enforcement Proxy**: Sub-15ms schema validation and injection firewall for LLM tool calling.

### 🌟 Key Differentiators
- **"What Broke / Failure Modes Encountered" Section**: Every case study features a dedicated callout section detailing real production failure modes (deadlocks, token exhaustion, memory poisoning, schema hallucinations) and how they were engineered away.
- **Interactive MDX Case Studies**: Case study detail pages (`/projects/[slug]`) are rendered directly from Markdown/MDX files in `/content/case-studies/`, featuring architecture diagram visualizations and technical deep-dives.
- **Cyber-Teal Design System**: Custom HSL/hex color palette (`#10b981`), glassmorphic navigation panels, and smooth scroll-reveal micro-animations via Framer Motion.
- **Resend Contact API**: Native Next.js route handler (`/app/api/contact/route.ts`) powered by the Resend email SDK with client-side form validation and developer simulation fallbacks.

---

## 🛠️ Technology Stack

| Component | Technology / Library |
| :--- | :--- |
| **Framework** | Next.js 15+ (App Router), React 19, TypeScript in Strict Mode |
| **Styling** | Tailwind CSS v4, custom utility classes, `@tailwindcss/typography` |
| **UI Components** | shadcn/ui principles, Lucide Icons, Glassmorphism panels |
| **Animations** | Framer Motion scroll-reveal & interactive hover states |
| **Content Engine** | `next-mdx-remote/rsc`, `gray-matter` for Markdown/MDX parsing |
| **Contact Form** | Next.js Route Handler + Resend Email API (`resend`) |
| **Theme System** | `next-themes` (Dark mode default with localStorage persistence) |
| **Python Backend Tools** | Pinned in `requirements.txt` (`langchain`, `langgraph`, `qdrant-client`, `fastapi`, etc.) |

---

## 🔄 Execution Workflow & Local Development

### 1. Prerequisites
- **Node.js** v20.0+ and **npm**
- *(Optional)* **Python** 3.11+ if running companion agentic AI scripts listed in `requirements.txt`

### 2. Frontend Installation & Setup

Clone the repository and install dependencies:
```bash
npm install
```

Start the Next.js local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 3. Python AI/ML Backend Requirements (`requirements.txt`)

If you are running backend LangGraph agents, evaluation harnesses, or FastAPI endpoints locally:
```bash
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

### 4. Environment Configuration (`.env.local`)

To enable live email delivery on the contact form, create a `.env.local` file in the root directory:
```env
# Resend API Key for contact form delivery
RESEND_API_KEY="re_your_resend_api_key_here"

# Recipient email address for contact form inquiries
CONTACT_RECIPIENT_EMAIL="your.email@example.com"
```
> [!NOTE]
> **Developer Fallback Mode**: If `RESEND_API_KEY` is not configured, `/api/contact` will automatically log the form submission to your terminal console and return success, allowing you to test the complete UI/UX workflow locally without errors.

---

## 📝 How to Customize (Swapping Placeholder Content)

All content is cleanly decoupled from layout logic and explicitly marked with `PLACEHOLDER CONTENT MARKER` comments:

- **Personal Bio & Hero Tagline**: Edit `/data/bio.ts`
- **Projects Grid & Metadata**: Edit `/data/projects.ts`
- **Categorized Skills Grid**: Edit `/data/skills.ts`
- **Case Study Deep-Dives**: Edit or add `.mdx` files inside `/content/case-studies/`
- **Architecture Diagrams**: Replace `.png` images in `/public/diagrams/`
- **Resume PDF**: Replace `/public/resume.pdf` with your real downloadable resume

---

## 🚀 Production Deployment (Vercel)

1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Add `RESEND_API_KEY` and `CONTACT_RECIPIENT_EMAIL` to your Vercel Environment Variables.
4. Deploy! Static generation, dynamic MDX routes, sitemaps (`/sitemap.xml`), and Open Graph metadata are automatically built and optimized.

---

## 📜 License

MIT License. Designed and engineered for high-performance agentic AI developer portfolios.
