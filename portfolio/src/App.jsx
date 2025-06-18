// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import { NavbarProvider } from './components/NavbarContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

// Importa tus páginas
import Home from './pages/Home';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Implementaciones from './pages/Implementaciones';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <NavbarProvider>
      <Router>
        <AppContainer>
          <Navbar />
          <Routes>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/testimonials" element={<PageTransition><Testimonials /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/implementaciones" element={<PageTransition><Implementaciones /></PageTransition>} />
          </Routes>
          <Footer />
        </AppContainer>
      </Router>
    </NavbarProvider>
  );
}

export default App;