import React from 'react';
import Button from '../Button';
import './CartDropdown.scss';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <Button>GO TO CHECKOUT</Button>
  </div>
);

export default CartDropdown;
