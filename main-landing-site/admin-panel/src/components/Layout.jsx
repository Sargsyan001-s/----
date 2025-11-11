import React, { useContext } from 'react';
import Header from './Header';
import Popup from './Popup';
import { Outlet } from 'react-router-dom';
import { MenuContext } from '../context/navState';

const Layout = () => {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <>
      <Header />
      <Popup />
      <main
        className={`text-white transition-all duration-300 ease-in-out min-h-screen pt-20 ${
          isMenuOpen ? 'pl-80' : 'pl-0'
        }`}
      >
        <Outlet />
      </main>
    </>
  );
};

export default Layout;