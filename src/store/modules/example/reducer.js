const initialState = {
  botaoClicado: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CADASTRO': {
      console.log('cadastro');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    case 'LOGIN': {
      console.log('login');
      return state;
    }
    default: {
      return state;
    }
  }
}
