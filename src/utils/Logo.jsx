import React from 'react';
import { Link } from 'react-router-dom';

import Image from './../resources/images/logos/manchester_city_logo.png';

const Logo = (props) => {
  const template = <div
   className="img_cover"
   style={{
     width: props.width,
     height: props.height,
     background: `url(${Image}) no-repeat`
   }}
  ></div>

  if (props.link) {
    return (
      <Link 
        className="link_logo"
        to={props.linkTo}>
        {template}
      </Link>
    )
  } else {
    return template
  }
};

export default Logo;