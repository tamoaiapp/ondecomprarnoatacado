import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "6rem 1.25rem", textAlign: "center" }}>
      <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>📦</div>
      <h1 style={{ fontSize: "2rem", fontWeight: 900, margin: "0 0 1rem", color: "#0f172a" }}>
        Página não encontrada
      </h1>
      <p style={{ color: "#475569", marginBottom: "2rem" }}>
        Essa página não existe ou foi movida. Explore nossos guias ou volte para a home.
      </p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <Link href="/" style={{ background: "#2563eb", color: "#fff", padding: "0.75rem 1.5rem", borderRadius: 8, textDecoration: "none", fontWeight: 700 }}>
          Ir para Home
        </Link>
        <Link href="/guias" style={{ background: "#f1f5f9", color: "#0f172a", padding: "0.75rem 1.5rem", borderRadius: 8, textDecoration: "none", fontWeight: 700 }}>
          Ver Guias
        </Link>
      </div>
    </div>
  );
}
