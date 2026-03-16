import Navbar from '@/components/Navbar';
import HeroCompact from '@/components/HeroCompact';
import GalleryCompact from '@/components/GalleryCompact';
import ContactCompact from '@/components/ContactCompact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PackagesCompact from '@/components/PackagesCompact';
import Services from '@/components/Services';

export default function Compacta() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero compacto com info + slider */}
        <HeroCompact />
        
        {/* 2. Pacotes & preços resumidos */}
        <PackagesCompact /> 

        {/* 3. Galeria compacta */}
        <GalleryCompact />

        {/* 4. Contacto com formulário compacto */}
        <ContactCompact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

