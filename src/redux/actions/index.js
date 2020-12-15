import {
  SET_CURRENT_USER,
  TOGGLE_CART_VISIBILITY,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE
} from './types';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../config/firebase';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

export const toggleCartVisibility = () => ({
  type: TOGGLE_CART_VISIBILITY
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item
});

export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: item
});

export const fetchCollections = () => dispatch => {
  const collectionRef = firestore.collection('collections');
  dispatch({ type: FETCH_COLLECTIONS_START });

  collectionRef
    .get()
    .then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch({ type: FETCH_COLLECTIONS_SUCCESS, payload: collectionsMap });
    })
    .catch(err => {
      dispatch({ type: FETCH_COLLECTIONS_FAILURE, payload: err });
    });
};
