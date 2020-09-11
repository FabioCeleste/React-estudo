import styled from 'styled-components';
import { primaryDarkColor, primaryColor } from '../../configs/colors';

export const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  background: ${primaryColor};
  align-items: center;
  height: auto;
`;

export const Brand = styled.h1`
  font-size: 1.4em;
  font-weight: bold;
  padding: 15px 0 15px 60px;
  color: #e7e7e7;
  cursor: pointer;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const Nav = styled.ul`
  display: flex;
`;

export const Register = styled.a`
  color: #e7e7e7;
  background: ${primaryDarkColor};
  border-radius: 8px;
  padding: 10px 15px;
`;

export const NavLi = styled.li`
  padding: 5px 30px;
  @media (max-width: 600px) {
    padding: 5px;
  }
`;

export const Login = styled.a`
  color: #e7e7e7;
  border-radius: 8px;
`;

export const Input = styled.input`
  font-size: 20px;
  margin-right: 20px;
`;
export const Btn = styled.button`
  background: ${primaryDarkColor};
  margin-right: 20px;
`;
