import * as types from '../types';

export function changeLetter(payload) {
  return {
    type: types.CHANGE_LETTER,
    payload,
  };
}

export function changePage(payload) {
  return {
    type: types.CHANGE_PAGE,
    payload,
  };
}
