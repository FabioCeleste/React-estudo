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

export function childLetter(payload) {
  return {
    type: types.CHILD_LETTER,
    payload,
  };
}
