import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  selectIsCollectionFetching,
  selectCollectionsForPreview
} from '../redux/selectors/shopSelector';
import WithSpinner from './WithSpinner';
import CollectionsOverview from '../components/collections/CollectionsOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
  collections: selectCollectionsForPreview
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionOverviewContainer;
