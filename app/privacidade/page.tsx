import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade — OndeComprarNoAtacado.com",
  description: "Política de privacidade do OndeComprarNoAtacado.com.",
};

export default function PrivacidadePage() {
  const ano = new Date().getFullYear();
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "3rem 1.25rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 900, margin: "0 0 0.5rem", color: "#0f172a" }}>Política de Privacidade</h1>
      <p style={{ color: "#94a3b8", fontSize: "0.875rem", marginBottom: "2.5rem" }}>Última atualização: abril de {ano}</p>

      <div className="prose">
        <p>O <strong>OndeComprarNoAtacado.com</strong> respeita a sua privacidade. Esta política descreve como coletamos e usamos informações quando você acessa nosso portal.</p>

        <h2>1. Informações que coletamos</h2>
        <p>Coletamos informações automaticamente ao navegar no site: endereço IP, tipo de navegador, páginas visitadas e tempo de acesso. Essas informações são usadas para análise de audiência e melhoria do conteúdo.</p>
        <p>Se você preencher formulários de contato, coletamos nome, e-mail e mensagem para responder à sua solicitação.</p>

        <h2>2. Como usamos suas informações</h2>
        <ul>
          <li>Analisar o desempenho do portal e melhorar o conteúdo</li>
          <li>Responder solicitações de parceria e contato</li>
          <li>Exibir anúncios relevantes por meio do Google AdSense</li>
        </ul>

        <h2>3. Google AdSense e cookies</h2>
        <p>Este site utiliza o Google AdSense para exibição de anúncios. O Google pode usar cookies para exibir anúncios personalizados. Você pode desativar em <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Configurações de anúncios do Google</a>.</p>

        <h2>4. Seus direitos (LGPD)</h2>
        <p>Nos termos da Lei Geral de Proteção de Dados (Lei 13.709/2018), você tem direito a acessar, corrigir ou excluir seus dados. Entre em contato pela nossa <a href="/contato">página de contato</a>.</p>

        <h2>5. Links externos</h2>
        <p>Nosso portal contém links para sites externos, como BuscaFornecedor.app e atacadistas. Não somos responsáveis pelas práticas de privacidade de terceiros.</p>

        <h2>6. Alterações</h2>
        <p>Esta política pode ser atualizada a qualquer momento. Alterações significativas serão comunicadas no portal.</p>

        <h2>7. Contato</h2>
        <p>Dúvidas? Acesse nossa <a href="/contato">página de contato</a>.</p>
      </div>
    </div>
  );
}
