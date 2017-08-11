import { fork, all } from 'redux-saga/effects';

import userSaga from './userSaga';





export default function* saga() {
  yield all([
    fork(userSaga),
  ]);
};
