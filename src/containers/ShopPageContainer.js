import { connect } from 'react-redux';
import { fetchCollections } from '../redux/actions';
import ShopPage from '../components/pages/ShopPage';

const ShopPageContainer = connect(null, { fetchCollections })(ShopPage);

export default ShopPageContainer;
