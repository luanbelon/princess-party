import Navbar from '@/components/Navbar';
import HeroCompact from '@/components/HeroCompact';
import PackagesCompact from '@/components/PackagesCompact';
import GalleryCompact from '@/components/GalleryCompact';
import ContactCompact from '@/components/ContactCompact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroCompact />
        <PackagesCompact />
        <GalleryCompact />
        <ContactCompact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
