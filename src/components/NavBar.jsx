import React from 'react'
import { imgLogo } from './assets'

export default function NavBar(){
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">
          <img src={imgLogo} alt="NutrIA logo" className="logo" />
          <span className="brand-name">NutrIA</span>
        </div>
        <nav className="nav-links">
          <a>Principal</a>
          <a>Sobre Nosotros</a>
          <a>Testimonios</a>
          <a>Planes</a>
        </nav>
        <button className="btn primary">Iniciar Sesión / Registrate</button>
      </div>
    </header>
  )
}
