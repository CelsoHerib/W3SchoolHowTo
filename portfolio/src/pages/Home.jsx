import styled from "styled-components";

export default function Home() {
  return (
    <Header>
      <img src="./src/images/photo.png" alt="photo" className="photo" />
      <Content>
        <h1>Celso Herib Ortigoza Duarte</h1>
        <span>Full stack developer</span>
      </Content>
    </Header>
  );
}

// Asumimos que el navbar tiene un ancho fijo de 200px a la izquierda
const Header = styled.header`
  width: calc(100% - 200px);
  margin-left: 200px; /* Deja espacio para el navbar */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  .photo {
    width: 100%;
    max-width: 400px;
    height: auto;
    margin-bottom: 2rem;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0; /* Elimina el espacio del navbar */
    padding: 1rem;

    .photo {
      max-width: 80%;
    }
  }
`;

const Content = styled.div`
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--text-light);
    -webkit-text-stroke: 1px white;
    margin: 0 0 1rem 0;
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--secundary-color);
    -webkit-text-stroke: 1px white;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    span {
      font-size: 1.2rem;
    }
  }
`;
