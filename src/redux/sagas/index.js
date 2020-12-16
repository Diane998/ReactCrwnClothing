import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './shopSaga';

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart)]);
}
