"use client";

export default function NewsletterForm() {
  return (
    <form
      style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", maxWidth: 480, margin: "0 auto" }}
      onSubmit={e => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="seu@email.com"
        style={{ flex: 1, minWidth: 200, padding: "0.75rem 1rem", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: "1rem", outline: "none" }}
      />
      <button type="submit" style={{ background: "#2563eb", color: "#fff", padding: "0.75rem 1.5rem", border: "none", borderRadius: 8, fontWeight: 700, fontSize: "1rem", cursor: "pointer" }}>
        Quero receber
      </button>
    </form>
  );
}
