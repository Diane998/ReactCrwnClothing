import { SET_CURRENT_USER, TOGGLE_CART_VISIBILITY } from './types';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

export const toggleCartVisibility = () => ({
  type: TOGGLE_CART_VISIBILITY
});
