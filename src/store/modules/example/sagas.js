import { call, put, all, takeLatest } from 'redux-saga/effects';

import * as actions from './actions';
import * as types from '../types';

const requisicao = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

function* exampleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.clickRegisterSucess());
  } catch {
    yield put(actions.clickRegisterFailure());
  }
}

export default all([takeLatest(types.CADASTRO_REQUEST, exampleRequest)]);
