import React, { createContext, useContext } from 'react';

export const NavbarContext = createContext({ navbarWidth: '70px' }); 

export const useNavbar = () => useContext(NavbarContext);