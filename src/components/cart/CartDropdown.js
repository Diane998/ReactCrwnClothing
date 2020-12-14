import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/selectors/cartSelectors';
import { toggleCartVisibility } from '../../redux/actions';

import styled from 'styled-components';
import Button from '../buttons/Button';
import CartItem from './CartItem';

const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

const EmptyMeassage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const StyledButton = styled(Button)`
  margin-top: auto;
`;

const CartDropdown = ({ cartItems, history, toggleCartVisibility }) => (
  <CartDropdownContainer>
    <CartItems>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMeassage>Your cart is empty</EmptyMeassage>
      )}
    </CartItems>
    <StyledButton
      onClick={() => {
        history.push('/checkout');
        toggleCartVisibility();
      }}
    >
      GO TO CHECKOUT
    </StyledButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(
  connect(mapStateToProps, { toggleCartVisibility })(CartDropdown)
);
