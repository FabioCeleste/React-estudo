import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

import { LoginDiv, Form, Input, BtnLogin } from './styles';
import * as actions from '../../store/modules/auth/actions';

function Login(props) {
  const dispatch = useDispatch();
  const prevPath = get(props, 'location.state.prevPath', '/list');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');

  async function handleLoginSubmit(e) {
    e.preventDefault();
    let formErrors = false;
    if (loginPassword.length < 6 || loginPassword.lenght > 255) {
      formErrors = true;
      toast.error('Senha Invalida');
    }
    if (!isEmail(loginEmail)) {
      formErrors = true;
      toast.error('Email invalido');
    }
    if (formErrors) return;
    dispatch(actions.loginRequest({ loginEmail, loginPassword, prevPath }));
  }

  return (
    <LoginDiv>
      <Form onSubmit={handleLoginSubmit}>
        <Input
          type="text"
          placeholder="Usuario"
          value={loginEmail}
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={loginPassword}
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />
        <BtnLogin type="submit">Entrar</BtnLogin>
      </Form>
    </LoginDiv>
  );
}

export default Login;
