"use client";
interface Partner {
  name: string;
  description: string;
  url: string;
  tag?: string;
}

const partners: Partner[] = [
  {
    name: "BuscaFornecedor.app",
    description: "Catálogo de atacadistas verificados por segmento",
    url: "https://buscafornecedor.app",
    tag: "Parceiro Oficial",
  },
];

export default function PartnerBanner() {
  if (partners.length === 0) return null;

  return (
    <aside>
      <div style={{ fontWeight: 700, color: "#0f172a", marginBottom: "0.75rem", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
        Parceiros
      </div>
      {partners.map((p) => (
        <a
          key={p.name}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            background: "#f8fafc",
            border: "1px solid #e2e8f0",
            borderRadius: 10,
            padding: "1rem",
            textDecoration: "none",
            marginBottom: "0.75rem",
            transition: "border-color 0.15s",
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = "#93c5fd")}
          onMouseLeave={e => (e.currentTarget.style.borderColor = "#e2e8f0")}
        >
          {p.tag && (
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#2563eb", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {p.tag}
            </span>
          )}
          <div style={{ fontWeight: 700, color: "#0f172a", marginTop: 4, marginBottom: 4 }}>{p.name}</div>
          <div style={{ color: "#475569", fontSize: "0.85rem" }}>{p.description}</div>
        </a>
      ))}
    </aside>
  );
}
