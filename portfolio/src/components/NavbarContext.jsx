import React, { createContext, useContext, useState } from "react";

// Exportamos explícitamente el contexto
export const NavbarContext = createContext({
  navbarWidth: "70px",
});

export const useNavbar = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
  const [navbarWidth, setNavbarWidth] = useState("70px");
  const [isInContact, setIsInContact] = useState(false);

  const contextValue = {
    navbarWidth,
    setNavbarWidth,
    isInContact,
    setIsInContact,
  };

  return (
    <NavbarContext.Provider value={contextValue}>
      {children}
    </NavbarContext.Provider>
  );
};