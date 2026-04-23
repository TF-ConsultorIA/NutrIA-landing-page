import React from 'react'
import { imgTeam } from './assets'

export default function About(){
  return (
    <section className="about section">
      <div className="about-inner">
        <div className="about-text">
          <small className="kicker">Nuestra Historia</small>
          <h2>¿Quiénes <span className="green">Somos?</span></h2>
          <p>ConsultorIA es una startup fundada en 2026 por estudiantes de la UPC, desarrollando soluciones de software con IA como núcleo del producto.</p>
          <div className="stats">
            <div><strong>2026</strong><div>Fundación</div></div>
            <div><strong>3</strong><div>Segmentos atendidos</div></div>
            <div><strong>100%</strong><div>IA integrada</div></div>
          </div>
          <button className="btn primary">Conócenos →</button>
        </div>
        <div className="about-card">
          <img src={imgTeam} alt="Equipo NutrIA" />
          <div className="pill"><span>🥗</span><div className="pill-text"><strong>Nutrición con IA</strong><div>Personalizada para ti</div></div></div>
        </div>
      </div>
    </section>
  )
}
