import styled from 'styled-components';

// Importa tus logos aquí. Asegúrate de que las rutas sean correctas.
// Asumo que los logos están en src/images/skills/
import reactLogo from '../images/react.png';
import nodeLogo from '../images/node.png';
import jsLogo from '../images/javascript.png';
import pythonLogo from '../images/python.png';
import mongoLogo from '../images/mongo.png';
import postgresLogo from '../images/postgre.png';

export default function About() {
  // Objeto para almacenar los datos de los skills (nombre y ruta del logo)
  const skillData = [
    { name: 'React', logo: reactLogo },
    { name: 'Node.js', logo: nodeLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'MongoDB', logo: mongoLogo },
    { name: 'PostgreSQL', logo: postgresLogo },
  ];

  return (
    <AboutContainer>
      <SeparatorSection>
        <SeparatorLine />
        <LogoContainer>
          <img src="./src/images/logo.png" alt="logo" />
        </LogoContainer>
        <SeparatorLine />
      </SeparatorSection>
      
      <Title>ABOUT ME</Title>
      
      <ContentSection>
        <p>
          Soy un desarrollador Full Stack apasionado por crear experiencias digitales 
          innovadoras y funcionales. Con experiencia en tecnologías modernas tanto 
          del frontend como del backend.
        </p>
        
        <p>
          Mi enfoque se centra en escribir código limpio, escalable y mantenible, 
          siempre buscando las mejores prácticas y las últimas tendencias tecnológicas.
        </p>
        
        <SkillsGrid>
          {skillData.map((skill, index) => (
            <SkillItem key={index}>
              <span>{skill.name}</span>
              <SkillLogo src={skill.logo} alt={`${skill.name} logo`} />
            </SkillItem>
          ))}
        </SkillsGrid>
      </ContentSection>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  min-height: 100vh;
  background: #000;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
`;

const SeparatorSection = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  position: relative;
`;

const SeparatorLine = styled.div`
  flex: 1;
  height: 2px;
  background: linear-gradient(to right, transparent, white, transparent);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 10%;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    background: white;
    border-radius: 50%;
  }
  
  &::after {
    content: '';
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    background: white;
    border-radius: 50%;
  }
`;

const LogoContainer = styled.div`
  margin: 0 2rem;
  padding: 1rem;
  border: 3px solid white;
  border-radius: 50%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  min-height: 100px;
  
  img {
    width: 60px;
    height: 60px;
    filter: brightness(0) invert(1);
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 0.3em;
  text-align: center;
  margin-bottom: 4rem;
  color: white;
`;

const ContentSection = styled.div`
  max-width: 800px;
  text-align: center;
  
  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    color: #ccc;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 3rem;
`;

const SkillItem = styled.div`
  padding: 1rem;
  border: 1px solid #333;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  text-align: center;
  transition: all 0.3s ease;
  
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  position: relative; 
  overflow: hidden; 
  min-height: 100px; 


  span {
    font-size: 1.1rem;
    font-weight: bold;
    color: white;
    transition: opacity 0.3s ease; 
  }

  &:hover {
    border-color: var(--text-hover);
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);

    span {
      opacity: 0; 
    }

    img {
      opacity: 1; 
      transform: translate(-50%, -50%) scale(1); /* Vuelve a su posición original centrado */
    }
  }
`;

const SkillLogo = styled.img`
  width: 60px; 
  height: 60px;
  object-fit: contain;
  position: absolute; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0); /* Lo oculta escalándolo a 0, pero lo mantiene centrado */
  opacity: 0; 
  transition: opacity 0.3s ease, transform 0.3s ease; 
`;