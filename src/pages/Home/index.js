import React from 'react';

import { Container } from './styles';
import Login from '../../components/Login';
import Register from '../../components/Register';

function Home() {
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
