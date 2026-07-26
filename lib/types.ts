export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[]; // e.g. ["LangChain", "LangGraph", "Multi-agent"]
  repoUrl?: string;
  demoUrl?: string;
  hasCaseStudy: boolean;
}

export interface SkillItem {
  name: string;
  description?: string;
  highlighted?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface BioData {
  name: string;
  role: string;
  tagline: string;
  intro: string;
  aboutParagraphs: string[];
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
}

export type Bio = BioData;

export interface CaseStudyMetadata {
  title: string;
  description: string;
  date: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  architectureImage?: string;
}
