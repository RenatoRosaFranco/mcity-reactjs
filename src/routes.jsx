import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthGuard from './hoc/Auth';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home   from './components/home/Index';
import Login  from './components/sessions/Login';

import Dashboard from './components/admin/Dashboard';

const AppRoutes = ({ user }) => {
  return(
    <BrowserRouter>
      <Header user={ user }/>
      <Switch>
        <Route path="/dashboard" exact component={ AuthGuard(Dashboard) }/>
        <Route path='/login' exact component={ 
          props => (<Login {...props} user={user} />) 
        } />
        
        <Route path='/' exact component={ Home } />
      </Switch>
      <ToastContainer />
      <Footer/>
    </BrowserRouter>
  );
}

export default AppRoutes;
  