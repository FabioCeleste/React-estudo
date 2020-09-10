import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
  try {
    const { loginEmail, loginPassword } = payload;

    const response = yield call(axios.post, '/token', {
      email: loginEmail,
      password: loginPassword,
    });
    yield put(actions.loginSucess({ ...response.data }));
    toast.success(`Seja Bem Vindo ${response.data.user.name}`);
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    history.push(payload.prevPath);
  } catch (e) {
    toast.error('Usuario ou senha invalida');
    yield put(actions.loginFailure);
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function* registerRequest({ payload }) {
  const { newName, newEmail } = payload;

  try {
    if (newName) {
      yield call(axios.put, '/update', {
        email: newEmail,
        user_name: newName,
      });
      toast.success('Dados Atualizados');
      yield put(
        actions.registerSuccess({ user_name: newName, email: newEmail })
      );
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    if (errors.length > 0) {
      errors.map((error) => {
        return toast.error(error);
      });
    } else {
      toast.error(e);
    }
    yield put(actions.loginFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
