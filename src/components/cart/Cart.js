import React from 'react';
import { connect } from 'react-redux';
import { toggleCartVisibility } from '../../redux/actions';

import './Cart.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const Cart = ({ toggleCartVisibility }) => (
  <div onClick={toggleCartVisibility} className="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

export default connect(null, { toggleCartVisibility })(Cart);
