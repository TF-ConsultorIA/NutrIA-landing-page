import robotImage from '../assets/robot.png';
// ─── Constants ────────────────────────────────────────────────────────────────

const STATS = [
  { value: '2026', label: 'Fundación' },
  { value: '3',    label: 'Segmentos atendidos' },
  { value: '100%', label: 'IA integrada' },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export function AboutSection() {
  return (
    <section id="sobre-nosotros" className="bg-[#f4f9f6] py-20 overflow-hidden">
      <div className="max-w-360 mx-auto px-6 md:px-10 lg:px-37.5">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-[#2d8b57] h-px w-12 shrink-0" />
          <span
            className="text-[#2d8b57] uppercase tracking-[3px] whitespace-nowrap"
            style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 600, fontSize: 13 }}
          >
            Nuestra Historia
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Left: text content ── */}
          <div className="flex flex-col gap-7">
            <h2
              style={{
                fontFamily: "'Alexandria', sans-serif",
                fontWeight: 700,
                letterSpacing: '-1px',
                lineHeight: 1.12,
                fontSize: 'clamp(30px, 4vw, 46px)',
                color: '#1a2e23',
              }}
            >
              ¿Quiénes{' '}
              <span style={{ color: '#2d8b57' }}>Somos?</span>
            </h2>

            <p
              className="text-[#2d4a38]"
              style={{ fontFamily: "'Alexandria', sans-serif", fontSize: 18, lineHeight: 1.8 }}
            >
              Nosotros somos{' '}
              <strong style={{ fontFamily: "'Alexandria', sans-serif", color: '#1a2e23' }}>
                ConsultorIA
              </strong>
              , una startup fundada en 2026 por estudiantes de la Universidad Peruana de Ciencias
              Aplicadas, dedicada al desarrollo de soluciones de software que integran inteligencia
              artificial como parte central del producto.
            </p>

            <p
              className="text-[#2d4a38]"
              style={{ fontFamily: "'Alexandria', sans-serif", fontSize: 18, lineHeight: 1.8 }}
            >
              <strong style={{ fontFamily: "'Alexandria', sans-serif", color: '#1a2e23' }}>
                NutrIA
              </strong>{' '}
              es nuestra plataforma web interactiva, intuitiva y multiplataforma diseñada para brindar
              apoyo y seguimiento nutricional a padres de familia, jóvenes universitarios y adultos
              mayores.
            </p>

            {/* Stats row */}
            <div className="border-t border-b border-[rgba(45,139,87,0.2)] py-6 grid grid-cols-3 gap-4">
              {STATS.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div
                    className="text-[#2d8b57]"
                    style={{
                      fontFamily: "'Alexandria', sans-serif",
                      fontWeight: 700,
                      fontSize: 'clamp(24px, 3vw, 32px)',
                      lineHeight: 1,
                    }}
                  >
                    {value}
                  </div>
                  <div
                    className="text-[#5a7a68] mt-1"
                    style={{ fontFamily: "'Alexandria', sans-serif", fontSize: 13 }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4">
              <span
                className="text-[#2d4a38]"
                style={{ fontFamily: "'Alexandria', sans-serif", fontSize: 16 }}
              >
                ¿Deseas saber más sobre nosotros?
              </span>
              <button
                className="bg-[#2467b8] text-white px-5 py-3 rounded-2xl shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity cursor-pointer shrink-0"
                style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 500, fontSize: 16 }}
              >
                Conócenos →
              </button>
            </div>
          </div>

          {/* ── Right: team image ── */}
          <div className="relative mt-8 lg:mt-0">
            {/* Decorative shadows */}
            <div className="absolute inset-0 translate-x-4 translate-y-3 bg-[#2d8b57] opacity-30 rounded-3xl" />
            <div className="absolute inset-0 translate-x-2 translate-y-1 bg-[#eaecf5] opacity-50 rounded-3xl" />

            <div className="relative rounded-3xl overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] aspect-square">
              <img src={robotImage} alt="Equipo NutrIA" className="w-full h-full object-cover" />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-6 -left-4 md:-left-8 bg-white flex items-center gap-3 px-4 py-3 rounded-2xl shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]">
              <div className="bg-[#e4ffdb] rounded-xl size-10 flex items-center justify-center text-xl shrink-0">
                🥗
              </div>
              <div>
                <p
                  className="text-[#1a2e23]"
                  style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 600, fontSize: 13 }}
                >
                  Nutrición con IA
                </p>
                <p
                  className="text-[#5a7a68]"
                  style={{ fontFamily: "'Alexandria', sans-serif", fontSize: 11 }}
                >
                  Personalizada para ti
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
