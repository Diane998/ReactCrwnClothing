import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../redux/actions/shopActions';
import ShopPage from '../components/pages/ShopPage';

const ShopPageContainer = connect(null, { fetchCollectionsStart })(ShopPage);

export default ShopPageContainer;
