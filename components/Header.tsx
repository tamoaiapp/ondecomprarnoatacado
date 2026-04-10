"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "#2563eb" }}>OndeComprar</span>
          <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0f172a" }}>NoAtacado</span>
        </Link>

        <nav style={{ display: "flex", gap: "1.5rem", alignItems: "center" }} className="desktop-nav">
          <Link href="/guias" style={{ color: "#475569", textDecoration: "none", fontWeight: 500, fontSize: "0.95rem" }}>Guias</Link>
          <Link href="/onde-comprar/roupas" style={{ color: "#475569", textDecoration: "none", fontWeight: 500, fontSize: "0.95rem" }}>Por Segmento</Link>
          <Link href="/parceiros" style={{ color: "#475569", textDecoration: "none", fontWeight: 500, fontSize: "0.95rem" }}>Parceiros</Link>
          <a
            href="https://buscafornecedor.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#2563eb",
              color: "#fff",
              padding: "0.45rem 1rem",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            Encontrar Fornecedor →
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", fontSize: "1.5rem", color: "#0f172a" }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div style={{ background: "#fff", borderTop: "1px solid #e2e8f0", padding: "1rem 1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <Link href="/guias" style={{ color: "#0f172a", textDecoration: "none", fontWeight: 500 }} onClick={() => setOpen(false)}>Guias</Link>
          <Link href="/onde-comprar/roupas" style={{ color: "#0f172a", textDecoration: "none", fontWeight: 500 }} onClick={() => setOpen(false)}>Por Segmento</Link>
          <Link href="/parceiros" style={{ color: "#0f172a", textDecoration: "none", fontWeight: 500 }} onClick={() => setOpen(false)}>Parceiros</Link>
          <a href="https://buscafornecedor.app" target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb", fontWeight: 600, textDecoration: "none" }}>Encontrar Fornecedor →</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
