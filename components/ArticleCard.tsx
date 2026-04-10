"use client";
import Link from "next/link";

interface ArticleCardProps {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime?: string;
}

export default function ArticleCard({ slug, title, description, category, readTime = "5 min" }: ArticleCardProps) {
  return (
    <Link href={`/guias/${slug}`} style={{ textDecoration: "none" }}>
      <div style={{
        background: "#fff",
        border: "1px solid #e2e8f0",
        borderRadius: 12,
        padding: "1.5rem",
        transition: "box-shadow 0.2s, border-color 0.2s",
        cursor: "pointer",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(37,99,235,0.12)";
          (e.currentTarget as HTMLDivElement).style.borderColor = "#bfdbfe";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
          (e.currentTarget as HTMLDivElement).style.borderColor = "#e2e8f0";
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{
            background: "#eff6ff",
            color: "#2563eb",
            fontSize: "0.75rem",
            fontWeight: 600,
            padding: "0.25rem 0.6rem",
            borderRadius: 20,
          }}>
            {category}
          </span>
          <span style={{ color: "#94a3b8", fontSize: "0.8rem" }}>{readTime} leitura</span>
        </div>
        <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: 700, color: "#0f172a", lineHeight: 1.4 }}>{title}</h3>
        <p style={{ margin: 0, color: "#475569", fontSize: "0.9rem", lineHeight: 1.6, flexGrow: 1 }}>{description}</p>
        <span style={{ color: "#2563eb", fontWeight: 600, fontSize: "0.9rem" }}>Ler guia →</span>
      </div>
    </Link>
  );
}
