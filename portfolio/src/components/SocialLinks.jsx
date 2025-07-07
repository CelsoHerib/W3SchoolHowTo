// src/components/SocialLinks.jsx
import React from 'react';
import styled from 'styled-components';

export default function SocialLinks({ variant }) {
  return (
    <SocialLinksContainer variant={variant}>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
        <i className="fa fa-twitter-square"></i>
      </a>
      <a href="https://github.com/CelsoHerib" target="_blank" rel="noopener noreferrer" title="GitHub">
        <i className="fa fa-github-square"></i>
      </a>
      <a href="https://www.linkedin.com/in/celsoherib/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <i className="fa fa-linkedin-square"></i>
      </a>
    </SocialLinksContainer>
  );
}

const SocialLinksContainer = styled.div`
  display: flex;
  gap: ${(props) => (props.variant === 'sidebar' ? '10px' : '15px')}; /* Menos espacio en sidebar, más en footer */
  justify-content: center;
  align-items: center;

  a {
    color: ${(props) => (props.variant === 'sidebar' ? '#818181' : '#ccc')}; /* Color diferente según el contexto */
    font-size: ${(props) => (props.variant === 'sidebar' ? '22px' : '20px')}; /* Tamaño diferente según el contexto */
    transition: color 0.3s ease;
    text-decoration: none; /* Asegura que no haya subrayado */
  }

  a:hover {
    color: #fff; /* Blanco al pasar el mouse en ambos casos */
  }
`;