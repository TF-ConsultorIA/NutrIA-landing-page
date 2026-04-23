import React from 'react'
import { imgQuote, imgAv1, imgAv2, imgAv3, imgAv4 } from './assets'

export default function Testimonials(){
  return (
    <section className="testimonials section">
      <div className="container">
        <small className="kicker light">Testimonios</small>
        <h2 className="white">Lo que dicen nuestros usuarios</h2>
        <p className="muted">Historias reales de personas que mejoraron su nutrición con NutrIA.</p>

        <div className="test-grid">
          <article className="card">
            <img src={imgQuote} alt="quote" className="quote" />
            <p>Sinceramente no esperaba que me gustara tanto. Con NutrIA armo mi plan de la semana en minutos y el dashboard me muestra exactamente qué me está faltando.</p>
            <div className="meta"><img src={imgAv1} alt="Valentina" className="avatar" /><div><strong>Valentina R.</strong><div className="muted">Estudiante — 21 años</div></div></div>
          </article>
          <article className="card">
            <img src={imgQuote} alt="quote" className="quote" />
            <p>Tengo dos hijos y siempre fue un dolor de cabeza organizar las comidas. El dashboard familiar es lo que más uso.</p>
            <div className="meta"><img src={imgAv2} alt="Carmen" className="avatar" /><div><strong>Carmen L.</strong><div className="muted">Madre — 34 años</div></div></div>
          </article>
          <article className="card">
            <img src={imgQuote} alt="quote" className="quote" />
            <p>Le pones tu perfil y te dice qué comer según lo que necesitas. La interfaz es rápida y se ve bien desde el celular.</p>
            <div className="meta"><img src={imgAv3} alt="Diego" className="avatar" /><div><strong>Diego M.</strong><div className="muted">Estudiante — 23 años</div></div></div>
          </article>
          <article className="card">
            <img src={imgQuote} alt="quote" className="quote" />
            <p>Pude registrar mis datos sola y revisé mis métricas sin ayuda. Ya le recomendé a dos amigas del barrio.</p>
            <div className="meta"><img src={imgAv4} alt="Rosa" className="avatar" /><div><strong>Rosa T.</strong><div className="muted">Ama de casa — 58 años</div></div></div>
          </article>
        </div>
      </div>
    </section>
  )
}
