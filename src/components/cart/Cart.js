import React from 'react';
import { connect } from 'react-redux';
import { toggleCartVisibility } from '../../redux/actions';

import './Cart.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartItems } from '../../redux/cartSelectors';

const Cart = ({ toggleCartVisibility, itemCount }) => (
  <div onClick={toggleCartVisibility} className="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = state => ({ itemCount: selectCartItems(state) });

export default connect(mapStateToProps, { toggleCartVisibility })(Cart);
