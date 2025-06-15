import styled from "styled-components";

export default function Home() {
  return (
    <Header>
      <ProfileImage 
        src="./src/images/photo.png" 
        alt="Celso Herib Ortigoza Duarte - Full stack developer" 
      />
      <Content>
        <Name>Celso Herib Ortigoza Duarte</Name>
        <JobTitle>Full stack developer</JobTitle>
      </Content>
    </Header>
  );
}

const Header = styled.header`
  width: 100%;
  min-height: 100vh; /* Usar min-height en lugar de height para mejor responsive */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem; /* Padding más consistente */
  box-sizing: border-box; /* Para que el padding no afecte el ancho total */
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 500px;
  display: block;
  border-radius: 10px;
  margin-bottom: 2rem;
  object-fit: cover; /* Para manejar mejor la relación de aspecto */
  aspect-ratio: 1/1; /* Mantener relación cuadrada si es apropiado */
`;

const Content = styled.div`
  text-align: center;
  max-width: 800px; /* Limitar ancho del contenido */
  padding: 0 1rem;
`;

const Name = styled.h1`
  font-size: clamp(2rem, 5vw, 4rem); /* Tamaño responsive */
  font-weight: 500;
  text-transform: uppercase;
  color: ${({theme}) => theme.textLight || '#fff'}; /* Mejor manejo de temas */
  -webkit-text-stroke: 1px white;
  margin: 0 0 1rem 0;
  line-height: 1.2; /* Mejor legibilidad */
`;

const JobTitle = styled.span`
  font-size: clamp(1.2rem, 3vw, 1.8rem); /* Tamaño responsive */
  font-weight: bold;
  color: ${({theme}) => theme.secundaryColor || '#fff'}; /* Corregí el typo "secunday" */
  -webkit-text-stroke: 1px white;
  display: block; /* Asegurar que ocupe su propia línea */
`;
