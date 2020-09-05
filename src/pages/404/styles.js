import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
  padding-bottom: 160px;
  @media (max-width: 600px) {
    padding-bottom: 0px;
  }
`;

export const NotFoundNumber = styled.h1`
  font-size: 250px;
  @media (max-width: 600px) {
    font-size: 160px;
  }
`;

export const NotFoundText = styled.p`
  font-size: 50px;
`;
