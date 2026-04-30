import checkIcon from '../assets/check-icon.svg';
// ─── Constants ────────────────────────────────────────────────────────────────

const FREE_FEATURES = [
  'Acceso completo a la plataforma',
  'Dashboard personal de salud',
  'Grupos familiares hasta 2 miembros',
  'Recomendaciones alimenticias con IA',
  'Plan alimenticio semanal básico',
  'Historial de métricas del último mes',
  'Chatbot nutricional (10 consultas/día)',
  'Biblioteca de recetas básicas',
  'Notificaciones recordatorio de comidas',
] as const;

const PRO_FEATURES = [
  'Todo lo del Plan gratuito, más:',
  'Grupos familiares ampliados (hasta 8 miembros)',
  'Chatbot nutricional ilimitado',
  'Historial completo de métricas y evolución',
  'Análisis comparativo semana a semana',
  'Exportación de reportes en PDF',
  'Recomendaciones por análisis de sangre',
  'Recetas premium con lista de compras',
  'Soporte prioritario 24/7',
] as const;

// ─── Sub-component ────────────────────────────────────────────────────────────

function CheckSVG() {
  return (
    <div className="relative shrink-0 mt-0.75" style={{ width: 16, height: 16 }}>
      <img src={checkIcon} className="w-full h-full" />
    </div>
  );
}

function FeatureList({ features }: { features: readonly string[] }) {
  return (
    <div className="flex flex-col gap-3">
      {features.map((item) => (
        <div key={item} className="flex items-start gap-2">
          <CheckSVG />
          <span
            className="text-[#2d4a38]"
            style={{ fontFamily: "'Alexandria', sans-serif", fontSize: 15 }}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function PricingSection() {
  return (
    <section id="planes" className="bg-[#f4f9f6] py-20">
      <div className="max-w-360 mx-auto px-6 md:px-10 lg:px-37.5">

        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-[#2d8b57] h-px w-12" />
            <span
              className="text-[#2d8b57] uppercase tracking-[3px]"
              style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 600, fontSize: 13 }}
            >
              Precios
            </span>
            <div className="bg-[#2d8b57] h-px w-12" />
          </div>
          <h2
            className="text-[#1a2e23]"
            style={{
              fontFamily: "'Alexandria', sans-serif",
              fontWeight: 700,
              letterSpacing: '-1px',
              lineHeight: 1.12,
              fontSize: 'clamp(28px, 4vw, 46px)',
            }}
          >
            Planes y Precios
          </h2>
          <p
            className="text-[#5a7a68] mt-4 max-w-130 mx-auto"
            style={{ fontFamily: "'Alexandria', sans-serif", fontSize: 18, lineHeight: 1.75 }}
          >
            Elige el plan que mejor se adapte a tus necesidades y las de tu familia.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-240 mx-auto items-start">

          {/* ── Free Plan ── */}
          <div className="bg-[#f8f9fc] rounded-3xl shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] p-8 flex flex-col gap-5">
            <div>
              <h3
                className="text-[#1a2e23]"
                style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 600, fontSize: 26, lineHeight: 1.5 }}
              >
                Plan Gratuito
              </h3>
              <div
                className="text-[#1a2e23]"
                style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 700, fontSize: 52, lineHeight: 1.1 }}
              >
                S/.0
              </div>
            </div>
            <div className="border-t border-[rgba(70,120,90,0.2)]" />
            <div>
              <p
                className="text-[#4a7a61] uppercase tracking-[1.5px] mb-4"
                style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 600, fontSize: 14 }}
              >
                ¿Qué incluye?
              </p>
              <FeatureList features={FREE_FEATURES} />
            </div>
            <button
              className="bg-[#2d8b57] text-white w-full py-4 rounded-2xl shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity cursor-pointer mt-2"
              style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 500, fontSize: 16 }}
            >
              Comenzar Gratis
            </button>
          </div>

          {/* ── Pro Plan ── */}
          <div className="relative bg-[#83f0c1] rounded-3xl border-[1.6px] border-[#2467b8] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] p-8 flex flex-col gap-5 mt-6 md:mt-6">
            <div
              className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2467b8] text-white px-5 py-1.5 rounded-full shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] whitespace-nowrap"
              style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 600, fontSize: 13 }}
            >
              ⭐ Más Popular
            </div>
            <div>
              <h3
                className="text-[#1a2e23]"
                style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 600, fontSize: 26, lineHeight: 1.5 }}
              >
                Plan NutriPro
              </h3>
              <div className="flex items-end gap-1">
                <span
                  className="text-[#1a2e23]"
                  style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 700, fontSize: 52, lineHeight: 1.1 }}
                >
                  S/.50
                </span>
                <span
                  className="text-[#5a7a68] mb-2"
                  style={{ fontFamily: "'Alexandria', sans-serif", fontSize: 16 }}
                >
                  /al mes
                </span>
              </div>
            </div>
            <div className="border-t border-[rgba(70,120,90,0.2)]" />
            <div>
              <p
                className="text-[#4a7a61] uppercase tracking-[1.5px] mb-4"
                style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 600, fontSize: 14 }}
              >
                ¿Qué incluye?
              </p>
              <FeatureList features={PRO_FEATURES} />
            </div>
            <button
              className="bg-[#2467b8] text-white w-full py-4 rounded-2xl shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity cursor-pointer mt-2"
              style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 500, fontSize: 16 }}
            >
              Suscribirse a NutriPro
            </button>
          </div>
        </div>

        <p
          className="text-center text-[#7a9a88] mt-8"
          style={{ fontFamily: "'Alexandria', sans-serif", fontSize: 14 }}
        >
          Sin contratos. Cancela en cualquier momento. Precios en Soles peruanos (PEN).
        </p>
      </div>
    </section>
  );
}