import styled from 'styled-components';
import * as color from '../../configs/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${color.primaryDarkColor};
  height: 100vh;
  width: 100%;
  justify-content: center;
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
`;

export const Btn = styled.button`
  background: ${color.primaryColor};
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
