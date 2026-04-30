import backgroundHero from '../assets/background-hero.png';

// ─── Types ────────────────────────────────────────────────────────────────────

interface HeroProps {
  scrollTo: (id: string) => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function Hero({ scrollTo }: HeroProps) {
  return (
    <section
      id="principal"
      className="relative overflow-hidden"
      style={{ minHeight: 'clamp(560px, 80vh, 743px)' }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={backgroundHero}
          alt=""
          className="w-full h-full object-cover object-center pointer-events-none"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(152.708deg, rgba(45, 139, 87, 0.82) 0%, rgba(10, 30, 20, 0.72) 100%)',
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 md:py-32"
        style={{ minHeight: 'clamp(560px, 80vh, 743px)' }}
      >
        {/* Badge */}
        <div className="flex items-center gap-2 bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.25)] rounded-full px-5 py-2 mb-8">
          <div className="bg-[#62be68] rounded-full size-2 shrink-0" />
          <span
            className="text-[rgba(255,255,255,0.92)]"
            style={{ fontFamily: "'Alexandria', sans-serif", fontSize: 14 }}
          >
            Plataforma de nutrición con inteligencia artificial
          </span>
        </div>

        {/* Heading */}
        <div className="mb-6">
          <p
            className="text-white"
            style={{
              fontFamily: "'Alexandria', sans-serif",
              fontWeight: 700,
              letterSpacing: '-2px',
              lineHeight: 1.08,
              fontSize: 'clamp(38px, 6.5vw, 69px)',
            }}
          >
            Nutrición Inteligente
          </p>
          <p
            style={{
              fontFamily: "'Alexandria', sans-serif",
              fontWeight: 700,
              letterSpacing: '-2px',
              lineHeight: 1.08,
              fontSize: 'clamp(38px, 6.5vw, 69px)',
              color: '#a8f0c8',
            }}
          >
            para tu dIA
          </p>
        </div>

        {/* Subtext */}
        <p
          className="text-[rgba(255,255,255,0.85)] max-w-[520px] mb-10"
          style={{
            fontFamily: "'Alexandria', sans-serif",
            fontSize: 'clamp(16px, 2vw, 20px)',
            lineHeight: 1.75,
          }}
        >
          Da tu primer paso hacia una nueva forma de mantenerte saludable — planes
          personalizados con IA para toda tu familia.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm sm:max-w-none sm:w-auto">
          <button
            className="bg-[#2467b8] text-white px-8 py-4 rounded-[16px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity cursor-pointer"
            style={{
              fontFamily: "'Alexandria', sans-serif",
              fontWeight: 600,
              fontSize: 18,
              minWidth: 200,
            }}
          >
            Comenzar Gratis
          </button>
          <button
            onClick={() => scrollTo('planes')}
            className="bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.3)] text-white px-8 py-4 rounded-[16px] hover:bg-[rgba(255,255,255,0.25)] transition-colors cursor-pointer"
            style={{ fontFamily: "'Alexandria', sans-serif", fontSize: 18, minWidth: 160 }}
          >
            Ver Planes
          </button>
        </div>
      </div>
    </section>
  );
}