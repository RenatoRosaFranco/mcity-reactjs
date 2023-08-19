import React from 'react';
import ReactDOM from 'react-dom';
import './resources/css/app.css';

import { firebase } from './config/firebase';
import AppRoutes from './routes';

const App = (props) => {
  return(
    <AppRoutes {...props} />
  );
}

firebase.auth().onAuthStateChanged((user) =>{
  ReactDOM.render(<App user={user}/>,
  document.getElementById('root'));
});