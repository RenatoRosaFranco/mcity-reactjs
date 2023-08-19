import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

import Home from './components/home/Index';

const AppRoutes = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRoutes;
  