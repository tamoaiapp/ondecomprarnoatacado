import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import CTABuscaFornecedor from "@/components/CTABuscaFornecedor";
import NewsletterForm from "@/components/NewsletterForm";
import { getAllArticles } from "@/lib/mdx";

const categorias = [
  { slug: "roupas", label: "👕 Roupas & Moda", desc: "Atacadistas de confecção, moda feminina, masculina e infantil" },
  { slug: "cosmeticos", label: "💄 Cosméticos & Beleza", desc: "Perfumes, maquiagem, cabelo e skincare no atacado" },
  { slug: "alimentos", label: "🍱 Alimentos & Bebidas", desc: "Distribuidoras, mercadinhos e importados" },
  { slug: "eletronicos", label: "📱 Eletrônicos", desc: "Celulares, acessórios e eletroportáteis no atacado" },
  { slug: "calcados", label: "👟 Calçados", desc: "Fábricas e atacados de calçados por segmento" },
  { slug: "bijuterias", label: "💍 Bijuterias & Acessórios", desc: "Semijoias, bijuterias e acessórios no atacado" },
];

export default function Home() {
  const articles = getAllArticles().slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)", color: "#fff", padding: "5rem 1.25rem 4rem" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "0.9rem", fontWeight: 600, background: "rgba(255,255,255,0.15)", display: "inline-block", padding: "0.3rem 0.9rem", borderRadius: 20, marginBottom: "1rem" }}>
            Portal Gratuito para Empreendedores
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, margin: "0 0 1.25rem", lineHeight: 1.15 }}>
            Onde Comprar no Atacado e Montar seu Negócio
          </h1>
          <p style={{ fontSize: "1.15rem", opacity: 0.9, margin: "0 0 2rem", lineHeight: 1.6 }}>
            Guias práticos, fornecedores verificados e tudo que você precisa para comprar barato e revender com lucro.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/guias" style={{ background: "#fff", color: "#2563eb", padding: "0.85rem 1.75rem", borderRadius: 10, textDecoration: "none", fontWeight: 800, fontSize: "1rem" }}>
              Ver Guias Práticos
            </Link>
            <a href="https://buscafornecedor.app" target="_blank" rel="noopener noreferrer" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "0.85rem 1.75rem", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: "1rem", border: "1px solid rgba(255,255,255,0.3)" }}>
              Encontrar Fornecedor
            </a>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.25rem" }}>
        {/* Categorias */}
        <section style={{ padding: "4rem 0 2rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, margin: "0 0 0.5rem", color: "#0f172a" }}>Comprar por Segmento</h2>
          <p style={{ color: "#475569", margin: "0 0 2rem" }}>Escolha o segmento do seu negócio e veja onde encontrar fornecedores</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
            {categorias.map((c) => (
              <Link key={c.slug} href={`/onde-comprar/${c.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: "1.25rem", cursor: "pointer" }}>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: 4 }}>{c.label}</div>
                  <div style={{ color: "#475569", fontSize: "0.9rem" }}>{c.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Últimos guias */}
        {articles.length > 0 && (
          <section style={{ padding: "2rem 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.75rem" }}>
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 800, margin: 0, color: "#0f172a" }}>Guias Práticos</h2>
                <p style={{ color: "#475569", margin: "0.25rem 0 0" }}>Tudo que você precisa saber para comprar no atacado com segurança</p>
              </div>
              <Link href="/guias" style={{ color: "#2563eb", fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" }}>Ver todos →</Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
              {articles.map((a) => (
                <ArticleCard key={a.slug} {...a} />
              ))}
            </div>
          </section>
        )}

        {/* CTA BuscaFornecedor */}
        <CTABuscaFornecedor />

        {/* Newsletter */}
        <section style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 16, padding: "3rem 2rem", textAlign: "center", margin: "2rem 0 4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: "0 0 0.5rem", color: "#0f172a" }}>Receba dicas de fornecedores por e-mail</h2>
          <p style={{ color: "#475569", margin: "0 0 1.5rem" }}>Novos guias e oportunidades de atacado toda semana — grátis</p>
          <NewsletterForm />
        </section>
      </div>
    </>
  );
}
