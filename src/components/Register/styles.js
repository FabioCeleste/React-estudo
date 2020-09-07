import styled from 'styled-components';
import { primaryColor, primaryDarkColor } from '../../configs/colors';

export const RegisterDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: ${primaryDarkColor};
  height: 100vh;
  width: 60%;
  justify-content: center;
  @media (max-width: 1387px) {
    height: 1fr;
    width: 100vw;
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: none;
  margin: 10px;
  padding: 10px 70px;
  border-radius: 35px;
  font-size: 30px;

  &::-webkit-input-placeholder {
    font-size: 30px;
    color: #232323;
  }

  @media (max-width: 1387px) {
    margin: 0 5px 15px 5px;
    padding: 2px 15px;
    border-radius: 10px;
    font-size: 30px;
  }
`;

export const BtnRegister = styled.button`
  background: ${primaryColor};
  border: none;
  margin: 10px;
  padding: 10px 70px;
  border-radius: 35px;
  font-size: 30px;
  @media (max-width: 1387px) {
    margin: 0 5px 15px 5px;
    padding: 2px 15px;
    border-radius: 10px;
    font-size: 30px;
  }
`;
