import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudiesDir = path.join(process.cwd(), "content", "case-studies");
  let caseStudySlugs: string[] = [];

  if (fs.existsSync(caseStudiesDir)) {
    caseStudySlugs = fs
      .readdirSync(caseStudiesDir)
      .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
      .map((file) => file.replace(/\.mdx?$/, ""));
  }

  const projectUrls = caseStudySlugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...projectUrls,
  ];
}
