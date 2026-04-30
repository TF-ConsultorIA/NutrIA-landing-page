import { useState } from 'react';
import logo from '../assets/logo.svg';

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavbarProps {
  activeSection: string;
  scrollToTop: () => void;
  scrollTo: (id: string) => void;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'Principal',      sectionId: 'principal' },
  { label: 'Sobre Nosotros', sectionId: 'sobre-nosotros' },
  { label: 'Testimonios',    sectionId: 'testimonios' },
  { label: 'Planes',         sectionId: 'planes' },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export function Navbar({
  activeSection,
  scrollToTop,
  scrollTo,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    if (sectionId === 'principal') scrollToTop();
    else scrollTo(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#2d8b57] sticky top-0 z-50 shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]">
      <div className="max-w-360 mx-auto px-6 lg:px-10 flex items-center justify-between h-18 md:h-22">

        {/* ── Logo ── */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity shrink-0"
        >
          <div className="relative size-13 md:size-16 shrink-0">
            <div
              className="bg-[rgba(255,255,255,0.18)] rounded-full size-full flex items-center justify-center overflow-hidden"
              style={{ border: '1.6px solid rgba(255,255,255,0.55)', boxShadow: '0 0 0 4px rgba(255,255,255,0.1)' }}
            >
              <img
                src={logo}
                alt="NutrIA Logo"
                className="h-[82%] w-[82%] object-contain"
                style={{ marginLeft: '-10%' }}
              />
            </div>
          </div>
          <span
            className="text-white"
            style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 700, fontSize: 26, letterSpacing: '-0.5px' }}
          >
            NutrIA
          </span>
        </button>

        {/* ── Desktop nav links ── */}
        <div className="hidden md:flex items-center gap-7 lg:gap-10">
          {NAV_LINKS.map(({ label, sectionId }) => {
            const isActive = activeSection === sectionId;
            return (
              <button
                key={sectionId}
                onClick={() => handleNavClick(sectionId)}
                className={`text-white cursor-pointer transition-all relative ${
                  isActive ? 'opacity-100' : 'opacity-75 hover:opacity-100'
                }`}
                style={{
                  fontFamily: isActive ? "'Alexandria', sans-serif" : "'Alexandria:Regular', sans-serif",
                  fontWeight: isActive ? 600 : 400,
                  fontSize: 15,
                }}
              >
                {label}
                <span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full transition-all duration-300"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* ── Right actions ── */}
        <div className="flex items-center gap-3">
          {/* Desktop buttons */}
          <button
            className="hidden md:flex items-center px-5 py-2.5 rounded-[14px] border border-[rgba(255,255,255,0.55)] text-white hover:bg-[rgba(255,255,255,0.12)] transition-colors cursor-pointer whitespace-nowrap"
            style={{ fontFamily: "'Alexandria:Medium', sans-serif", fontWeight: 500, fontSize: 15 }}
          >
            Iniciar Sesión
          </button>
          <button
            className="hidden md:flex bg-[#2467b8] text-white items-center px-5 py-2.5 rounded-[14px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap"
            style={{ fontFamily: "'Alexandria:Medium', sans-serif", fontWeight: 500, fontSize: 15 }}
          >
            Regístrate
          </button>

          {/* Mobile compact button */}
          <button
            className="md:hidden bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.4)] text-white px-3 py-2 rounded-[10px] cursor-pointer hover:bg-[rgba(255,255,255,0.25)] transition-colors"
            style={{ fontFamily: "'Alexandria:Medium', sans-serif", fontSize: 12 }}
          >
            Ingresar
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden text-white p-1 cursor-pointer"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#2d8b57] border-t border-[rgba(255,255,255,0.2)] px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, sectionId }) => {
            const isActive = activeSection === sectionId;
            return (
              <button
                key={sectionId}
                onClick={() => handleNavClick(sectionId)}
                className="text-left py-3 cursor-pointer border-b border-[rgba(255,255,255,0.1)] transition-all"
                style={{
                  color: 'white',
                  opacity: isActive ? 1 : 0.7,
                  fontFamily: isActive ? "'Alexandria', sans-serif" : "'Alexandria', sans-serif",
                  fontWeight: isActive ? 600 : 400,
                  fontSize: 16,
                }}
              >
                {isActive && <span className="mr-2 text-[#a8f0c8]">▸</span>}
                {label}
              </button>
            );
          })}

          {/* Mobile auth buttons */}
          <div className="flex gap-3 pt-4">
            <button
              className="flex-1 border border-[rgba(255,255,255,0.5)] text-white py-3 rounded-[14px] hover:bg-[rgba(255,255,255,0.1)] transition-colors cursor-pointer"
              style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 500, fontSize: 15 }}
            >
              Iniciar Sesión
            </button>
            <button
              className="flex-1 bg-[#2467b8] text-white py-3 rounded-[14px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity cursor-pointer"
              style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 500, fontSize: 15 }}
            >
              Regístrate
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}