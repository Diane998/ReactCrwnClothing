import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './shopSaga';
import { userSagas } from './userSaga';

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}
