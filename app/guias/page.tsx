import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import { getAllArticles } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Guias de Atacado",
  description: "Guias práticos sobre onde comprar no atacado, como abrir negócio de revenda, encontrar fornecedores confiáveis e muito mais.",
};

const categorias = ["Onde Comprar", "Como Abrir Negócio", "Dicas de Revenda", "Fornecedores", "Comparativos"];

export default function GuiasPage() {
  const articles = getAllArticles();

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 1.25rem" }}>
      <div style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 900, margin: "0 0 0.5rem", color: "#0f172a" }}>Guias Práticos de Atacado</h1>
        <p style={{ color: "#475569", fontSize: "1.05rem", margin: 0 }}>
          Conteúdo educativo para empreendedores, MEIs e revendedores que querem comprar barato e lucrar mais.
        </p>
      </div>

      {/* Filtros por categoria */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
        <span style={{ background: "#2563eb", color: "#fff", padding: "0.35rem 0.85rem", borderRadius: 20, fontSize: "0.85rem", fontWeight: 600 }}>
          Todos ({articles.length})
        </span>
        {categorias.map((cat) => (
          <span key={cat} style={{ background: "#f1f5f9", color: "#475569", padding: "0.35rem 0.85rem", borderRadius: 20, fontSize: "0.85rem", fontWeight: 500, cursor: "pointer" }}>
            {cat}
          </span>
        ))}
      </div>

      {articles.length === 0 ? (
        <div style={{ textAlign: "center", padding: "4rem 0", color: "#94a3b8" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📄</div>
          <div style={{ fontSize: "1.1rem" }}>Artigos em breve...</div>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {articles.map((a) => (
            <ArticleCard key={a.slug} {...a} />
          ))}
        </div>
      )}
    </div>
  );
}
