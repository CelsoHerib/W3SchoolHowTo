import React, { useContext } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// No necesitas importar NavbarContext si solo usas las props para el padding
// en ProjectsContainer, ya que App.jsx ya se encarga del desplazamiento.
// Sin embargo, si lo necesitas para alguna otra lógica interna del componente Projects,
// puedes mantenerlo. Para el padding, lo eliminaremos aquí.
// import { NavbarContext } from '../components/NavbarContext'; // Ya no es estrictamente necesario aquí para el padding

export default function Projects() {

  // const { navbarWidth, isSmallScreen, isMobileMenuOpen } = useContext(NavbarContext); // Ya no es necesario obtenerlos para el padding

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  const projectsData = [
    {
      image: "./src/images/project-placeholder.jpg",
      title: "Proyecto Ejemplo 1",
      description: "Descripción breve del proyecto, tecnologías utilizadas y el rol que desempeñé.",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      image: "./src/images/project-placeholder.jpg",
      title: "Proyecto Ejemplo 2",
      description: "Descripción breve del proyecto, tecnologías utilizadas y el rol que desempeñé.",
      tags: ["Python", "Django", "PostgreSQL"]
    },
    {
      image: "./src/images/project-placeholder.jpg",
      title: "Proyecto Ejemplo 3",
      description: "Descripción breve del proyecto, tecnologías utilizadas y el rol que desempeñé.",
      tags: ["JavaScript", "Express", "Firebase"]
    },
    {
      image: "./src/images/project-placeholder.jpg",
      title: "Proyecto Ejemplo 4",
      description: "Un nuevo proyecto para demostrar el carrusel.",
      tags: ["Vue.js", "Firebase", "CSS"]
    },
    {
      image: "./src/images/project-placeholder.jpg",
      title: "Proyecto Ejemplo 5",
      description: "Otro proyecto más para ver el funcionamiento.",
      tags: ["Angular", "Spring Boot", "MySQL"]
    }
  ];

  return (
    <ProjectsContainer> {/* Eliminamos las props de ancho */}
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

        <CarouselWrapper>
          <Slider {...settings}>
            {projectsData.map((project, index) => (
              <ProjectCard key={index}>
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>
                  {project.description}
                </ProjectDescription>
                <TechTags>
                  {project.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                  ))}
                </TechTags>
              </ProjectCard>
            ))}
          </Slider>
        </CarouselWrapper>
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
  padding: 4rem 2rem; /* Mantén un padding fijo para el contenido interno */
  width: 100%;
  box-sizing: border-box; /* Asegura que el padding no cause desbordamiento */
  overflow: hidden; /* Esto es importante para el carrusel, si no se maneja bien */

  /* --- ELIMINAMOS TODA LA LÓGICA DE PADDING-LEFT BASADA EN NAVBAR --- */
  /* El padre (MainContentWithContext en App.jsx) ya maneja el margen */
  /*
  padding-left: ${(props) => (props.isSmallScreen ? "4rem" : props.navbarWidth)};
  transition: padding-left 0.3s ease;

  @media (max-width: 768px) {
    padding-left: ${(props) => (props.isMobileMenuOpen ? '140px' : '0px')};
    transition: padding-left 0.3s ease;
    width: 100%;
    box-sizing: border-box;
    padding-right: 0px;
  }
  */
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
  width: 100%;

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    color: #ccc;
  }
`;

const CarouselWrapper = styled.div`
  width: 90%;
  margin: 3rem auto 4rem;

  .slick-slide > div {
    margin: 0 10px;
  }
  .slick-list {
    margin: 0 -10px;
  }

  .slick-prev:before, .slick-next:before {
    color: white;
    font-size: 30px;
  }

  .slick-prev {
    left: -40px;
    z-index: 1;
  }

  .slick-next {
    right: -40px;
    z-index: 1;
  }

  .slick-dots li button:before {
    color: #ccc;
    font-size: 10px;
  }

  .slick-dots li.slick-active button:before {
    color: white;
  }

  @media (max-width: 768px) {
     /* Asegúrate de que los botones de navegación no se salgan del layout */
     .slick-prev {
        left: 0px; /* Ajusta para que no se salga */
     }
     .slick-next {
        right: 0px; /* Ajusta para que no se salga */
        display: none !important; /* Si quieres ocultarlo */
     }
    .slick-dots {
      bottom: -30px;
    }
  }
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: auto;
  display: flex !important;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;

  &:hover {
    transform: translateY(-5px);
    border: 1px solid var(--text-hover);
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
  flex-grow: 1;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0 1rem 1.5rem;
  margin-top: auto;
`;

const Tag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
`;