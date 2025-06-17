import { useContext } from 'react'; // <--- Importa useContext
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

// <--- Importa el NavbarContext
import { NavbarContext } from './components/NavbarContext'; // Asegúrate de que esta ruta sea correcta

function App() {
  // <--- Elimina los estados y callbacks relacionados con el colapso del Navbar aquí.
  // const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);
  // const handleNavbarCollapse = useCallback((collapsedState) => { ... }, []);
  // const expandedWidth = 160;
  // const collapsedWidth = 60;
  // const currentNavbarWidth = isNavbarCollapsed ? collapsedWidth : expandedWidth;

  return (
    <Router>
      <AppContainer>
        {/* Ya no pasas onToggleCollapse */}
        <Navbar />

        {/* MainContent ahora es un componente que consumirá el contexto */}
        <ContentWrapper> {/* Usamos un wrapper para consumir el contexto */}
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

// <--- Nuevo componente wrapper para consumir el contexto y aplicar estilos
const ContentWrapper = styled.main`
  flex: 1;
  transition: margin-left 0.3s ease;
  overflow-x: hidden; /* Evita desbordamiento horizontal al ajustar el margen */
  padding-left: 0; /* Por defecto, no hay padding */

  /* Aquí es donde consumimos el contexto y aplicamos el margin-left */
  ${(props) => {
    // Usamos useContext dentro del styled component si estás usando styled-components v5+ y quieres el contexto aquí.
    // Pero es más común y limpio hacerlo en el componente funcional de React.
    // Así que, lo pasaremos como prop desde el componente funcional 'MainContentWithContext' de abajo.
  }}
`;

// <--- Este es el componente que envuelve las rutas y consume el contexto
// Lo definimos fuera de App para que no se re-renderice innecesariamente
const MainContentWithContext = ({ children }) => {
  const { navbarWidth } = useContext(NavbarContext); // Consumimos el ancho del navbar
  const numericWidth = parseFloat(navbarWidth); // Convertimos "70px" a 70

  return (
    <ContentWrapper style={{ marginLeft: `${numericWidth}px` }}>
      {children}
    </ContentWrapper>
  );
};

// Reemplaza <MainContent navbarWidth={currentNavbarWidth}> con <MainContentWithContext>
// en el return de App, y MainContent se convierte en ContentWrapper.
// Así, App.jsx quedaría como sigue:

function AppRevised() { // Renombré App para claridad
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <MainContentWithContext> {/* Aquí es donde se usa el componente con contexto */}
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

export default AppRevised; // Exporta el componente revisado