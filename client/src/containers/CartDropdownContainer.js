import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../redux/selectors/cartSelectors';
import { toggleCartVisibility } from '../redux/actions/cartActions';
import CartDropdown from '../components/cart/CartDropdown';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const CartDropdownContainer = withRouter(
  connect(mapStateToProps, { toggleCartVisibility })(CartDropdown)
);

export default CartDropdownContainer;
