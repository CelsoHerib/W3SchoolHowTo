// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom'; // Import useLocation
import SocialLinks from './SocialLinks'; // Import the new SocialLinks component

export default function Footer() {
  const location = useLocation();
  const isInContact = location.pathname === '/contact';

  return (
    <FooterContainer className={isInContact ? 'in-contact' : ''}>
      <div className="footer-content">
        <p>&copy; 2025 | CelsoHerib</p>
        {/* Use the new SocialLinks component here */}
        <SocialLinks variant="footer" />
      </div>
       {/* Removed the duplicate sidebar-footer div from here */}
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: #111;
  color: #ccc;
  text-align: center;
  padding: 20px;
  transition: all 0.4s ease;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999; /* Ensure footer is below the navbar but above other content */

  /* Default state (hidden/off-screen for non-contact pages) */
  opacity: 0;
  transform: translateY(100%);
  pointer-events: none; /* Disable interaction when hidden */


  &.in-contact {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto; /* Enable interaction when visible */
    background-color: transparent; /* Use transparent or a specific color for contact page */
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

  /* The .social-links and .sidebar-footer styles are now handled by SocialLinksContainer */
`;