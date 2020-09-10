import React from 'react';
import { useSelector } from 'react-redux';

import history from '../../services/history';

import { Container } from './styles';

import Login from '../../components/Login';
import Register from '../../components/Register';

function Home() {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <Container>
        <Login />
        <Register />
      </Container>
    </>
  );
}

export default Home;
