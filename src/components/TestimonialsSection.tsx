import starIcon from '../assets/star-icon.svg';
import quoteIcon from '../assets/quote-icon.svg';
import avatarValentina from '../assets/avatar-valentina.png';
import avatarCarmen from '../assets/avatar-carmen.png';
import avatarDiego from '../assets/avatar-diego.png';
import avatarRosa from '../assets/avatar-rosa.png';

// ─── Types ────────────────────────────────────────────────────────────────────

interface TestimonialData {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  borderColor: string;
  quoteColor: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const TESTIMONIALS: TestimonialData[] = [
  {
    id: 'valentina',
    quote:
      'Sinceramente no esperaba que me gustara tanto. Vivo sola desde que entré a la universidad y mi alimentación era un desastre. Con NutrIA armo mi plan de la semana en minutos y el dashboard me muestra exactamente qué me está faltando. Lo recomiendo a todas mis compañeras.',
    name: 'Valentina R. — 21 años',
    role: 'Estudiante de Administración, San Miguel',
    avatar: avatarValentina,
    borderColor: '#2d8b57',
    quoteColor: '#2D8B57',
  },
  {
    id: 'carmen',
    quote:
      'Tengo dos hijos y siempre fue un dolor de cabeza organizar las comidas pensando en que sean nutritivas para todos. Con NutrIA ingresé los perfiles de cada uno y me genera recomendaciones para el hogar completo. El dashboard familiar es lo que más uso. ¡Ya no improviso cada día!',
    name: 'Carmen L. — 34 años',
    role: 'Madre de familia, Surco',
    avatar: avatarCarmen,
    borderColor: '#62be68',
    quoteColor: '#62BE68',
  },
  {
    id: 'diego',
    quote:
      'Lo que más me convenció fue el agente de recomendaciones. Le pones tu perfil y te dice qué comer según lo que necesitas, nada genérico. Yo tenía los niveles de hierro bajos y ni lo sabía. La interfaz es rápida y se ve bien desde el celular. Ya la tienen varios de mi salón.',
    name: 'Diego M. — 23 años',
    role: 'Estudiante de Ingeniería, Los Olivos',
    avatar: avatarDiego,
    borderColor: '#2467b8',
    quoteColor: '#2467B8',
  },
  {
    id: 'rosa',
    quote:
      'Mi hija me la instaló y pensé que no iba a poder usarla, pero la aplicación es muy ordenadita, todo está donde uno espera encontrarlo. Pude registrar mis datos sola y revisé mis métricas sin ayuda. Ya le recomendé a dos amigas del barrio.',
    name: 'Rosa T. — 58 años',
    role: 'Ama de casa, Jesús María',
    avatar: avatarRosa,
    borderColor: '#2467b8',
    quoteColor: '#2467B8',
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <img key={i} src={starIcon} style={{ width: 16, height: 16 }} />
      ))}
    </div>
  );
}

function QuoteSVG({ color }: { color: string }) {
  return (
    <div style={{ width: 36, height: 28 }}>
      <img src={quoteIcon} className="w-full h-full" style={{ filter: `drop-shadow(0 0 2px ${color})` }} />
    </div>
  );
}

function TestimonialCard({ quote, name, role, avatar, borderColor, quoteColor }: TestimonialData) {
  return (
    <div className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] border border-[rgba(112,162,136,0.15)]">
      <div>
        <QuoteSVG color={quoteColor} />
        <p
          className="mt-4 text-[#2d4a38]"
          style={{ fontFamily: "'Alexandria', sans-serif", fontSize: 15, lineHeight: 1.75 }}
        >
          {quote}
        </p>
      </div>
      <div className="flex items-center gap-4 mt-6 pt-5 border-t border-[rgba(112,162,136,0.15)]">
        <div
          className="relative shrink-0 size-13 rounded-full overflow-hidden"
          style={{ border: `1.6px solid ${borderColor}`, padding: 3 }}
        >
          <img src={avatar} alt={name} className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="flex-1 min-w-0">
          <p
            className="text-[#1a2e23] truncate"
            style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 600, fontSize: 15 }}
          >
            {name}
          </p>
          <p
            className="text-[#7a9a88] truncate"
            style={{ fontFamily: "'Alexandria', sans-serif", fontSize: 13 }}
          >
            {role}
          </p>
        </div>
        <StarRow />
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="bg-[#1a2e23] py-20">
      <div className="max-w-360 mx-auto px-6 md:px-10 lg:px-37.5">

        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-[#62be68] h-px w-12 opacity-50" />
            <span
              className="text-[#83f0c1] uppercase tracking-[3px]"
              style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 600, fontSize: 13 }}
            >
              Testimonios
            </span>
            <div className="bg-[#62be68] h-px w-12 opacity-50" />
          </div>
          <h2
            className="text-white"
            style={{
              fontFamily: "'Alexandria', sans-serif",
              fontWeight: 700,
              letterSpacing: '-1px',
              lineHeight: 1.12,
              fontSize: 'clamp(28px, 4vw, 46px)',
            }}
          >
            Lo que dicen nuestros usuarios
          </h2>
          <p
            className="text-[rgba(255,255,255,0.6)] mt-4 max-w-120 mx-auto"
            style={{ fontFamily: "'Alexandria', sans-serif", fontSize: 18, lineHeight: 1.75 }}
          >
            Historias reales de personas que mejoraron su nutrición con NutrIA.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
