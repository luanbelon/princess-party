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
            Recolhemos apenas os dados estritamente necessários para a prestação dos nossos serviços de organização de eventos, 
            tais como nome, e-mail, telefone e informações relativas às festas (datas e preferências).
          </p>

          <h2 style={{ marginBottom: '20px' }}>3. Finalidade do Tratamento</h2>
          <p style={{ marginBottom: '20px' }}>
            Os dados fornecidos são utilizados exclusivamente para responder a pedidos de orçamento, marcação de festas e comunicação 
            direta relacionada com os nossos serviços. Não partilhamos os seus dados com terceiros sem o seu consentimento explícito.
          </p>

          <h2 style={{ marginBottom: '20px' }}>4. Os Seus Direitos</h2>
          <p style={{ marginBottom: '20px' }}>
            Ao abrigo do Regulamento Geral sobre a Proteção de Dados (RGPD), tem o direito de aceder, retificar, apagar, limitar 
            ou opor-se ao tratamento dos seus dados. Para o efeito, basta contactar-nos através do e-mail geral@princessparty.pt.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
