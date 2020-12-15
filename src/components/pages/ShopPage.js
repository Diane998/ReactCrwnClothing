import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchCollections } from '../../redux/actions';
import {
  selectIsCollectionFetching,
  selectIsCollectionLoaded
} from '../../redux/selectors/shopSelector';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../collections/CollectionsOverview';
import CollectionPage from './collection/CollectionPage';
import Spinner from '../spinner/Spinner';

const CollectionsOverviewWithSpinner = Spinner(CollectionsOverview);
const CollectionPageWithSpinner = Spinner(CollectionPage);

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollections } = this.props;
    fetchCollections();
  }

  render() {
    const { match, isCollectionFetching } = this.props;

    return (
      <div className="shop-page">
        <Route
          path={`${match.path}`}
          exact
          render={props => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner
              isLoading={!selectIsCollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded
});

export default connect(mapStateToProps, { fetchCollections })(ShopPage);
