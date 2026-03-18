import InternalNavbar from '@/components/InternalNavbar';
import PageTitle from '@/components/PageTitle';
import Footer from '@/components/Footer';

export default function CondicoesGeraisPage() {
  return (
    <>
      <InternalNavbar />
      <main style={{ background: 'var(--pink-pale)', paddingBottom: '100px' }}>
        <PageTitle
          title="Condições Gerais"
          subtitle="Condições de utilização do site e informações legais."
        />

        <div
          className="container"
          style={{
            maxWidth: '840px',
            background: '#fff',
            padding: '40px',
            borderRadius: '24px',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <h2 style={{ marginBottom: '20px' }}>1. Âmbito</h2>
          <p style={{ marginBottom: '20px' }}>
            As presentes Condições Gerais regulam a utilização do website da <strong>Princess Party</strong>,
            incluindo a navegação, o acesso a conteúdos informativos e a submissão de pedidos de contacto
            através de formulários.
          </p>

          <h2 style={{ marginBottom: '20px' }}>2. Utilização do site</h2>
          <p style={{ marginBottom: '20px' }}>
            O utilizador compromete-se a utilizar o site de forma lícita, respeitando a legislação aplicável,
            os direitos de terceiros e as presentes Condições Gerais. É proibida a utilização do site para
            fins fraudulentos, ilegais ou que possam comprometer a sua segurança.
          </p>

          <h2 style={{ marginBottom: '20px' }}>3. Limitação de responsabilidade</h2>
          <p style={{ marginBottom: '20px' }}>
            Procuramos manter o site atualizado e disponível. No entanto, não garantimos que o mesmo estará
            permanentemente acessível, podendo ocorrer interrupções por motivos técnicos ou manutenção.
            A responsabilidade da Princess Party limita-se ao permitido pela lei aplicável.
          </p>

          <h2 style={{ marginBottom: '20px' }}>4. Dados pessoais e cookies</h2>
          <p style={{ marginBottom: '20px' }}>
            Sempre que sejam recolhidos dados pessoais, a sua utilização encontra-se descrita na nossa{' '}
            <strong>Política de Privacidade</strong>. A configuração e consentimento de cookies é gerida na{' '}
            <strong>Política de Cookies</strong>.
          </p>

          <h2 style={{ marginBottom: '20px' }}>5. Livro de Reclamações</h2>
          <p style={{ marginBottom: '20px' }}>
            Em caso de reclamação relacionada com os serviços, poderá fazê-lo de duas formas:
          </p>
          <p style={{ marginBottom: '20px' }}>
            • <strong>Livro de Reclamações físico</strong>: disponível no nosso espaço. Para solicitar ou esclarecimentos, contacte-nos através do e-mail{' '}
            <strong>info@princessparty.pt</strong>.
          </p>
          <p style={{ marginBottom: '20px' }}>
            • <strong>Reclamação online</strong>: pode submeter a sua reclamação em formato eletrónico através do sítio da ASAE em{' '}
            <a href="https://www.asae.gov.pt/submeter-reclamacao.aspx" target="_blank" rel="noopener noreferrer">www.asae.gov.pt/submeter-reclamacao.aspx</a>.
          </p>

          <h2 style={{ marginBottom: '20px' }}>6. Contactos</h2>
          <p style={{ marginBottom: '20px' }}>
            Para dúvidas sobre as presentes Condições Gerais, poderá contactar-nos por e-mail em{' '}
            <strong>info@princessparty.pt</strong>. A nossa morada é a{' '}
            <strong>Av. Principal 9 A e B, Casal do Marco, 2840-169 Arrentela, Portugal</strong>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

