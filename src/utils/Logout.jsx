import React from 'react';
import { firebase } from '../config/firebase';
import { showErrorToast, showSuccessToast } from './Toast';

const logoutHandler = () => {
  firebase.auth().signOut()
  .then(() => {
    showSuccessToast('Good bye!!');
  }).catch((error) => {
    showErrorToast(error.message);
  });
}

export default logoutHandler;