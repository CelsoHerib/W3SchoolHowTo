import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);

  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setCollapsed(true);
    }
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <NavBar collapsed={collapsed}>
      <div className="sidebar">
        {/* LOGO */}
        <div className="top">
          <img src="./src/images/logo.png" alt="logo" className="logo" />

          {/* Toggle con flecha */}
          <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)} title="Expandir/Colapsar">
            <i className={`fa ${collapsed ? "fa-chevron-right" : "fa-chevron-left"}`}></i>
          </button>
        </div>

        {/* ENLACES */}
        <div className="sidebar-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} title="Home">
            <i className="fa fa-fw fa-home"></i>
            {!collapsed && " Home"}
          </Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} title="About">
            <i className="fa fa-fw fa-address-card"></i>
            {!collapsed && " About"}
          </Link>
          <Link to="/testimonials" className={location.pathname === '/testimonials' ? 'active' : ''} title="Testimonials">
            <i className="fa fa-fw fa-user"></i>
            {!collapsed && " Testimonials"}
          </Link>
          <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} title="Projects">
            <i className="fa fa-fw fa-folder"></i>
            {!collapsed && " Projects"}
          </Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} title="Contact">
            <i className="fa fa-fw fa-envelope"></i>
            {!collapsed && " Contact"}
          </Link>

          {/* DESCARGAR CV */}
          <a href="/cv.pdf" download title="Descargar CV">
            <i className="fa fa-fw fa-download"></i>
            {!collapsed && " CV"}
          </a>
        </div>

        {/* REDES SOCIALES */}
        <div className="sidebar-footer">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
            <i className="fa fa-twitter-square"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <i className="fa fa-linkedin-square"></i>
          </a>
        </div>
      </div>
    </NavBar>
  );
}

const NavBar = styled.div`
  .sidebar {
    height: 100vh;
    width: ${(props) => (props.collapsed ? "70px" : "160px")};
    position: fixed;
    top: 0;
    left: 0;
    background-color: #111;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: width 0.3s ease;
    font-size: 16px;
    color: #f1f1f1;
    overflow: hidden;
  }

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }

  .logo {
    max-width: ${(props) => (props.collapsed ? "40px" : "80px")};
    transition: max-width 0.3s ease;
  }

  .toggle-btn {
    background: none;
    color: #fff;
    border: none;
    font-size: 18px;
    margin-top: 10px;
    cursor: pointer;
  }

  .sidebar-links {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .sidebar a {
    padding: 12px 10px;
    text-decoration: none;
    font-size: 16px;
    color: #818181;
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.collapsed ? "center" : "flex-start")};
    gap: 10px;
    transition: all 0.3s ease;
  }

  .sidebar a:hover {
    color: var(--text-hover);
  }

  .sidebar a.active {
    color: var(--text-hover);
    background-color: rgba(255, 255, 255, 0.1);
  }

  .sidebar-footer {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 12px;
    border-top: 1px solid #333;
  }

  .sidebar-footer a {
    color: #818181;
    font-size: 22px;
    transition: color 0.3s ease;
  }

  .sidebar-footer a:hover {
    color: var(--text-hover);
  }

    @media (max-width: 768px) {
    .sidebar {
      width: ${(props) => (props.collapsed ? "60px" : "140px")};
      font-size: 14px;
    }

    .sidebar a {
      padding: 10px;
      font-size: 14px;
    }

    .logo {
      max-width: ${(props) => (props.collapsed ? "30px" : "60px")};
    }

    .toggle-btn {
      font-size: 16px;
    }

    .sidebar-footer a {
      font-size: 18px;
    }
  }

`;
