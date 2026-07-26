# Pratham Salotra — AI Systems & Full-Stack Engineer Portfolio

A technically credible, resume-style developer portfolio website designed to showcase **Retrieval-Augmented Generation (RAG) pipelines, Real-Time Computer Vision systems, Full-Stack Distributed Architectures, and LangGraph Multi-Agent Orchestration**.

Built with **Next.js 15+ App Router**, **TypeScript (Strict Mode)**, **Tailwind CSS**, **shadcn/ui**, **Framer Motion**, and **MDX Case Studies**. Designed around modern cyber-teal glassmorphism aesthetics and dark-mode-first engineering principles.

---

## 📌 Project Description & Context

As AI systems move from zero-shot demos to long-horizon production agents, engineering credibility depends on understanding **where systems break and how they recover**. 

This portfolio showcases four core production architectures engineered by Pratham Salotra:
1. **YouTube Video RAG Assistant**: 500-token semantic window chunking with Llama-3.1-8B-Instruct and bge-small-en-v1.5 embeddings for video Q&A.
2. **AI-Powered Real-Time Proctoring System**: 30 FPS webcam computer vision (YOLOv8 NANO & MediaPipe Face Mesh) with Flask-to-FastAPI async routing under 100ms.
3. **Sandesh Suvidha — Real-Time 1-to-1 Messenger**: Socket.io real-time chat with JWT/Bcrypt auth and a MongoDB schema storing 7,000+ chats (35% faster retrieval).
4. **LangGraph Multi-Agent Orchestration System**: Hierarchical supervisor-worker agent topology for complex codebase synthesis and audit.

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

## 📧 Email Delivery & Local Configuration (`.env.local`)

The contact form uses **Resend** (`/app/api/contact/route.ts`).
- **In Development Mode (without API Key)**: The contact form works in simulation mode and prints incoming submissions directly to your terminal console so you can test the UI without sending emails.
- **To Enable Real Email Delivery**:
  1. Sign up for a free Resend account at [https://resend.com](https://resend.com).
  2. Create an API Key (starts with `re_...`).
  3. Open the `.env.local` file in your project root folder (`c:\Kaam\worthwatching\portfolio\.env.local`) and paste your key:
     ```env
     RESEND_API_KEY=re_your_api_key_here
     CONTACT_RECIPIENT_EMAIL=prathamsalotra@proton.me
     ```
  4. Restart your development server (`npm run dev`) and test the contact form!

---

## 🚀 Production Deployment (Vercel)

1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Add `RESEND_API_KEY` and `CONTACT_RECIPIENT_EMAIL` to your Vercel Environment Variables.
4. Deploy! Static generation, dynamic MDX routes, sitemaps (`/sitemap.xml`), and Open Graph metadata are automatically built and optimized.

---

## 📜 License

MIT License. Designed and engineered for high-performance agentic AI developer portfolios.
