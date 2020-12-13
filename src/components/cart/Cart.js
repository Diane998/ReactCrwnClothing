import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartVisibility } from '../../redux/actions';

import './Cart.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/selectors/cartSelectors';

const Cart = ({ toggleCartVisibility, itemCount }) => (
  <div onClick={toggleCartVisibility} className="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, { toggleCartVisibility })(Cart);
