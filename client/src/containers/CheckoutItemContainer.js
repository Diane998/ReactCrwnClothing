import { connect } from 'react-redux';
import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../redux/actions/cartActions';
import CheckoutItem from '../components/checkout/CheckoutItem';

const CheckoutItemContainer = connect(null, {
  clearItemFromCart,
  addItem,
  removeItem
})(CheckoutItem);

export default CheckoutItemContainer;
