import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

import axios from '../../services/axios';
import { LoginDiv, Form, Input, BtnLogin } from './styles';
import * as actions from '../../store/modules/auth/actions';

function Login(props) {
  const dispatch = useDispatch();
  const prevPath = get(props, 'location.state.prevPath', '/list');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [isForgot, setIsForgot] = useState(false);

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

  function handleForgotSubmit(e) {
    e.preventDefault();
    setIsForgot(!isForgot);
  }
  async function requestNewPass(e) {
    e.preventDefault();
    await axios.post('/resetone', { email: loginEmail });
    alert('verifique o seu email para troca de senha');
    setIsForgot(false);
  }

  return (
    <LoginDiv>
      {!isForgot && (
        <Form>
          <Input
            type="text"
            placeholder="Email"
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
          <BtnLogin type="submit" onClick={handleLoginSubmit}>
            Entrar
          </BtnLogin>
          <BtnLogin type="submit" onClick={handleForgotSubmit}>
            Esqueci Minha Senha
          </BtnLogin>
        </Form>
      )}
      {isForgot && (
        <Form>
          <Input
            type="text"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
          />
          <BtnLogin onClick={requestNewPass}>Troca Senha</BtnLogin>
          <BtnLogin type="submit" onClick={handleForgotSubmit}>
            Cancelar
          </BtnLogin>
        </Form>
      )}
    </LoginDiv>
  );
}

export default Login;
