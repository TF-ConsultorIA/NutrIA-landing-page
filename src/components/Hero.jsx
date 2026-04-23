import React from 'react'
import { imgHero } from './assets'

export default function Hero(){
  return (
    <section className="hero" style={{ backgroundImage: `linear-gradient(152.7deg, rgba(45,139,87,0.82), rgba(10,30,20,0.72)), url(${imgHero})` }}>
      <div className="hero-inner">
        <div className="eyebrow">Plataforma de nutrición con inteligencia artificial</div>
        <h1 className="hero-title">Nutrición Inteligente <span className="accent">para tu dIA</span></h1>
        <p className="hero-sub">Da tu primer paso hacia una nueva forma de mantenerte saludable — planes personalizados con IA para toda tu familia.</p>
        <div className="hero-cta">
          <button className="btn cta">Comenzar Gratis</button>
          <button className="btn ghost">Ver Planes</button>
        </div>
      </div>
    </section>
  )
}
