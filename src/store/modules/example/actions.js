import * as types from '../types';

export function clickRegister() {
  return {
    type: types.CADASTRO,
  };
}

export function clickLogin() {
  return {
    type: types.LOGIN,
  };
}
