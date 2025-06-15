import styled from "styled-components";

export default function Home() {
  return (
    <Header>
      <img src="./src/images/photo.png" alt="photo" className="photo"/>
      <Content>
        <h1>Celso Herib Ortigoza Duarte</h1>
        <span>Full stack developer</span>
      </Content>
    </Header>
  );
}

const Header = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column; /* Cambio clave: elementos en columna */
  justify-content: center;
  align-items: center;
  padding-left: 7%;
  
  .photo {
    width: 500px;
    max-width: 90%; /* Para responsive */
    margin-bottom: 2rem; /* Espacio entre imagen y texto */
  }

  img {
    width: 100%;
    display: block;
    border-radius: 10px; /* Opcional: esquinas redondeadas */
  }
`;

const Content = styled.div`
  text-align: center;
  
  h1 {
    font-size: 4rem;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--secunday-color);
    -webkit-text-stroke: 1px white;
    margin: 0 0 1rem 0;
    color: var(--text-light);
  }
  
  span {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--secundary-color);
    -webkit-text-stroke: 1px white;
  }
`;