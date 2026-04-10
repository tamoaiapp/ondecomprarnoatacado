import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArticles, getArticleBySlug } from "@/lib/mdx";
import CTABuscaFornecedor from "@/components/CTABuscaFornecedor";
import PartnerBanner from "@/components/PartnerBanner";
import ArticleCard from "@/components/ArticleCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  return getAllArticles().slice(0, 80).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    openGraph: { title: article.title, description: article.description, type: "article" },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getAllArticles()
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 3);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2.5rem 1.25rem" }}>
      {/* Breadcrumb */}
      <nav style={{ marginBottom: "1.5rem", fontSize: "0.875rem", color: "#94a3b8", display: "flex", gap: "0.4rem", alignItems: "center", flexWrap: "wrap" }}>
        <Link href="/" style={{ color: "#2563eb", textDecoration: "none" }}>Início</Link>
        <span>/</span>
        <Link href="/guias" style={{ color: "#2563eb", textDecoration: "none" }}>Guias</Link>
        <span>/</span>
        <span style={{ color: "#64748b" }}>{article.title}</span>
      </nav>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "3rem", alignItems: "start" }}>
        {/* Artigo principal */}
        <article>
          <div style={{ marginBottom: "1.5rem" }}>
            <span style={{ background: "#eff6ff", color: "#2563eb", fontSize: "0.8rem", fontWeight: 700, padding: "0.3rem 0.75rem", borderRadius: 20 }}>
              {article.category}
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, margin: "0 0 1rem", color: "#0f172a", lineHeight: 1.2 }}>
            {article.title}
          </h1>

          <p style={{ fontSize: "1.1rem", color: "#475569", margin: "0 0 2rem", lineHeight: 1.7 }}>
            {article.description}
          </p>

          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "2rem", paddingBottom: "1.5rem", borderBottom: "1px solid #e2e8f0", flexWrap: "wrap" }}>
            <span style={{ color: "#94a3b8", fontSize: "0.875rem" }}>⏱ {article.readTime} de leitura</span>
            <span style={{ color: "#94a3b8", fontSize: "0.875rem" }}>📚 {article.category}</span>
          </div>

          <div className="prose">
            <MDXRemote source={article.content} />
          </div>

          <CTABuscaFornecedor variant="banner" />

          {related.length > 0 && (
            <div style={{ marginTop: "3rem" }}>
              <h2 style={{ fontSize: "1.3rem", fontWeight: 800, margin: "0 0 1.25rem", color: "#0f172a" }}>Guias Relacionados</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem" }}>
                {related.map((a) => (
                  <ArticleCard key={a.slug} {...a} />
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Sidebar */}
        <aside style={{ position: "sticky", top: 80 }}>
          <PartnerBanner />

          <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: "1.25rem", marginTop: "1.25rem" }}>
            <div style={{ fontWeight: 700, color: "#0f172a", marginBottom: "0.75rem" }}>Mais Guias</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {getAllArticles().filter(a => a.slug !== slug).slice(0, 5).map((a) => (
                <Link key={a.slug} href={`/guias/${a.slug}`} style={{ color: "#2563eb", textDecoration: "none", fontSize: "0.9rem", lineHeight: 1.4 }}>
                  → {a.title}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <style>{`
        @media (max-width: 768px) {
          article + aside { display: none; }
          div[style*="grid-template-columns: 1fr 280px"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
