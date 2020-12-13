import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/selectors/cartSelectors';
import { toggleCartVisibility } from '../../redux/actions';

import Button from '../buttons/Button';
import './CartDropdown.scss';
import CartItem from './CartItem';

const CartDropdown = ({ cartItems, history, toggleCartVisibility }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <Button
      onClick={() => {
        history.push('/checkout');
        toggleCartVisibility();
      }}
    >
      GO TO CHECKOUT
    </Button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(
  connect(mapStateToProps, { toggleCartVisibility })(CartDropdown)
);
