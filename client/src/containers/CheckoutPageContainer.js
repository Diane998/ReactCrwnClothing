import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal
} from '../redux/selectors/cartSelectors';
import CheckoutPage from '../components/pages/CheckoutPage';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

const CheckoutPageContainer = connect(mapStateToProps)(CheckoutPage);

export default CheckoutPageContainer;
