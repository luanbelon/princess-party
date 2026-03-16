import InternalNavbar from '@/components/InternalNavbar';
import PageTitle from '@/components/PageTitle';
import Footer from '@/components/Footer';

export default function CookiesPage() {
  return (
    <>
      <InternalNavbar />
      <main style={{ background: 'var(--pink-pale)', paddingBottom: '100px' }}>
        <PageTitle 
          title="Política de Cookies" 
          subtitle="Aviso sobre a utilização de cookies no nosso website." 
        />
        
        <div className="container" style={{ maxWidth: '840px', background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: 'var(--shadow-sm)' }}>
          <h2 style={{ marginBottom: '20px' }}>O que são Cookies?</h2>
          <p style={{ marginBottom: '20px' }}>
            Cookies são pequenos ficheiros de texto guardados no seu computador ou dispositivo móvel quando visita o nosso website.
            Eles ajudam o site a lembrar as suas ações e preferências (como o consentimento do LGPD) durante um determinado período de tempo.
          </p>

          <h2 style={{ marginBottom: '20px' }}>Como utilizamos os Cookies?</h2>
          <p style={{ marginBottom: '20px' }}>
            Utilizamos cookies primariamente para guardar a sua preferência de consentimento de acesso aos dados (RGPD) para que não tenha
            de aceitar repetidamente o aviso. Os nossos cookies de consentimento têm uma validade de 90 dias.
          </p>

          <h2 style={{ marginBottom: '20px' }}>Gestão de Cookies</h2>
          <p style={{ marginBottom: '20px' }}>
            Pode controlar e/ou apagar cookies como desejar - detalhadamente em aboutcookies.org. 
            No entanto, alertamos que desativar os cookies pode impedir que alguns serviços web funcionem corretamente.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
