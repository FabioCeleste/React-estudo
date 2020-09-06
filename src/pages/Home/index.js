import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

import axios from '../../services/axios';
import history from '../../services/history';
import {
  Container,
  Login,
  Register,
  Input,
  BtnLogin,
  Form,
  BtnRegister,
} from './styles';

function Home() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegisterSubmit(e) {
    e.preventDefault();
    let formErrors = false;
    if (userName.length < 3 || userName.lenght > 255) {
      formErrors = true;
      toast.error('Usuario deve ter de 3 a 255 caracteres');
    }
    if (password.length < 3 || password.lenght > 255) {
      formErrors = true;
      toast.error('Senha deve ter de 6 a 255 caracteres');
    }
    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Email invalido');
    }
    if (formErrors) return;

    try {
      await axios.post('/new-user', {
        user_name: userName,
        email,
        password,
      });
      toast.success('Seja Bem Vindo');
      history.push('/list');
    } catch (e) {
      e.response.data.errors.map((error) => {
        return toast.error(error);
      });
    }
  }

  return (
    <>
      <Container>
        <Login>
          <Form action="submit">
            <Input type="text" placeholder="Usuario" />
            <Input type="password" placeholder="Senha" />
            <BtnLogin type="submit">Entrar</BtnLogin>
          </Form>
        </Login>
        <Register>
          <Form onSubmit={handleRegisterSubmit}>
            <Input
              type="text"
              placeholder="Usuario"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <BtnRegister type="submit">Cadastrar</BtnRegister>
          </Form>
        </Register>
      </Container>
    </>
  );
}

export default Home;
