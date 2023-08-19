import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Layout
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

// Components
import Login from './components/sessions/Login';
import Home from './components/home/Index';

const AppRoutes = (props) => {
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRoutes;
  