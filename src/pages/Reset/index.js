import React, { useState } from 'react';

import { Container, Form, Input, Btn } from './styles';
import axios from '../../services/axios';
import history from '../../services/history';

function Reset(props) {
  const [password, setPassword] = useState('');
  const { token } = props.match.params;

  async function handleClick(e) {
    e.preventDefault();
    axios.post(`/resettwo/${token}`, { password });
    history.push('/');
  }

  return (
    <Container>
      <Form action="submit">
        <Input
          type="password"
          placeholder="Nova Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Btn onClick={handleClick}>Trocar senha</Btn>
      </Form>
    </Container>
  );
}

export default Reset;
