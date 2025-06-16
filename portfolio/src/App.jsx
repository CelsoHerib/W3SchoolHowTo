import { useState, useCallback } from 'react';
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

function App() {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false); 

  
  const handleNavbarCollapse = useCallback((collapsedState) => {
    setIsNavbarCollapsed(collapsedState);
  }, []);

  const expandedWidth = 160;
  const collapsedWidth = 60; 

  
  const currentNavbarWidth = isNavbarCollapsed ? collapsedWidth : expandedWidth;

  return (
    <Router>
      <AppContainer>
        <Navbar onToggleCollapse={handleNavbarCollapse} />
       
        <MainContent navbarWidth={currentNavbarWidth}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/implementaciones" element={<Implemetaciones />} />
          </Routes>
        </MainContent>
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

const MainContent = styled.main`
  flex: 1;
  margin-left: ${(props) => props.navbarWidth}px;
  transition: margin-left 0.3s ease;

  @media (max-width: 768px) {
    margin-left: ${(props) => props.navbarWidth}px; 
  }
`;

export default App;