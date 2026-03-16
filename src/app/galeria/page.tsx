import InternalNavbar from '@/components/InternalNavbar';
import PageTitle from '@/components/PageTitle';
import GalleryMasonry from '@/components/GalleryMasonry';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function GaleriaPage() {
  return (
    <>
      <InternalNavbar />
      <main style={{ background: 'var(--pink-pale)' }}>
        <PageTitle title="Nossa Galeria" subtitle="Momentos mágicos e festas inesquecíveis realizadas com a Princess Party" />
        <GalleryMasonry />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
