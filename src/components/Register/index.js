import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import axios from '../../services/axios';
import history from '../../services/history';

import { RegisterDiv, Form, Input, BtnRegister } from './styles';

function Register() {
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
    if (password.length < 6 || password.lenght > 255) {
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
    <RegisterDiv>
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
    </RegisterDiv>
  );
}

export default Register;
