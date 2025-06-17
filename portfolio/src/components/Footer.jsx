import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  // Define tus enlaces de redes sociales aquí (pueden ser los mismos que en Navbar o solo los del Footer)
  const socialLinks = [
    { href: "https://twitter.com", title: "Twitter", icon: <i className="fab fa-twitter"></i> }, // Usando Font Awesome
    { href: "https://github.com/CelsoHerib", title: "GitHub", icon: <i className="fab fa-github"></i> },
    { href: "https://www.linkedin.com/in/celsoherib/", title: "LinkedIn", icon: <i className="fab fa-linkedin"></i> },
  ];

  // Si no estamos en la página de contacto, no renderizamos el footer
  if (!isContactPage) {
    return null;
  }

  return (
    <StyledFooter isContactPage={isContactPage}>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
        <div className="social-links">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.title}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #222;
  color: #f1f1f1;
  padding: 20px;
  text-align: center;
  position: fixed; /* O fixed si quieres que siempre esté abajo */
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box; /* Incluye padding y borde en el ancho */
  z-index: 999; /* Asegúrate de que esté por debajo del Navbar si ambos son fixed/absolute */

  .footer-content {
    max-width: 1200px; /* O el ancho máximo que desees para el contenido */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    @media (min-width: 769px) { /* En pantallas grandes, alinear horizontalmente */
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .social-links {
    display: flex;
    gap: 15px;
  }

  .social-links a {
    color: #f1f1f1;
    font-size: 24px;
    transition: color 0.3s ease;

    &:hover {
      color: var(--text-hover); /* Asegúrate de definir esta variable CSS */
    }
  }
`;

export default Footer;