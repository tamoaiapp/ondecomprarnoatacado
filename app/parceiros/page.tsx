import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seja um Parceiro",
  description: "Anuncie seu negócio no maior portal de atacado do Brasil. Formatos de parceria para atacadistas, distribuidoras e plataformas de e-commerce.",
};

const formatos = [
  {
    titulo: "Banner Sidebar",
    posicao: "Todas as páginas de guias",
    preco: "R$300–500/mês",
    desc: "Seu banner fixo na sidebar do portal, visível em todos os artigos e guias.",
    destaque: false,
  },
  {
    titulo: "Card na Home",
    posicao: "Seção 'Parceiros em destaque'",
    preco: "R$500–800/mês",
    desc: "Seu logo e descrição na página inicial do portal — a mais acessada.",
    destaque: true,
  },
  {
    titulo: "Artigo Patrocinado",
    posicao: "Post marcado como Conteúdo Patrocinado",
    preco: "R$800–1.500/artigo",
    desc: "Conteúdo editorial sobre sua empresa, distribuído como guia no portal.",
    destaque: false,
  },
  {
    titulo: "Link em Guia",
    posicao: "Dentro do conteúdo de artigos relevantes",
    preco: "R$200–400/mês",
    desc: "Link orgânico da sua empresa dentro do guia mais relevante ao seu segmento.",
    destaque: false,
  },
];

export default function ParceirosPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "3rem 1.25rem" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#2563eb", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
          Parcerias Comerciais
        </div>
        <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, margin: "0 0 1rem", color: "#0f172a" }}>
          Alcance Milhares de Empreendedores
        </h1>
        <p style={{ color: "#475569", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto" }}>
          O OndeComprarNoAtacado.com conecta seu negócio com MEIs, revendedores e lojistas que estão ativamente buscando fornecedores.
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
        {[
          { num: "20+", label: "Artigos de alto ranqueamento" },
          { num: "100%", label: "Público qualificado (B2B)" },
          { num: "PT-BR", label: "Conteúdo em português" },
          { num: "SEO", label: "Tráfego orgânico contínuo" },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: "center", background: "#f8fafc", borderRadius: 12, padding: "1.5rem 1rem" }}>
            <div style={{ fontSize: "1.75rem", fontWeight: 900, color: "#2563eb", marginBottom: 4 }}>{s.num}</div>
            <div style={{ color: "#475569", fontSize: "0.875rem" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Formatos */}
      <h2 style={{ fontSize: "1.4rem", fontWeight: 800, margin: "0 0 1.5rem", color: "#0f172a" }}>Formatos de Parceria</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem", marginBottom: "3rem" }}>
        {formatos.map((f) => (
          <div key={f.titulo} style={{
            background: f.destaque ? "#eff6ff" : "#fff",
            border: f.destaque ? "2px solid #2563eb" : "1px solid #e2e8f0",
            borderRadius: 14,
            padding: "1.5rem",
            position: "relative",
          }}>
            {f.destaque && (
              <span style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#2563eb", color: "#fff", fontSize: "0.75rem", fontWeight: 700, padding: "0.25rem 0.75rem", borderRadius: 20, whiteSpace: "nowrap" }}>
                Mais Popular
              </span>
            )}
            <div style={{ fontWeight: 800, fontSize: "1.1rem", color: "#0f172a", marginBottom: "0.5rem" }}>{f.titulo}</div>
            <div style={{ fontSize: "0.8rem", color: "#2563eb", fontWeight: 600, marginBottom: "0.75rem" }}>{f.posicao}</div>
            <p style={{ color: "#475569", fontSize: "0.9rem", margin: "0 0 1rem", lineHeight: 1.6 }}>{f.desc}</p>
            <div style={{ fontWeight: 800, fontSize: "1.15rem", color: "#16a34a" }}>{f.preco}</div>
          </div>
        ))}
      </div>

      {/* CTA contato */}
      <div style={{ background: "linear-gradient(135deg, #1e3a8a, #2563eb)", borderRadius: 16, padding: "3rem 2rem", textAlign: "center", color: "#fff" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: "0 0 0.75rem" }}>Vamos conversar?</h2>
        <p style={{ opacity: 0.9, margin: "0 0 2rem", fontSize: "1.05rem" }}>
          Entre em contato pelo WhatsApp e apresentamos as opções disponíveis para o seu negócio.
        </p>
        <a
          href="https://wa.me/5511999999999?text=Olá!%20Quero%20anunciar%20no%20OndeComprarNoAtacado.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: "#25d366", color: "#fff", padding: "0.85rem 2rem", borderRadius: 10, textDecoration: "none", fontWeight: 800, fontSize: "1rem", display: "inline-block" }}
        >
          💬 Falar no WhatsApp
        </a>
      </div>
    </div>
  );
}
