import React from 'react';

import { Nav, Brand, Register, Header, NavLi, Login } from './styles';

function NavBar() {
  return (
    <Header>
      <Brand>MyGameList</Brand>

      <Nav>
        <NavLi>
          <Login href="#">Entrar</Login>
        </NavLi>
        <NavLi>
          <Register href="#">Cadastrar</Register>
        </NavLi>
      </Nav>
    </Header>
  );
}

export default NavBar;
