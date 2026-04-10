import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato — OndeComprarNoAtacado.com",
  description: "Entre em contato com o portal OndeComprarNoAtacado.com para parcerias, dúvidas ou sugestões.",
};

export default function ContatoPage() {
  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "3rem 1.25rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 900, margin: "0 0 0.5rem", color: "#0f172a" }}>Contato</h1>
      <p style={{ color: "#475569", marginBottom: "2.5rem", lineHeight: 1.7 }}>
        Dúvidas sobre onde comprar no atacado, sugestões de conteúdo, parcerias comerciais ou questões de privacidade?
      </p>

      <div style={{ display: "grid", gap: "1.25rem", marginBottom: "3rem" }}>
        {[
          { emoji: "🤝", titulo: "Parceria Comercial", desc: "Tem uma empresa atacadista ou plataforma para revendedores? Veja as opções de parceria.", link: "/parceiros", linkLabel: "Ver formatos de parceria →" },
          { emoji: "✍️", titulo: "Sugestão de conteúdo", desc: "Tem um tema sobre atacado ou revenda que deveria estar aqui? Nos conta." },
          { emoji: "🔒", titulo: "Privacidade e LGPD", desc: "Solicitações relacionadas a dados pessoais conforme a Lei 13.709/2018." },
          { emoji: "🐛", titulo: "Erro ou informação incorreta", desc: "Encontrou um dado desatualizado ou erro no site? Nos avise." },
        ].map((item) => (
          <div key={item.titulo} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "1.25rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <span style={{ fontSize: "1.5rem" }}>{item.emoji}</span>
            <div>
              <div style={{ fontWeight: 700, color: "#0f172a", marginBottom: "0.25rem" }}>{item.titulo}</div>
              <div style={{ color: "#475569", fontSize: "0.9rem", marginBottom: item.link ? "0.5rem" : 0 }}>{item.desc}</div>
              {item.link && <a href={item.link} style={{ color: "#2563eb", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none" }}>{item.linkLabel}</a>}
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: "linear-gradient(135deg, #1e3a8a, #2563eb)", borderRadius: 14, padding: "2rem", color: "#fff", textAlign: "center" }}>
        <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>💬</div>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 800, margin: "0 0 0.5rem" }}>Fale pelo WhatsApp</h2>
        <p style={{ opacity: 0.9, margin: "0 0 1.5rem", fontSize: "0.95rem" }}>
          Respondemos geralmente em menos de 1 hora nos dias úteis.
        </p>
        <a
          href="https://wa.me/5511967245795?text=Olá!%20Vim%20pelo%20OndeComprarNoAtacado.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: "#25d366", color: "#fff", padding: "0.75rem 1.75rem", borderRadius: 10, textDecoration: "none", fontWeight: 800, display: "inline-block" }}
        >
          Abrir WhatsApp →
        </a>
      </div>
    </div>
  );
}
