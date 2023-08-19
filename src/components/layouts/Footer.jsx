import React from 'react';
import Logo from '../../utils/Logo';

const Footer = () => {
  return(
    <footer className="bck_blue">
      <div class='footer_logo'>
        <Logo
          link={true}
          linkTo={'/'}
          width='70px'
          height='70px'
        />
      </div>

      <div className="footer_desc1">
        Manchester city 2021. All rights reserved
      </div>
    </footer>
  )
}

export default Footer;