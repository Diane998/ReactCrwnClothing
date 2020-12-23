import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundary from '../Errorboundary';
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
      <ErrorBoundary>
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
      </ErrorBoundary>
    </div>
  );
};

export default ShopPage;
