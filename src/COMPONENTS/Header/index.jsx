import React, { useState } from "react";
import HeaderSyles from "./styles";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <HeaderSyles menuOpen={menuOpen} role="banner">
            <section>
                <img src="/assets/img/log.svg" alt="Logo de Alerta Máxima - Sistemas de seguridad y alarmas" />

                <button 
                    className="menu-toggle" 
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                    aria-expanded={menuOpen}
                >
                    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                        {menuOpen ? (
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#ffffff" />
                        ) : (
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="#ffffff" />
                        )}
                    </svg>
                </button>

                <nav className="nav-menu" aria-label="Navegación principal">
                    <ul>
                        <li><a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a></li>
                        <li><a href="#cobertura" onClick={() => setMenuOpen(false)}>Cobertura</a></li>
                        <li><a href="#ubicacion" onClick={() => setMenuOpen(false)}>Ubicación</a></li>
                        <li><a href="#testimonios" onClick={() => setMenuOpen(false)}>Testimonios</a></li>
                    </ul>
                </nav>
            </section>

            <nav className="cta-nav" aria-label="Acción rápida">
                <a href="#cotizacion">Cotizar ahora</a>
            </nav>
        </HeaderSyles>
    )

}

export default Header;