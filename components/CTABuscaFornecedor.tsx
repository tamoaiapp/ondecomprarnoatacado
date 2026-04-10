export default function CTABuscaFornecedor({ variant = "banner" }: { variant?: "banner" | "inline" }) {
  if (variant === "inline") {
    return (
      <div style={{
        background: "#eff6ff",
        border: "1px solid #bfdbfe",
        borderRadius: 12,
        padding: "1.25rem 1.5rem",
        margin: "2rem 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <div>
          <div style={{ fontWeight: 700, color: "#1e40af", marginBottom: 4 }}>Encontre fornecedores verificados</div>
          <div style={{ color: "#3b82f6", fontSize: "0.9rem" }}>Catálogo com milhares de atacadistas por categoria</div>
        </div>
        <a
          href="https://buscafornecedor.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#2563eb",
            color: "#fff",
            padding: "0.6rem 1.25rem",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "0.95rem",
            whiteSpace: "nowrap",
          }}
        >
          Acessar BuscaFornecedor →
        </a>
      </div>
    );
  }

  return (
    <div style={{
      background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
      borderRadius: 16,
      padding: "3rem 2rem",
      textAlign: "center",
      color: "#fff",
      margin: "3rem 0",
    }}>
      <div style={{ fontSize: "0.9rem", fontWeight: 600, opacity: 0.8, marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
        Diretório de Fornecedores
      </div>
      <h2 style={{ margin: "0 0 1rem", fontSize: "1.75rem", fontWeight: 800 }}>
        Encontre fornecedores verificados para o seu negócio
      </h2>
      <p style={{ margin: "0 0 2rem", opacity: 0.85, fontSize: "1.05rem", maxWidth: 500, marginLeft: "auto", marginRight: "auto" }}>
        O BuscaFornecedor tem atacadistas de todos os segmentos — roupas, cosméticos, eletrônicos, alimentos e mais.
      </p>
      <a
        href="https://buscafornecedor.app"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "#fff",
          color: "#2563eb",
          padding: "0.85rem 2rem",
          borderRadius: 10,
          textDecoration: "none",
          fontWeight: 800,
          fontSize: "1rem",
          display: "inline-block",
        }}
      >
        Acessar BuscaFornecedor.app →
      </a>
    </div>
  );
}
