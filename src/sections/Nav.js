import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { Nav,NavLink } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      
  
      <Nav>
        <NavLink href="index.html">Nazwa firmy</NavLink> 
        <NavLink href="#onas">O nas</NavLink> <NavLink href="#Oferta">Oferta</NavLink> <NavLink disabled href="#">Kontakt</NavLink>
      </Nav>
    </div>
  );
}

export default Example;