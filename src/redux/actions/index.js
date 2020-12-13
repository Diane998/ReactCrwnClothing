import {
  SET_CURRENT_USER,
  TOGGLE_CART_VISIBILITY,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM
} from './types';

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
