import * as types from '../types';

const initialState = {
  letter: 'a',
  page: 1,
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

    default: {
      return initialState;
    }
  }
}
