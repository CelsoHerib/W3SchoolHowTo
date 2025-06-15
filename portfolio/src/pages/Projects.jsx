import styled from 'styled-components';

export default function Projects() {
  return (
    <ProjectsContainer>
      <SeparatorSection>
        <SeparatorLine />
        <LogoContainer>
          <img src="./src/images/logo.png" alt="logo" />
        </LogoContainer>
        <SeparatorLine />
      </SeparatorSection>
      
      <Title>MY PROJECTS</Title>
      
      <ContentSection>
        <p>
          Aquí encontrarás una selección de mis proyectos más destacados. Cada uno 
          representa desafíos únicos y soluciones creativas que he implementado.
        </p>
        
        <ProjectsGrid>
          <ProjectCard>
            <ProjectImage src="./src/images/project-placeholder.jpg" alt="Project 1" />
            <ProjectTitle>Proyecto Ejemplo 1</ProjectTitle>
            <ProjectDescription>
              Descripción breve del proyecto, tecnologías utilizadas y el rol que desempeñé.
            </ProjectDescription>
            <TechTags>
              <Tag>React</Tag>
              <Tag>Node.js</Tag>
              <Tag>MongoDB</Tag>
            </TechTags>
          </ProjectCard>
          
          <ProjectCard>
            <ProjectImage src="./src/images/project-placeholder.jpg" alt="Project 2" />
            <ProjectTitle>Proyecto Ejemplo 2</ProjectTitle>
            <ProjectDescription>
              Descripción breve del proyecto, tecnologías utilizadas y el rol que desempeñé.
            </ProjectDescription>
            <TechTags>
              <Tag>Python</Tag>
              <Tag>Django</Tag>
              <Tag>PostgreSQL</Tag>
            </TechTags>
          </ProjectCard>
          
          <ProjectCard>
            <ProjectImage src="./src/images/project-placeholder.jpg" alt="Project 3" />
            <ProjectTitle>Proyecto Ejemplo 3</ProjectTitle>
            <ProjectDescription>
              Descripción breve del proyecto, tecnologías utilizadas y el rol que desempeñé.
            </ProjectDescription>
            <TechTags>
              <Tag>JavaScript</Tag>
              <Tag>Express</Tag>
              <Tag>Firebase</Tag>
            </TechTags>
          </ProjectCard>
        </ProjectsGrid>
      </ContentSection>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
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
  max-width: 1100px;
  text-align: center;
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    color: #ccc;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0 4rem;
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border: 1px solid white;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #333;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin: 1rem 0;
  padding: 0 1rem;
  color: white;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  padding: 0 1rem 1rem;
  color: #aaa;
  text-align: left;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0 1rem 1.5rem;
`;

const Tag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
`;