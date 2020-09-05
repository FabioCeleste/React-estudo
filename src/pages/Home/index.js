import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../store/modules/example/actions';
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
  const dispatch = useDispatch();

  const botaoClicado = useSelector((state) => console.log(state));

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(actions.clickRegister());
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(actions.clickLogin());
  };

  return (
    <>
      <Container>
        <Login>
          <Form action="submit">
            <Input type="text" placeholder="Usuario" />
            <Input type="password" placeholder="Senha" />
            <BtnLogin type="submit" onClick={handleLogin}>
              Entrar
            </BtnLogin>
          </Form>
        </Login>
        <Register>
          <Form action="submit">
            <Input type="text" placeholder="Usuario" />
            <Input type="text" placeholder="E-mail" />
            <Input type="password" placeholder="Senha" />
            <BtnRegister type="submit" onClick={handleRegister}>
              Cadastrar
            </BtnRegister>
          </Form>
        </Register>
      </Container>
    </>
  );
}

export default Home;
