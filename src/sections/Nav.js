import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      
  
      <Nav>
        <NavLink href="#">Nazwa firmy</NavLink> <NavLink href="#">O nas</NavLink> <NavLink href="#">Oferta</NavLink> <NavLink disabled href="#">Kontakt</NavLink>
      </Nav>
    </div>
  );
}

export default Example;