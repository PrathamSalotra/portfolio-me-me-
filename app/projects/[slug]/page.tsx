import * as React from "react";
import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Terminal,
  ChevronRight,
} from "lucide-react";
import { GitHubIcon } from "@/components/social-icons";
import { projects } from "@/data/projects";
import { mdxComponents } from "@/components/mdx-components";
import { Metadata } from "next";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const caseStudiesDir = path.join(process.cwd(), "content", "case-studies");
  if (!fs.existsSync(caseStudiesDir)) {
    return [];
  }
  const files = fs.readdirSync(caseStudiesDir);

  return files
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(/\.mdx?$/, ""),
    }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(
    process.cwd(),
    "content",
    "case-studies",
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    return {
      title: "Project Not Found",
    };
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  return {
    title: `${data.title || slug} — Case Study | Alex Mercer`,
    description:
      data.description ||
      "Technical deep-dive on autonomous AI agent architecture.",
    openGraph: {
      title: data.title || slug,
      description:
        data.description ||
        "Technical deep-dive on autonomous AI agent architecture.",
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const filePath = path.join(
    process.cwd(),
    "content",
    "case-studies",
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContent);
  const projectMeta = projects.find((p) => p.slug === slug);

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <article className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-8"
        >
          <Link
            href="/"
            className="hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <Terminal className="w-3.5 h-3.5 text-primary" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <Link
            href="/#projects"
            className="hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span className="text-foreground truncate max-w-[200px] sm:max-w-none">
            {frontmatter.title || slug}
          </span>
        </nav>

        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* Header Section */}
        <header className="border-b border-border pb-8 mb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground mb-4">
            {frontmatter.date && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary/80 text-foreground">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                <span>{frontmatter.date}</span>
              </span>
            )}
            <span className="px-2.5 py-1 rounded bg-primary/10 text-primary border border-primary/20">
              CASE STUDY
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            {frontmatter.title || slug}
          </h1>

          {frontmatter.description && (
            <p className="text-lg sm:text-xl text-muted-foreground mt-4 leading-relaxed max-w-3xl">
              {frontmatter.description}
            </p>
          )}

          {/* Tag Chips & External Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-border/60">
            <div className="flex flex-wrap gap-2">
              {(frontmatter.tags || projectMeta?.tags || []).map(
                (tag: string) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-secondary text-secondary-foreground border border-border"
                  >
                    #{tag}
                  </span>
                )
              )}
            </div>

            <div className="flex items-center gap-3">
              {(frontmatter.repoUrl || projectMeta?.repoUrl) && (
                <a
                  href={frontmatter.repoUrl || projectMeta?.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-card text-foreground border border-border hover:border-primary/50 hover:bg-secondary transition-all"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>View Code</span>
                </a>
              )}

              {(frontmatter.demoUrl || projectMeta?.demoUrl) && (
                <a
                  href={frontmatter.demoUrl || projectMeta?.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all cyber-glow-sm"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </header>

        {/* MDX Rendered Content */}
        <div className="prose dark:prose-invert max-w-none text-foreground">
          <MDXRemote source={content} components={mdxComponents} />
        </div>

        {/* Footer Navigation */}
        <footer className="mt-16 pt-8 border-t border-border flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All projects</span>
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            <span>Ask about this architecture</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </footer>
      </article>
    </div>
  );
}
