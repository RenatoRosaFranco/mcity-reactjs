import React, { useState } from 'react';
import { firebase } from '../../config/firebase';

import { CircularProgress } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PinDropSharp } from '@material-ui/icons';

import { showErrorToast, showSuccessToast } from './../../utils/Toast';

const Login = (props) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: 'renato_ny@live.com',
      password: '!Test123'
    },
    validationSchema: Yup.object({
      email: Yup.string()
                .email('Invalid email address')
                .required('The email is required'),
      password: Yup.string()
                   .required('The password is required')

    }),
    onSubmit: (values) => {
      setLoading(true);
      submitForm(values);
    }
  })

  const submitForm = (values) => {
    firebase.auth()
    .signInWithEmailAndPassword(
      values.email,
      values.password
    ).then(() =>{
      showSuccessToast('Welcome back!!');
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      showErrorToast(error.message);
    });
  }

  return(
    <div className="container">
      <div className="signin_wrapper" style={{margin: '100px'}}>

        <form onSubmit={formik.handleSubmit}>
          <h2>Please Login</h2>
        
          <input 
            name="email"
            placeholder="enter your email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />

          { formik.touched.email && formik.errors.email ?
            <div className="error_label">
              {formik.errors.email}
            </div>
          : null }

          <input
            name="enter your password"
            type="password"
            placeholder="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />

          { formik.touched.password && formik.errors.password ?
            <div className="error_label">
              {formik.errors.password}
            </div>
          : null }

          { loading ? 
            <CircularProgress 
              color="secondary" 
              className="progress"
            />
          :
           <button type="submit">Log in</button>
          }
        </form>
      </div>
    </div>
  )
}

export default Login;