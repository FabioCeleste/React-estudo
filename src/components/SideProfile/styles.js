import styled from 'styled-components';
import * as colors from '../../configs/colors';

export const Container = styled.div`
  flex: 1 1 400px;
  height: 100vh;
  width: 30%;
  background: ${colors.primaryDarkColor};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Main = styled.div`
  padding-top: 100px;
`;
export const ProfPic = styled.div`
  width: 200px;
  height: 200px;
  background: black;
  border-radius: 50%;
`;
export const Info = styled.div`
  padding-top: 45px;
`;
export const Buttons = styled.div`
  padding-top: 45px;
`;
export const Button = styled.button`
  margin-left: 20px;
`;
export const Form = styled.form`
  padding-top: 25px;
  display: flex;
  align-self: flex-end;
  align-items: center;
  margin-right: 35px;
`;

export const Input = styled.input`
  padding: 5px 5px;
  margin-right: 20px;
`;
export const InputEdit = styled.input`
  padding: 5px 5px;
  margin-bottom: 20px;
`;
export const Edit = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
`;
