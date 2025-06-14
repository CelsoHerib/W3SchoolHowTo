import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <NavBar>
      <div className="sidebar">
        <Link to="/">
          <img src="./src/images/logo.png" alt="logo" />
        </Link>
        <Link 
          to="/" 
          className={location.pathname === '/' ? 'active' : ''}
        >
          <i className="fa fa-fw fa-home"></i> Home
        </Link>
        <Link 
          to="/about" 
          className={location.pathname === '/about' ? 'active' : ''}
        >
          <i className="fa fa-fw fa-address-card"></i> About
        </Link>
        <Link 
          to="/testimonials" 
          className={location.pathname === '/testimonials' ? 'active' : ''}
        >
          <i className="fa fa-fw fa-user"></i> Testimonials
        </Link>
        <Link 
          to="/projects" 
          className={location.pathname === '/projects' ? 'active' : ''}
        >
          <i className="fa fa-fw fa-folder"></i> Projects
        </Link>
        <Link 
          to="/skills" 
          className={location.pathname === '/skills' ? 'active' : ''}
        >
          <i className="fa fa-fw fa-code"></i> Skills
        </Link>
        <Link 
          to="/contact" 
          className={location.pathname === '/contact' ? 'active' : ''}
        >
          <i className="fa fa-fw fa-envelope"></i> Contact
        </Link>
      </div>
    </NavBar>
  );
}

const NavBar = styled.div`
  .sidebar {
    max-height: 100vh;
    overflow-y: auto;
    width: 160px;
    position: fixed;
    z-index: 1;
    height: auto;
    top: 0;
    bottom: 0;
    background-color: #111;
    padding-top: 36px;
    transition: 0.5s;
    font-size: 18px;
    color: #f1f1f1;
    font-weight: bold;
    text-align: center;
  }

  /* Style sidebar links */
  .sidebar a {
    padding: 26px 18px 26px 18px;
    text-decoration: none;
    font-size: 20px;
    color: #818181;
    display: block;
    transition: color 0.3s ease;
  }

  /* Style links on mouse-over */
  .sidebar a:hover {
    color: var(--text-hover);
  }

  /* Style active link */
  .sidebar a.active {
    color: var(--text-hover);
    background-color: rgba(255, 255, 255, 0.1);
  }

  /* Style the main content */
  .main {
    margin-left: 160px; /* Same as the width of the sidenav */
    padding: 0px 10px;
  }

  /* Add media queries for small screens */
  @media screen and (max-height: 450px) {
    .sidebar {
      padding-top: 15px;
    }
    .sidebar a {
      font-size: 18px;
    }
  }
`;

