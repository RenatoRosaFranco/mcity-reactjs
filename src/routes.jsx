import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

import Login from './components/sessions/Login';

import Home from './components/home/Index';

const AppRoutes = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRoutes;
  