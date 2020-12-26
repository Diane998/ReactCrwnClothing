import React from 'react';

import styled from 'styled-components';
import CollectionPreviewContainer from '../../containers/CollectionPreviewContainer';

const CollectionsOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreviewContainer key={id} id={id} {...otherProps} />
    ))}
  </CollectionsOverviewContainer>
);

export default CollectionsOverview;
