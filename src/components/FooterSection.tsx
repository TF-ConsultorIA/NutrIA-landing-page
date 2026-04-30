import logo from '../assets/logo.svg';
import facebookIcon from '../assets/facebook-icon.svg';
import instagramIcon from '../assets/instagram-icon.svg';

// ─── Types ────────────────────────────────────────────────────────────────────

interface FooterSectionProps {
  scrollToTop: () => void;
  scrollTo: (id: string) => void;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'Sobre Nosotros', sectionId: 'sobre-nosotros' },
  { label: 'Planes',         sectionId: 'planes' },
  { label: 'Testimonios',    sectionId: 'testimonios' },
] as const;

const HELP_LINKS    = ['Preguntas Frecuentes', 'Soporte Técnico'] as const;
const LEGAL_LINKS   = ['Política de Privacidad', 'Términos y Condiciones', 'Información Legal'] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export function FooterSection({ scrollToTop, scrollTo }: FooterSectionProps) {
  return (
    <footer className="bg-[#1a2e23] border-t border-[rgba(45,139,87,0.2)]">
      <div className="max-w-360 mx-auto px-6 md:px-10 lg:px-37.5 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Brand column ── */}
          <div className="flex flex-col gap-5">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity w-fit"
            >
              <div className="relative size-12 shrink-0">
                <div className="bg-[rgba(45,139,87,0.25)] rounded-full size-full flex items-center justify-center overflow-hidden border border-[rgba(45,139,87,0.4)]">
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
                style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 700, fontSize: 22 }}
              >
                NutrIA
              </span>
            </button>

            <p
              className="text-[rgba(255,255,255,0.55)]"
              style={{ fontFamily: "'Alexandria', sans-serif", fontSize: 14, lineHeight: 1.7 }}
            >
              Plataforma de nutrición inteligente impulsada por IA. Desarrollada por ConsultorIA,
              UPC 2026.
            </p>

            {/* Social links */}
            <div>
              <p
                className="text-[rgba(255,255,255,0.6)] uppercase tracking-[1.5px] mb-3"
                style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 600, fontSize: 13 }}
              >
                Síguenos
              </p>
              <div className="flex gap-3">
                <button className="bg-[rgba(45,139,87,0.25)] border border-[rgba(45,139,87,0.4)] rounded-[14px] size-10 flex items-center justify-center hover:bg-[rgba(45,139,87,0.4)] transition-colors cursor-pointer">
                  <img src={facebookIcon}/>
                </button>
                <button className="bg-[rgba(45,139,87,0.25)] border border-[rgba(45,139,87,0.4)] rounded-[14px] size-10 flex items-center justify-center hover:bg-[rgba(45,139,87,0.4)] transition-colors cursor-pointer">
                  <img src={instagramIcon} />
                </button>
              </div>
            </div>
          </div>

          {/* ── Navigation column ── */}
          <div>
            <p
              className="text-[rgba(255,255,255,0.9)] uppercase tracking-[1.5px] mb-4"
              style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 600, fontSize: 14 }}
            >
              Navegación
            </p>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map(({ label, sectionId }) => (
                <button
                  key={sectionId}
                  onClick={() => scrollTo(sectionId)}
                  className="text-[rgba(255,255,255,0.6)] text-left hover:text-white transition-colors cursor-pointer"
                  style={{ fontFamily: "'Alexandria', sans-serif", fontSize: 15 }}
                >
                  {label}
                </button>
              ))}
              <button
                className="text-[rgba(255,255,255,0.6)] text-left hover:text-white transition-colors cursor-pointer"
                style={{ fontFamily: "'Alexandria', sans-serif", fontSize: 15 }}
              >
                Conócenos
              </button>
            </div>
          </div>

          {/* ── Help column ── */}
          <div>
            <p
              className="text-[rgba(255,255,255,0.9)] uppercase tracking-[1.5px] mb-4"
              style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 600, fontSize: 14 }}
            >
              Ayuda
            </p>
            <div className="flex flex-col gap-3">
              {HELP_LINKS.map((label) => (
                <button
                  key={label}
                  className="text-[rgba(255,255,255,0.6)] text-left hover:text-white transition-colors cursor-pointer"
                  style={{ fontFamily: "'Alexandria', sans-serif", fontSize: 15 }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* ── Legal column ── */}
          <div>
            <p
              className="text-[rgba(255,255,255,0.9)] uppercase tracking-[1.5px] mb-4"
              style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 600, fontSize: 14 }}
            >
              Legal
            </p>
            <div className="flex flex-col gap-3">
              {LEGAL_LINKS.map((label) => (
                <button
                  key={label}
                  className="text-[rgba(255,255,255,0.6)] text-left hover:text-white transition-colors cursor-pointer"
                  style={{ fontFamily: "'Alexandria', sans-serif", fontSize: 15 }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(45,139,87,0.15)]">
        <div className="max-w-360 mx-auto px-6 md:px-10 lg:px-37.5 py-5">
          <p
            className="text-[rgba(255,255,255,0.4)]"
            style={{ fontFamily: "'Alexandria', sans-serif", fontSize: 13 }}
          >
            © 2026 ConsultorIA — NutrIA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
