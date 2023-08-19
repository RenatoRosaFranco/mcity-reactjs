import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import './resources/css/app.css';

import { firebase } from './config/firebase'

const App = (props) => {
  return(
    <AppRoutes {...props} />
  )
}

firebase.auth().onAuthStateChange((user) => {
  ReactDOM.render(
    <App user={user} />,
    document.getElementById('root')
  )
});