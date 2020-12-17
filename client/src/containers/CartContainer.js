import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartVisibility } from '../redux/actions/cartActions';
import { selectCartItemsCount } from '../redux/selectors/cartSelectors';
import Cart from '../components/cart/Cart';

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const CartContainer = connect(mapStateToProps, { toggleCartVisibility })(Cart);

export default CartContainer;
