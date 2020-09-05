import React from 'react';

import { Container, NotFoundNumber, NotFoundText } from './styles';

function NotFound() {
  return (
    <Container>
      <NotFoundNumber>404</NotFoundNumber>
      <NotFoundText>Page Not Found!</NotFoundText>
    </Container>
  );
}

export default NotFound;
