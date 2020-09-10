import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCESS: {
      const newState = { ...initialState };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      return newState;
    }
    case types.LOGIN_FAILURE: {
      return initialState;
    }
    case types.REGISTER_SUCCESS: {
      const newState = { ...state };
      newState.user.email = action.payload.email;
      newState.user.name = action.payload.user_name;
      return newState;
    }
    case types.REGISTER_FAILURE: {
      const newState = { ...state };
      return newState;
    }
    default: {
      return state;
    }
  }
}
