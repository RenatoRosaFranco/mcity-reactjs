import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';

import { Link } from 'react-router-dom';
import Logo from './../../resources/images/logos/manchester_city_logo.png';


const Header = () => {
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
            logo
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

        <Link to="/dashboard">
          <Button color="inherit">
            Dashboard
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header;