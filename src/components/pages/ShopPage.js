import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CollectionOverviewContainer from '../../containers/CollectionsOverviewContainer';
import CollectionPageContainer from '../../containers/CollectionsPageContainer';

class ShopPage extends Component {
  componentDidMount() {
    this.props.fetchCollectionsStart();
    // console.log(this.props);
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          path={`${match.path}`}
          exact
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

export default ShopPage;
