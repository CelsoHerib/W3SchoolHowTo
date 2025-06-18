import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Implemetaciones from './pages/Implementaciones';


import { NavbarContext } from './components/NavbarContext';

function App() {
 
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/implementaciones" element={<Implemetaciones />} />
          </Routes>
        </ContentWrapper>
        <Footer />
      </AppContainer>
    </Router>
  );
}

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.main`
  flex: 1;
  transition: margin-left 0.3s ease;
  overflow-x: hidden;
  padding-left: 0;

  ${(props) => {

    
  }}
`;

const MainContentWithContext = ({ children }) => {
  const { navbarWidth } = useContext(NavbarContext);
  const numericWidth = parseFloat(navbarWidth);
  return (
    <ContentWrapper style={{ marginLeft: `${numericWidth}px` }}>
      {children}
    </ContentWrapper>
  );
};

function AppRevised() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <MainContentWithContext>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/implementaciones" element={<Implemetaciones />} />
          </Routes>
        </MainContentWithContext>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default AppRevised;