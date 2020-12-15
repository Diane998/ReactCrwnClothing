import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  selectIsCollectionLoaded,
  selectCollection
} from '../redux/selectors/shopSelector';
import WithSpinner from './WithSpinner';
import CollectionPage from '../components/pages/CollectionPage';

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: selectIsCollectionLoaded(state),
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  };
};

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
