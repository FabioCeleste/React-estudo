import { createGlobalStyle } from 'styled-components';
import { primaryColor, errorColor, sucessColor } from '../configs/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,400&display=swap');


  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body{
    font-family: 'Roboto Mono', monospace;
  }

  html, body, #root{
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 35px;
    font-weight: 700;
  }

  a{
    text-decoration: none;
    color: ${primaryColor};
  }
  ul{
    list-style: none;
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--success{
    background: ${sucessColor}
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--error{
    background: ${errorColor}
  }


`;
