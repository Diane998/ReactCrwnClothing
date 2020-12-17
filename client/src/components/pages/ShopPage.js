import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import CollectionOverviewContainer from '../../containers/CollectionsOverviewContainer';
import CollectionPageContainer from '../../containers/CollectionsPageContainer';

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

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
};

export default ShopPage;
