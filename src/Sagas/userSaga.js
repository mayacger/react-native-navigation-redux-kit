import { call, put, takeEvery, take, fork, all } from 'redux-saga/effects';


import {
  setUserInfo,
} from '../Actions/userActions';

import api from '../Utils/api';

function* fetchUserInfo(action) {
   try {
      const userInfo = yield call(api.getBio, action.payload.username);
      yield put(setUserInfo(userInfo));
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* watchFetchUserInfo () {
  while(true) {
    let data = yield take("USER_FETCH_REQUESTED");
    yield fork(fetchUserInfo, data)
  }
};

export default function* userSaga() {
  yield all([
    fork(watchFetchUserInfo),
  ])
}
