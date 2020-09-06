import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CADASTRO_SUCESS: {
      console.log('cadastro');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    case types.CADASTRO_FAILURE: {
      console.log('epic fail');
      return state;
    }
    case types.CADASTRO_REQUEST: {
      return state;
    }

    case types.LOGIN_SUCESS: {
      console.log('login');
      return state;
    }
    default: {
      return state;
    }
  }
}
