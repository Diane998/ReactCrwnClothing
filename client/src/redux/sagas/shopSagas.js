import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE
} from '../actions/shopActionTypes';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../config/firebase';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put({ type: FETCH_COLLECTIONS_SUCCESS, payload: collectionsMap });
  } catch (err) {
    yield put({ type: FETCH_COLLECTIONS_FAILURE, payload: err });
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
