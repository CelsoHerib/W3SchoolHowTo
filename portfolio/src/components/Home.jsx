import styled from "styled-components";

export default function Home() {
  return (
    <Header>
      <Content>
        <h1>Celso Herib Ortigoza Duarte</h1>
        <h4>Full stack developer</h4>
      </Content>
    </Header>
  );
}

const Header = styled.header`
  color: white;
  background: linear-gradient(
      to bottom,
      rgba(1, 1, 1, 0.7),
      rgba(145, 139, 142, 0.7)
    ),
    url('./src/images/photo.png') no-repeat center center / cover; /* Centrado perfecto */
  backdrop-filter: blur(1px);
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

const Content = styled.div`
  text-align: center;
  z-index: 1;
`;