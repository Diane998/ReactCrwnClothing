import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../redux/actions';
import CheckoutItem from '../components/checkout/CheckoutItem';

const CheckoutItemContainer = connect(null, {
  clearItemFromCart,
  addItem,
  removeItem
})(CheckoutItem);

export default CheckoutItemContainer;
