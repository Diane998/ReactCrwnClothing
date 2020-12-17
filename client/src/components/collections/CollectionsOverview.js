import React from 'react';

import styled from 'styled-components';
import CollectionPreview from './CollectionPreview';

const CollectionsOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} id={id} {...otherProps} />
    ))}
  </CollectionsOverviewContainer>
);

export default CollectionsOverview;
