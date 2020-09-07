import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Profile = styled.div`
  flex: 1 1 400px;
  height: 100vh;
  width: 30%;
  background: blue;
  color: white;
`;
export const Main = styled.div`
  flex: 2 1 400px;
  height: 100vh;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 60px;
  padding: 35px 0;
`;
