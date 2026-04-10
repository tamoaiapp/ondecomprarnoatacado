import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso — OndeComprarNoAtacado.com",
  description: "Termos de uso do portal OndeComprarNoAtacado.com.",
};

export default function TermosPage() {
  const ano = new Date().getFullYear();
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "3rem 1.25rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 900, margin: "0 0 0.5rem", color: "#0f172a" }}>Termos de Uso</h1>
      <p style={{ color: "#94a3b8", fontSize: "0.875rem", marginBottom: "2.5rem" }}>Última atualização: abril de {ano}</p>

      <div className="prose">
        <p>Ao acessar o <strong>OndeComprarNoAtacado.com</strong>, você concorda com estes termos de uso.</p>

        <h2>1. Conteúdo informativo</h2>
        <p>O conteúdo deste portal tem caráter informativo e educacional. As informações sobre fornecedores, preços e atacadistas são baseadas em pesquisas e podem estar desatualizadas. Sempre verifique diretamente com o fornecedor antes de fechar negócio.</p>

        <h2>2. Não somos uma loja</h2>
        <p>O OndeComprarNoAtacado.com não vende produtos, não intermedia negociações e não tem relação comercial com os fornecedores mencionados nos artigos, salvo parcerias identificadas explicitamente.</p>

        <h2>3. Propriedade intelectual</h2>
        <p>Todo o conteúdo editorial é de propriedade do portal. É proibida a reprodução sem autorização prévia. Links para nosso conteúdo são bem-vindos.</p>

        <h2>4. Parcerias e publicidade</h2>
        <p>O portal pode exibir anúncios (Google AdSense) e conteúdos patrocinados identificados como tal. O conteúdo editorial é independente.</p>

        <h2>5. Isenção de responsabilidade</h2>
        <p>Não nos responsabilizamos por negociações realizadas com fornecedores encontrados por meio deste portal. Verifique sempre o CNPJ e a reputação do fornecedor antes de comprar.</p>

        <h2>6. Modificações</h2>
        <p>Podemos modificar estes termos a qualquer momento. O uso continuado do portal implica aceite das alterações.</p>

        <h2>7. Foro</h2>
        <p>Estes termos são regidos pela legislação brasileira. Fica eleito o foro de São Paulo, SP.</p>
      </div>
    </div>
  );
}
