import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';
import { NavbarContext } from './NavbarContext'; 
import SocialLinks from './SocialLinks';

export default function Navbar() {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const { setNavbarWidth, setIsInContact } = useContext(NavbarContext); // Also get setIsInContact here

  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth < 768;
      setIsSmallScreen(smallScreen);
      if (!smallScreen && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  const shouldBeCollapsed = isSmallScreen ? !isMobileMenuOpen : !isHovered;


  useEffect(() => {
    let width;
    if (isSmallScreen) {
      width = isMobileMenuOpen ? "140px" : "0px";
    } else {
      width = shouldBeCollapsed ? "70px" : "160px";
    }
    setNavbarWidth(width); // Update the context with the calculated width
  }, [shouldBeCollapsed, isSmallScreen, isMobileMenuOpen, setNavbarWidth]);


  return (
    
    <> 
      {isSmallScreen && (
        <HamburgerButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <i className="fa fa-bars"></i>
        </HamburgerButton>
      )}

      <NavBar
        collapsed={shouldBeCollapsed}
        isSmallScreen={isSmallScreen}
        onMouseEnter={() => !isSmallScreen && setIsHovered(true)}
        onMouseLeave={() => !isSmallScreen && setIsHovered(false)}
        onClick={() => {
          if (isSmallScreen && isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
          }
        }}
      >
        <div className="sidebar">
          <div className="top">
            <img src="./src/images/logo.png" alt="logo" className="logo" />
          </div>

          <div className="sidebar-links">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''} title="Home">
              <i className="fa fa-fw fa-home"></i>
              {!shouldBeCollapsed && " Home"}
            </Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} title="About">
              <i className="fa fa-fw fa-address-card"></i>
              {!shouldBeCollapsed && " About"}
            </Link>
            <Link to="/testimonials" className={location.pathname === '/testimonials' ? 'active' : ''} title="Testimonials">
              <i className="fa fa-fw fa-user"></i>
              {!shouldBeCollapsed && " Testimonials"}
            </Link>
            <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} title="Projects">
              <i className="fa fa-fw fa-folder"></i>
              {!shouldBeCollapsed && " Projects"}
            </Link>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} title="Contact">
              <i className="fa fa-fw fa-envelope"></i>
              {!shouldBeCollapsed && " Contact"}
            </Link>

            <a href="/cv.pdf" download title="Descargar CV">
              <i className="fa fa-fw fa-download"></i>
              {!shouldBeCollapsed && " CV"}
            </a>
          </div>

          <div className="sidebar-footer">
            <SocialLinks variant="sidebar" />
          </div>
        </div>
      </NavBar>
    </>
  );
}

const NavBar = styled.div`
  .sidebar {
    height: 100vh;
    width: ${(props) =>
      props.isSmallScreen
        ? props.collapsed
          ? "0px"
          : "140px"
        : props.collapsed
        ? "70px"
        : "160px"};
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
    z-index: 1000;
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
    white-space: nowrap;
  }

  .sidebar a:hover,
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
    font-size: 20px;
    transition: color 0.3s ease;
  }

  .sidebar-footer a:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    .sidebar {
      font-size: 14px;
    }
    .sidebar a {
      padding: 10px;
      font-size: 14px;
      justify-content: flex-start;
    }
    .logo {
      max-width: 60px;
    }
  }
`;

const HamburgerButton = styled.button`
  display: none;
  position: fixed;
  top: 5px;
  left: 45px;
  z-index: 1001;
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 24px;
  &:hover {
    background-color: #333;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

const CollapseButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #333;
  }
`;
