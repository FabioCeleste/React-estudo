import styled from 'styled-components';

export const Letter = styled.li`
  padding: 0 15px;
  font-size: 25px;
  cursor: pointer;

  &:hover {
    color: #777;
    font-size: 35px;
  }
`;
export const Letters = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Form = styled.form`
  padding-top: 25px;
  display: flex;
  align-self: flex-end;
  align-items: center;
  margin-left: 135px;
`;

export const Input = styled.input`
  padding: 5px 5px;
  margin-right: 20px;
`;
