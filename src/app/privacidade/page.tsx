import InternalNavbar from '@/components/InternalNavbar';
import PageTitle from '@/components/PageTitle';
import Footer from '@/components/Footer';

export default function PrivacidadePage() {
  return (
    <>
      <InternalNavbar />
      <main style={{ background: 'var(--pink-pale)', paddingBottom: '100px' }}>
        <PageTitle 
          title="Política de Privacidade" 
          subtitle="O nosso compromisso com a proteção dos seus dados pessoais." 
        />
        
        <div className="container" style={{ maxWidth: '840px', background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: 'var(--shadow-sm)' }}>
          <h2 style={{ marginBottom: '20px' }}>1. Introdução</h2>
          <p style={{ marginBottom: '20px' }}>
            A Princess Party compromete-se a proteger a privacidade e os dados pessoais de todos os nossos clientes e utilizadores do website.
            Esta Política de Privacidade explica como recolhemos, usamos e protegemos os seus dados.
          </p>

          <h2 style={{ marginBottom: '20px' }}>2. Dados Recolhidos</h2>
          <p style={{ marginBottom: '20px' }}>
            Recolhemos apenas os dados estritamente necessários para a prestação dos nossos serviços e para a comunicação consigo.
            Em particular, podemos recolher:
          </p>
          <p style={{ marginBottom: '20px' }}>
            1) <strong>Dados do formulário</strong>: nome, e-mail, telefone, data desejada e mensagem (quando nos envia um pedido de contacto).
            <br />
            2) <strong>Dados associados ao consentimento</strong>: IP e user-agent, para registo da sua aceitação ou recusa ao banner de cookies.
            <br />
            3) <strong>Dados técnicos</strong>: endereço IP e informação do dispositivo/navegador, quando aplicável.
          </p>

          <h2 style={{ marginBottom: '20px' }}>3. Finalidade do Tratamento</h2>
          <p style={{ marginBottom: '20px' }}>
            Os dados são utilizados para:
            <br />
            • responder e gerir pedidos de orçamento/questões;
            <br />
            • contactar si para apresentar opções e propostas;
            <br />
            • gerir marcações e comunicações relacionadas com os nossos serviços;
            <br />
            • cumprir obrigações legais e para efeitos de prova do consentimento.
          </p>

          <h2 style={{ marginBottom: '20px' }}>4. Tempo de Conservação</h2>
          <p style={{ marginBottom: '20px' }}>
            Conservamos os seus dados apenas pelo tempo necessário para cumprir as finalidades descritas nesta política.
            Em concreto:
            <br />
            • <strong>Dados do formulário</strong>: pelo período necessário para responder ao pedido e, quando aplicável, pelo prazo exigido por obrigações legais (podendo estender-se até 5 anos).
            <br />
            • <strong>Consentimento de cookies</strong>: o consentimento é válido por 90 dias; o registo pode ser conservado pelo tempo necessário para efeitos de prova.
          </p>

          <h2 style={{ marginBottom: '20px' }}>5. Responsável pelo Tratamento</h2>
          <p style={{ marginBottom: '20px' }}>
            O responsável pelo tratamento dos dados é a <strong>Princess Party</strong>.
            Para exercer os seus direitos ou solicitar informações, pode contactar-nos através do e-mail{' '}
            <strong>info@princessparty.pt</strong> ou pelo seguinte endereço:
            <br />
            <strong>Av. Principal 9 A e B, Casal do Marco, 2840-169 Arrentela, Portugal</strong>.
          </p>

          <h2 style={{ marginBottom: '20px' }}>6. Os Seus Direitos (RGPD)</h2>
          <p style={{ marginBottom: '20px' }}>
            Ao abrigo do Regulamento Geral sobre a Proteção de Dados (RGPD), tem o direito de aceder, retificar, apagar, limitar
            ou opor-se ao tratamento dos seus dados. Para o efeito, basta contactar-nos através do e-mail{' '}
            <strong>info@princessparty.pt</strong>.
          </p>

          <h2 style={{ marginBottom: '20px' }}>7. Livro de Reclamações</h2>
          <p style={{ marginBottom: '20px' }}>
            Caso pretenda apresentar uma reclamação relacionada com os nossos serviços ou com a forma como o atendimento decorre,
            poderá fazê-lo de duas formas:
          </p>
          <p style={{ marginBottom: '20px' }}>
            • <strong>Livro de Reclamações físico</strong>: encontra-se disponível no nosso espaço. Pode solicitá-lo no local ou através do e-mail{' '}
            <strong>info@princessparty.pt</strong>.
          </p>
          <p style={{ marginBottom: '20px' }}>
            • <strong>Reclamação online</strong>: pode também submeter a sua reclamação em formato eletrónico através do sítio da Autoridade de Segurança Alimentar e Económica (ASAE), em{' '}
            <a href="https://www.asae.gov.pt/submeter-reclamacao.aspx" target="_blank" rel="noopener noreferrer">www.asae.gov.pt/submeter-reclamacao.aspx</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
