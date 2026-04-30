import { useCallback } from 'react';

import { useScrollSpy }        from '../hooks/useScrollSpy';
import { Navbar }              from './NavbarSection';
import { Hero }                from './HeroSection';
import { AboutSection }        from './AboutSection';
import { TestimonialsSection } from './TestimonialsSection';
import { PricingSection }      from './PricingSection';

// ─── Constants ────────────────────────────────────────────────────────────────

const SECTION_IDS = ['principal', 'sobre-nosotros', 'testimonios', 'planes'];

// ─── Component ────────────────────────────────────────────────────────────────

export default function LandingPage() {

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#f4f9f6] min-h-screen">
      <Navbar
        activeSection={useScrollSpy(SECTION_IDS)}
        scrollToTop={scrollToTop}
        scrollTo={scrollTo}
      />
      <Hero scrollTo={scrollTo} />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </div>
  );
}