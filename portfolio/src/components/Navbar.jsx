// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useNavbar } from './NavbarContext';

export default function Navbar() {
  const location = useLocation();
  const { isInContact } = useNavbar();

  const [isHovered, setIsHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const shouldBeCollapsed = isSmallScreen ? !isMobileMenuOpen : !isHovered;

  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth < 768;
      setIsSmallScreen(smallScreen);
      if (!smallScreen && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Botón Hamburgesa para móviles */}
      {isSmallScreen && (
        <HamburgerButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </HamburgerButton>
      )}

      {/* Sidebar principal */}
      <NavBar
        collapsed={shouldBeCollapsed}
        isSmallScreen={isSmallScreen}
        onMouseEnter={() => !isSmallScreen && setIsHovered(true)}
        onMouseLeave={() => !isSmallScreen && setIsHovered(false)}
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
              {<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-home"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>}
              {!shouldBeCollapsed && ' Home'}
            </Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} title="About">
              {<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-id"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><path d="M9 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M15 8l2 0" /><path d="M15 12l2 0" /><path d="M7 16l10 0" /></svg>}
              {!shouldBeCollapsed && ' About'}
            </Link>
            <Link to="/testimonials" className={location.pathname === '/testimonials' ? 'active' : ''} title="Testimonials">
              {<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-users"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>}
              {!shouldBeCollapsed && ' Testimonials'}
            </Link>
            <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} title="Projects">
              {<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-folder-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 19h-6a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v4" /><path d="M20 21l2 -2l-2 -2" /><path d="M17 17l-2 2l2 2" /></svg>}
              {!shouldBeCollapsed && ' Projects'}
            </Link>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} title="Contact">
              {<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>}
              {!shouldBeCollapsed && ' Contact'}
            </Link>
            <a href="/cv.pdf" download title="Descargar CV">
              {<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-download"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M12 17v-6" /><path d="M9.5 14.5l2.5 2.5l2.5 -2.5" /></svg>}
              {!shouldBeCollapsed && ' CV'}
            </a>
          </div>

          {/* Este es el footer que aparece siempre en el sidebar */}
          <div className="sidebar-footer">
            <a href="https://twitter.com"  target="_blank" rel="noopener noreferrer">🐦</a>
            <a href="https://github.com/CelsoHerib"  target="_blank" rel="noopener noreferrer">🐙</a>
            <a href="https://linkedin.com/in/celsoherib"  target="_blank" rel="noopener noreferrer">💼</a>
          </div>
        </div>
      </NavBar>
    </>
  );
}

// Estilos Styled Components

const NavBar = styled.div`
  .sidebar {
    height: 100vh;
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
    transition: width 0.3s ease;
    font-size: 16px;
    color: #f1f1f1;
    overflow: hidden;
    z-index: 1000;
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
    white-space: nowrap;
  }

  .sidebar a:hover,
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
    font-size: 20px;
    transition: color 0.3s ease;
  }

  .sidebar-footer a:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    .sidebar {
      font-size: 14px;
    }
    .sidebar a {
      padding: 10px;
      font-size: 14px;
      justify-content: flex-start;
    }
    .logo {
      max-width: 60px;
    }
  }
`;

const HamburgerButton = styled.button`
  display: none;
  position: fixed;
  top: 5px;
  left: 45px;
  z-index: 1001;
  background-color: transparent;
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
    display: block;
  }
`;