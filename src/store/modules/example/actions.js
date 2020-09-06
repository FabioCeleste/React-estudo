import * as types from '../types';

export function clickRegisterRequest() {
  return {
    type: types.CADASTRO_REQUEST,
  };
}
export function clickRegisterSucess() {
  return {
    type: types.CADASTRO_SUCESS,
  };
}
export function clickRegisterFailure() {
  return {
    type: types.CADASTRO_FAILURE,
  };
}

export function clickLogin() {
  return {
    type: types.LOGIN_SUCESS,
  };
}
