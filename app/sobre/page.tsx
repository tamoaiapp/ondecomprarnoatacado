import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre",
  description: "O OndeComprarNoAtacado.com é o portal de referência para empreendedores que querem comprar no atacado e montar seu negócio de revenda.",
};

export default function SobrePage() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "3rem 1.25rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 900, margin: "0 0 1.5rem", color: "#0f172a" }}>Sobre o Portal</h1>

      <div className="prose">
        <p>
          O <strong>OndeComprarNoAtacado.com</strong> é um portal de conteúdo educativo para empreendedores, MEIs e revendedores que querem comprar produtos no atacado com segurança e lucratividade.
        </p>

        <h2>Nossa missão</h2>
        <p>
          Democratizar o acesso a informações sobre o mercado atacadista brasileiro. Muita gente quer montar um negócio de revenda mas não sabe por onde começar — onde comprar, como negociar, como precificar. É exatamente isso que resolvemos aqui.
        </p>

        <h2>O que você encontra aqui</h2>
        <ul>
          <li>Guias práticos sobre onde comprar em cada segmento</li>
          <li>Dicas de como abrir MEI e negócio de revenda</li>
          <li>Como encontrar e avaliar fornecedores confiáveis</li>
          <li>Comparativos entre tipos de atacado e distribuidoras</li>
          <li>Dicas de precificação e margem de lucro</li>
        </ul>

        <h2>BuscaFornecedor.app</h2>
        <p>
          Para encontrar atacadistas verificados por segmento, recomendamos o <a href="https://buscafornecedor.app" target="_blank" rel="noopener noreferrer">BuscaFornecedor.app</a> — catálogo com milhares de fornecedores organizados por categoria.
        </p>

        <h2>Anuncie no portal</h2>
        <p>
          Tem uma empresa atacadista ou produto para revendedores? <Link href="/parceiros">Conheça as opções de parceria →</Link>
        </p>
      </div>
    </div>
  );
}
