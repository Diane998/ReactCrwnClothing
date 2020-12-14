import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';
import { createStructuredSelector } from 'reselect';
import { selectCartVisibility } from '../redux/selectors/cartSelectors';
import { selectCurrentUser } from '../redux/selectors/userSelector';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../assets/crown.svg';
import Cart from './cart/Cart';
import CartDropdown from './cart/CartDropdown';

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const LinkLogo = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LinkLogo to="/">
      <Logo />
    </LinkLogo>
    <Options>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/authentication">SIGN IN</OptionLink>
      )}
      <Cart />
    </Options>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartVisibility
});

export default connect(mapStateToProps)(Header);
