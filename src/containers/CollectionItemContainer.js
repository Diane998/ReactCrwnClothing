import { connect } from 'react-redux';
import { addItem } from '../redux/actions';
import CollectionItem from '../components/collections/CollectionItem';

const CollectionItemContainer = connect(null, { addItem })(CollectionItem);

export default CollectionItemContainer;
