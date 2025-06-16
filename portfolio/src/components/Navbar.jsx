import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';
import { NavbarContext } from './NavbarContext'; // Asegúrate de que esta ruta sea correcta

export default function Navbar() {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  // Nuevo estado para controlar si el menú móvil está abierto
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [currentNavbarWidth, setCurrentNavbarWidth] = useState('70px');

  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth < 768;
      setIsSmallScreen(smallScreen);
      // Cuando el tamaño de la pantalla cambia a grande, asegura que el menú móvil esté cerrado
      if (!smallScreen && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]); // Agregamos isMobileMenuOpen como dependencia para que el efecto reaccione a su cambio

  // shouldBeCollapsed ahora depende de si es pantalla pequeña y si el menú móvil está abierto
  const shouldBeCollapsed = isSmallScreen ? !isMobileMenuOpen : !isHovered;

  useEffect(() => {
    let width;
    if (isSmallScreen) {
      width = isMobileMenuOpen ? "140px" : "0px"; // Si es pantalla pequeña y menú abierto, ancho 140px, sino 0px (oculto)
    } else {
      width = shouldBeCollapsed ? "70px" : "160px"; // Comportamiento normal en pantallas grandes
    }
    setCurrentNavbarWidth(width);
  }, [shouldBeCollapsed, isSmallScreen, isMobileMenuOpen]);


  return (
    <NavbarContext.Provider value={{ navbarWidth: currentNavbarWidth }}>
      {/* Botón de hamburguesa visible solo en pantallas pequeñas */}
      {isSmallScreen && (
        <HamburgerButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <i className="fa fa-bars"></i> {/* Icono de hamburguesa */}
        </HamburgerButton>
      )}

      <NavBar
        collapsed={shouldBeCollapsed}
        isSmallScreen={isSmallScreen} // Pasa isSmallScreen a styled-component
        onMouseEnter={() => !isSmallScreen && setIsHovered(true)} // Solo reacciona al hover en pantallas grandes
        onMouseLeave={() => !isSmallScreen && setIsHovered(false)} // Solo reacciona al hover en pantallas grandes
        // Cierra el menú móvil al hacer clic en un enlace
        onClick={() => {
          if (isSmallScreen && isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
          }
        }}
      >
        <div className="sidebar">
          <div className="top">
            <img src="./src/images/logo.png" alt="logo" className="logo" />
          </div>

          <div className="sidebar-links">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''} title="Home">
              <i className="fa fa-fw fa-home"></i>
              {!shouldBeCollapsed && " Home"}
            </Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} title="About">
              <i className="fa fa-fw fa-address-card"></i>
              {!shouldBeCollapsed && " About"}
            </Link>
            <Link to="/testimonials" className={location.pathname === '/testimonials' ? 'active' : ''} title="Testimonials">
              <i className="fa fa-fw fa-user"></i>
              {!shouldBeCollapsed && " Testimonials"}
            </Link>
            <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} title="Projects">
              <i className="fa fa-fw fa-folder"></i>
              {!shouldBeCollapsed && " Projects"}
            </Link>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} title="Contact">
              <i className="fa fa-fw fa-envelope"></i>
              {!shouldBeCollapsed && " Contact"}
            </Link>

            <a href="/cv.pdf" download title="Descargar CV">
              <i className="fa fa-fw fa-download"></i>
              {!shouldBeCollapsed && " CV"}
            </a>
          </div>

          <div className="sidebar-footer">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
              <i className="fa fa-twitter-square"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="fa fa-linkedin-square"></i>
            </a>
          </div>
        </div>
      </NavBar>
    </NavbarContext.Provider>
  );
}

// ---
// Styled Components
// ---

const HamburgerButton = styled.button`
  display: none; /* Oculto por defecto */
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 1001; /* Asegura que esté por encima de todo */
  background-color: #111;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 24px;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {
    display: block; /* Visible solo en pantallas pequeñas */
  }
`;

const NavBar = styled.div`
  .sidebar {
    height: 100vh;
    /* Ajusta el ancho para pantallas pequeñas: 0px si está colapsado (oculto), 140px si está abierto */
    width: ${(props) => {
      if (props.isSmallScreen) {
        return props.collapsed ? "0px" : "140px";
      }
      return props.collapsed ? "70px" : "160px";
    }};
    position: fixed;
    top: 0;
    left: 0;
    background-color: #111;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: width 0.3s ease; /* Transición suave para el cambio de ancho */
    font-size: 16px;
    color: #f1f1f1;
    overflow: hidden; /* Muy importante para ocultar el contenido cuando el ancho es 0 */
    z-index: 1000; /* Asegura que el navbar esté por encima del contenido principal */
  }

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }

  .logo {
    max-width: ${(props) => (props.collapsed ? "40px" : "80px")};
    transition: max-width 0.3s ease;
  }

  .sidebar-links {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .sidebar a {
    padding: 12px 10px;
    text-decoration: none;
    font-size: 16px;
    color: #818181;
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.collapsed ? "center" : "flex-start")};
    gap: 10px;
    transition: all 0.3s ease;
    white-space: nowrap; /* Evita que el texto de los enlaces se rompa en varias líneas */
  }

  .sidebar a:hover {
    color: var(--text-hover);
  }

  .sidebar a.active {
    color: var(--text-hover);
    background-color: rgba(255, 255, 255, 0.1);
  }

  .sidebar-footer {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 12px;
    border-top: 1px solid #333;
  }

  .sidebar-footer a {
    color: #818181;
    font-size: 22px;
    transition: color 0.3s ease;
  }

  .sidebar-footer a:hover {
    color: var(--text-hover);
  }

  /* Media query para estilos generales, el ancho se maneja con la prop collapsed */
  @media (max-width: 768px) {
    .sidebar {
      /* Ya no necesitas definir el width aquí, lo maneja la prop collapsed */
      font-size: 14px;
    }

    .sidebar a {
      padding: 10px;
      font-size: 14px;
      justify-content: flex-start; /* Siempre al inicio en móvil si el menú está abierto */
    }

    .logo {
      max-width: 60px; /* Tamaño fijo del logo en móvil cuando el menú está abierto */
    }

    /* Oculta los títulos de los enlaces cuando el menú móvil está colapsado a 0px */
    .sidebar-links a span {
      display: ${(props) => (props.collapsed ? "none" : "inline")};
    }
  }
`;