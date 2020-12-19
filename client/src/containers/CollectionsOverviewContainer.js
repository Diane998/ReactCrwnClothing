import React from 'react';
import { useQuery, gql } from '@apollo/client';

import CollectionsOverview from '../components/collections/CollectionsOverview';
import Spinner from '../components/Spinner';

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionsOverviewContainer = () => {
  const { loading, data } = useQuery(GET_COLLECTIONS);

  return loading ? (
    <Spinner />
  ) : (
    <CollectionsOverview collections={data.collections} />
  );
};

export default CollectionsOverviewContainer;
