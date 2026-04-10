import type { Metadata } from "next";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import CTABuscaFornecedor from "@/components/CTABuscaFornecedor";
import { getAllArticles } from "@/lib/mdx";

interface Props {
  params: Promise<{ categoria: string }>;
}

const categoriaInfo: Record<string, { label: string; desc: string; emoji: string }> = {
  roupas: { label: "Roupas & Moda", emoji: "👕", desc: "Atacadistas de confecção, moda feminina, masculina, infantil e plus size no Brasil." },
  cosmeticos: { label: "Cosméticos & Beleza", emoji: "💄", desc: "Perfumes, maquiagem, skincare, cabelos e produtos de beleza no atacado." },
  alimentos: { label: "Alimentos & Bebidas", emoji: "🍱", desc: "Distribuidoras de alimentos, bebidas, snacks e produtos de mercearia no atacado." },
  eletronicos: { label: "Eletrônicos", emoji: "📱", desc: "Celulares, acessórios, eletroportáteis e gadgets no atacado." },
  calcados: { label: "Calçados", emoji: "👟", desc: "Fábricas e atacados de tênis, sapatos, sandálias e botas." },
  bijuterias: { label: "Bijuterias & Acessórios", emoji: "💍", desc: "Semijoias, bijuterias folheadas, acessórios e bolsas no atacado." },
};

export async function generateStaticParams() {
  return Object.keys(categoriaInfo).map((categoria) => ({ categoria }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params;
  const info = categoriaInfo[categoria];
  if (!info) return {};
  return {
    title: `Onde Comprar ${info.label} no Atacado`,
    description: info.desc,
  };
}

export default async function CategoriaPage({ params }: Props) {
  const { categoria } = await params;
  const info = categoriaInfo[categoria] ?? { label: categoria, emoji: "🏷️", desc: "Fornecedores e guias para este segmento." };
  const articles = getAllArticles();

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2.5rem 1.25rem" }}>
      <nav style={{ marginBottom: "1.5rem", fontSize: "0.875rem", color: "#94a3b8", display: "flex", gap: "0.4rem" }}>
        <Link href="/" style={{ color: "#2563eb", textDecoration: "none" }}>Início</Link>
        <span>/</span>
        <span>Onde Comprar</span>
        <span>/</span>
        <span style={{ color: "#64748b" }}>{info.label}</span>
      </nav>

      <div style={{ marginBottom: "3rem" }}>
        <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>{info.emoji}</div>
        <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 900, margin: "0 0 0.75rem", color: "#0f172a" }}>
          Onde Comprar {info.label} no Atacado
        </h1>
        <p style={{ color: "#475569", fontSize: "1.05rem", margin: 0, maxWidth: 650 }}>{info.desc}</p>
      </div>

      <CTABuscaFornecedor variant="inline" />

      <div style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, margin: "0 0 1.25rem", color: "#0f172a" }}>
          Guias relacionados
        </h2>
        {articles.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {articles.slice(0, 6).map((a) => (
              <ArticleCard key={a.slug} {...a} />
            ))}
          </div>
        ) : (
          <p style={{ color: "#94a3b8" }}>Guias em breve para este segmento.</p>
        )}
      </div>

      <div style={{ marginTop: "3rem", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 16, padding: "2rem" }}>
        <h2 style={{ fontSize: "1.3rem", fontWeight: 800, margin: "0 0 0.75rem", color: "#0f172a" }}>
          Outros segmentos
        </h2>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {Object.entries(categoriaInfo).filter(([slug]) => slug !== categoria).map(([slug, cat]) => (
            <Link key={slug} href={`/onde-comprar/${slug}`} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 8, padding: "0.5rem 0.9rem", textDecoration: "none", color: "#0f172a", fontSize: "0.9rem", fontWeight: 500 }}>
              {cat.emoji} {cat.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
