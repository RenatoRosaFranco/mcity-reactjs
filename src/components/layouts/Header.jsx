import React from 'react';
import Logo from '../../utils/Logo';
import { AppBar, Toolbar, Button } from '@material-ui/core';

import { Link } from 'react-router-dom';
import { firebase } from './../../config/firebase';

import { showErrorToast, showSuccessToast } from './../../utils/Toast';

const Header = ({user}) => {

  const logoutHandler = () => {
    firebase.auth().signOut()
    .then(() => {
      showSuccessToast('Good bye!!');
    }).catch((error) => {
      showErrorToast(error.message);
    });
  }

  return(
    <AppBar
      position='fixed'
      style={{
        backgroundColor: '#98c5e9',
        boxShadow: 'none',
        padding: '10px 0',
        borderBottom: '2px solid #02285e'
      }}
    >

      <Toolbar style={{ display: 'flex' }}>
        <div style={{ flexGrow: 1 }}>
          <div className='header_logo'>
            <Logo
              link={true}
              linkTo={'/'}
              width='70px'
              height='70px'
            />
          </div>
        </div>

        <Link to="/the-team">
          <Button color="inherit">
            The team
          </Button>
        </Link>
        <Link to="/the-matches">
          <Button color="inherit">
            The matches
          </Button>
        </Link>

        { user ?
          <> 
            <Link to="/dashboard">
              <Button color="inherit">Dashboard</Button>
            </Link>

            <Button color="inherit"
            onClick={() => logoutHandler()}>Logout</Button>
          </>
        :
          <>
            <Link to="/login">
              <Button color="inherit">
                Login
              </Button>
            </Link>
          </>
        }

      </Toolbar>
    </AppBar>
  )
}

export default Header;