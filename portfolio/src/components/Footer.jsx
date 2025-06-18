// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { useNavbar } from './NavbarContext';

export default function Footer() {
  const { isInContact } = useNavbar();

  return (
    <FooterContainer className={isInContact ? 'in-contact' : ''}>
      <div className="footer-content">
        <p>&copy; 2025 Celso Heriberto</p>
        <div className="social-links">
          <a href="https://twitter.com"  target="_blank" rel="noopener noreferrer">🐦</a>
          <a href="https://github.com/CelsoHerib"  target="_blank" rel="noopener noreferrer">🐙</a>
          <a href="https://www.linkedin.com/in/celsoherib/"  target="_blank" rel="noopener noreferrer">💼</a>
        </div>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: #111;
  color: #ccc;
  text-align: center;
  padding: 20px;
  transition: all 0.4s ease;
  opacity: ${(props) => (props.className?.includes('in-contact') ? 1 : 0)};
  transform: translateY(${(props) => (props.className?.includes('in-contact') ? '0' : '20px')});
  pointer-events: ${(props) => (props.className?.includes('in-contact') ? 'auto' : 'none')};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;


  &.in-contact {
    background-color: transparent;
    border-top: 1px solid #444;
    box-shadow: 0 -2px 10px rgba(255, 255, 255, 0.05);
  }

  .footer-content {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  .social-links {
    display: flex;
    gap: 15px;
    justify-content: center;
  }

  .social-links a {
    color: #ccc;
    font-size: 20px;
    transition: color 0.3s ease;
  }

  .social-links a:hover {
    color: #fff;
  }
`;