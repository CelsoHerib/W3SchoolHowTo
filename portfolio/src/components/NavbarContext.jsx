// src/components/NavbarContext.jsx
import React, { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const useNavbar = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [navbarWidth, setNavbarWidth] = useState('70px');
  const [isInContact, setIsInContact] = useState(false);

  const toggleSidebar = () => {
    const newIsExpanded = !isExpanded;
    setIsExpanded(newIsExpanded);
    setNavbarWidth(newIsExpanded ? '250px' : '70px');
  };

  return (
    <NavbarContext.Provider value={{ isExpanded, navbarWidth, toggleSidebar, isInContact, setIsInContact }}>
      {children}
    </NavbarContext.Provider>
  );
};