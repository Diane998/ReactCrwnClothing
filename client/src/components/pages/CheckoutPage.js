import React from 'react';
import styled from 'styled-components';
import StripeCheckoutButton from '../buttons/StripeButton';
import CheckoutItemContainer from '../../containers/CheckoutItemContainer';

const CheackoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 1240px) {
    width: 100%;
    margin: 50px auto;
  }
`;

const Header = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 1240px) {
    width: 22%;

    &:last-child {
      width: 12%;
    }
  }
`;

const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

const Warning = styled.div`
  color: red;
  font-size: 22px;
  margin: 15px 0;
`;

const CheckoutPage = ({ cartItems, total }) => (
  <CheackoutPageContainer>
    <Header>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Descriptiion</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </Header>

    {cartItems.map(cartItem => (
      <CheckoutItemContainer key={cartItem.id} cartItem={cartItem} />
    ))}

    <Total>TOTAL: ${total}</Total>
    <Warning>
      *Please use the following credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: Any future data - CVV: 123
    </Warning>
    <StripeCheckoutButton price={total} />
  </CheackoutPageContainer>
);

export default CheckoutPage;
