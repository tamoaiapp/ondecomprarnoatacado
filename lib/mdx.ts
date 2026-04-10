import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/guias");

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime?: string;
  keywords?: string;
}

export interface Article extends ArticleMeta {
  content: string;
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        category: data.category ?? "Guia",
        readTime: data.readTime ?? "5 min",
        keywords: data.keywords ?? "",
      } as ArticleMeta;
    })
    .sort((a, b) => a.title.localeCompare(b.title, "pt-BR"));
}

export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const fallback = path.join(CONTENT_DIR, `${slug}.md`);
  const target = fs.existsSync(filePath) ? filePath : fs.existsSync(fallback) ? fallback : null;
  if (!target) return null;

  const raw = fs.readFileSync(target, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    category: data.category ?? "Guia",
    readTime: data.readTime ?? "5 min",
    keywords: data.keywords ?? "",
    content,
  };
}

export function getArticlesByCategory(category: string): ArticleMeta[] {
  return getAllArticles().filter((a) => a.category.toLowerCase() === category.toLowerCase());
}
