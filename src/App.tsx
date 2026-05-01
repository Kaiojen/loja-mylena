import { CatalogSection } from './components/CatalogSection';
import { CategorySection } from './components/CategorySection';
import { CommercialPolicySection } from './components/CommercialPolicySection';
import { CustomWorkSection } from './components/CustomWorkSection';
import { DecorativeBackground } from './components/DecorativeBackground';
import { FaqSection } from './components/FaqSection';
import { FeaturedProduct } from './components/FeaturedProduct';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { OfferSection } from './components/OfferSection';
import { ProcessSection } from './components/ProcessSection';
import { ServiceNotice } from './components/ServiceNotice';
import { TestimonialsSection } from './components/TestimonialsSection';

export default function App() {
  return (
    <>
      <DecorativeBackground />
      <div className="site-shell">
        <a className="skip-link" href="#inicio">
          Ir para o conteúdo
        </a>
        <Header />
        <main>
          <HeroSection />
          <ServiceNotice />
          <CategorySection />
          <OfferSection />
          <CatalogSection />
          <FeaturedProduct />
          <CustomWorkSection />
          <ProcessSection />
          <TestimonialsSection />
          <CommercialPolicySection />
          <FaqSection />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </>
  );
}
