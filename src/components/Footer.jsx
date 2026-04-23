import React from 'react'
import { imgLogo } from './assets'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="brand-col">
          <img src={imgLogo} alt="NutrIA logo" className="logo" />
          <p className="muted">Plataforma de nutrición inteligente impulsada por IA. Desarrollada por ConsultorIA, UPC 2026.</p>
        </div>
        <div className="links-col">
          <h4>Navegación</h4>
          <a>Sobre Nosotros</a>
          <a>Planes</a>
          <a>Testimonios</a>
        </div>
        <div className="links-col">
          <h4>Ayuda</h4>
          <a>Preguntas Frecuentes</a>
          <a>Soporte Técnico</a>
        </div>
      </div>
      <div className="copyright">© 2026 ConsultorIA — NutrIA. Todos los derechos reservados.</div>
    </footer>
  )
}
