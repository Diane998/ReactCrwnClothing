import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../collections/CollectionsOverview';
import CollectionPage from './collection/CollectionPage';

const ShopPage = ({ match }) => {
  console.log(match.path);
  return (
    <div className="shop-page">
      <Route path={`${match.path}`} exact component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
