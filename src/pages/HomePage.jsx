import { useState } from 'react';
import BtnCircle from '../components/buttons/BtnCircle';
import NavLeft from '../components/Navbar/NavLeft';
import NavTop from '../components/Navbar/NavTop';
import Overlay from '../components/overlay/Overlay';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';

const HomePage = ({ isToolbarOpen, setIsToolbarOpen }) => {
  return (
    <HomeLayout
      isToolbarOpen={isToolbarOpen}
      setIsToolbarOpen={setIsToolbarOpen}
    />
  );
};

export default HomePage;
