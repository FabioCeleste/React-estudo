import React, { useState } from 'react';

import {
  Nav,
  Brand,
  Register,
  Header,
  NavLi,
  Login,
  Input,
  Btn,
} from './styles';
import history from '../../services/history';

function NavBar() {
  const [searchUser, setSearchUser] = useState('');
  function handleClick(e) {
    e.preventDefault();
    if (!searchUser) {
      return;
    }
    history.push(`/users/${searchUser}`);
  }
  return (
    <Header>
      <Brand onClick={() => history.push('/')}>MyGameList</Brand>
      <Nav>
        <Input
          type="text"
          value={searchUser}
          onChange={(e) => setSearchUser(e.target.value)}
        />
        <Btn onClick={handleClick}>Pesquisar</Btn>
      </Nav>
    </Header>
  );
}

export default NavBar;
