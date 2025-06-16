import React, { useContext } from 'react'; // Importa useContext
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NavbarContext } from '..components/NavbarContext'; // Importa tu contexto de Navbar

export default function Projects() {
  // Consume el contexto para obtener el ancho del navbar y el estado de la pantalla
  const { navbarWidth, isSmallScreen, isMobileMenuOpen } = useContext(NavbarContext);

  // Configuración del carrusel (la misma que ya tenías)
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
        breakpoint: 768, // Para pantallas de hasta 768px (tablets y móviles)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          // Ajusta las flechas y los puntos si es necesario en móvil
          arrows: false, // Ocultar flechas en móvil
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Ocultar flechas en móvil
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
    // Pasa las props de navbar al contenedor principal de la sección
    <ProjectsContainer navbarWidth={navbarWidth} isSmallScreen={isSmallScreen} isMobileMenuOpen={isMobileMenuOpen}>
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
  padding: 4rem 2rem; /* Padding base */
  width: 100%;
  overflow: hidden;

  /* Ajustar padding-left/margin-left basado en el ancho del navbar */
  /* Este padding solo aplica en pantallas GRANDES */
  padding-left: ${(props) => (props.isSmallScreen ? "2rem" : props.navbarWidth)};
  transition: padding-left 0.3s ease; /* Transición suave para el padding */

  @media (max-width: 768px) {
    /* En pantallas pequeñas, el padding-left solo debe existir si el menú está abierto */
    /* Si el menú móvil está abierto, desplaza el contenido. Si está cerrado, ocupa todo el ancho */
    padding-left: ${(props) => (props.isMobileMenuOpen ? '140px' : '0px')};
    transition: padding-left 0.3s ease;
    width: 100%; /* Ocupa todo el ancho */
    box-sizing: border-box; /* Asegura que el padding se incluya en el ancho total */
    padding-right: 0px; /* Elimina padding-right si lo hay, para que ocupe todo */
  }
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

  /* Estilos para las flechas de navegación */
  .slick-prev:before, .slick-next:before {
    color: white;
    font-size: 30px;
  }

  /* Posicionamiento de las flechas para evitar conflictos con el navbar lateral */
  /* Ajusta estos valores si las flechas se superponen con tu contenido */
  .slick-prev {
    left: -40px;
    z-index: 1;
  }

  .slick-next {
    right: -40px;
    z-index: 1;
  }

  /* Estilos para los puntos de navegación */
  .slick-dots li button:before {
    color: #ccc;
    font-size: 10px;
  }

  .slick-dots li.slick-active button:before {
    color: white;
  }

  @media (max-width: 768px) {
    /* Aquí ya no necesitas ocultar las flechas si ya lo haces en las settings del Slider */
    /* .slick-prev, .slick-next {
      display: none !important;
    } */
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