import * as types from '../types';

const initialState = {
  letter: 'a',
  page: 1,
  refresh: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_LETTER: {
      const newState = { ...state };
      newState.letter = action.payload.letter;
      newState.page = 1;
      return newState;
    }
    case types.CHANGE_PAGE: {
      const newState = { ...state };
      newState.page = action.payload.page;
      return newState;
    }
    case types.REFRESH_PROFILE: {
      const newState = { ...state };
      newState.refresh = !newState.refresh;
      return newState;
    }
    default: {
      return initialState;
    }
  }
}
