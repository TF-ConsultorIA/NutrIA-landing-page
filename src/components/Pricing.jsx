import React from 'react'
import { imgCheck } from './assets'

export default function Pricing(){
  return (
    <section className="pricing section">
      <div className="container">
        <small className="kicker">Precios</small>
        <h2>Planes y Precios</h2>
        <p className="muted">Elige el plan que mejor se adapte a tus necesidades y las de tu familia.</p>

        <div className="plans">
          <div className="plan-card">
            <h3>Plan Gratuito</h3>
            <div className="price">S/.0</div>
            <ul>
              <li><img src={imgCheck} alt="check"/> Acceso completo a la plataforma</li>
              <li><img src={imgCheck} alt="check"/> Dashboard personal de salud</li>
              <li><img src={imgCheck} alt="check"/> Recomendaciones alimenticias con IA</li>
            </ul>
            <button className="btn primary">Comenzar Gratis</button>
          </div>

          <div className="plan-card featured">
            <div className="badge">⭐ Más Popular</div>
            <h3>Plan NutriPro</h3>
            <div className="price">S/.50 <span className="per">/al mes</span></div>
            <ul>
              <li><img src={imgCheck} alt="check"/> Todo lo del Plan gratuito, más:</li>
              <li><img src={imgCheck} alt="check"/> Chatbot nutricional ilimitado</li>
              <li><img src={imgCheck} alt="check"/> Exportación de reportes en PDF</li>
            </ul>
            <button className="btn secondary">Suscribirse a NutriPro</button>
          </div>
        </div>
      </div>
    </section>
  )
}
