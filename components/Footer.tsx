import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#0f172a", color: "#94a3b8", marginTop: "4rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 1.25rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", marginBottom: "2rem" }}>
          <div>
            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", marginBottom: "0.75rem" }}>
              <span style={{ color: "#3b82f6" }}>OndeComprar</span>NoAtacado
            </div>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
              Portal de referência em PT-BR sobre compras no atacado para empreendedores e revendedores.
            </p>
          </div>

          <div>
            <div style={{ fontWeight: 600, color: "#e2e8f0", marginBottom: "0.75rem" }}>Conteúdo</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Link href="/guias" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem" }}>Guias Práticos</Link>
              <Link href="/onde-comprar/roupas" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem" }}>Roupas no Atacado</Link>
              <Link href="/onde-comprar/cosmeticos" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem" }}>Cosméticos</Link>
              <Link href="/onde-comprar/alimentos" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem" }}>Alimentos</Link>
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 600, color: "#e2e8f0", marginBottom: "0.75rem" }}>Links Úteis</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <a href="https://buscafornecedor.app" target="_blank" rel="noopener noreferrer" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem" }}>BuscaFornecedor.app</a>
              <Link href="/parceiros" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem" }}>Seja um Parceiro</Link>
              <Link href="/sobre" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem" }}>Sobre</Link>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1e293b", paddingTop: "1.5rem", textAlign: "center", fontSize: "0.85rem" }}>
          © {new Date().getFullYear()} OndeComprarNoAtacado.com — Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
