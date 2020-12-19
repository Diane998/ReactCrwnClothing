import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  selectIsCollectionFetching,
  selectCollectionsForPreview
} from '../redux/selectors/shopSelector';

import CollectionsOverview from '../components/collections/CollectionsOverview';
import WithSpinner from './WithSpinner';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
  collections: selectCollectionsForPreview
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
