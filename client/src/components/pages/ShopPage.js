import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

import Spinner from '../Spinner';

const CollectionOverviewContainer = lazy(() =>
  import('../../containers/CollectionsOverviewContainer')
);
const CollectionPageContainer = lazy(() =>
  import('../../containers/CollectionsPageContainer')
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          path={`${match.path}`}
          exact
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

export default ShopPage;
