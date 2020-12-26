import React from 'react';

import styled from 'styled-components';

import CollectionItemContainer from '../../containers/CollectionItemContainer';

const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

const Preview = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    width: 90vw;
    overflow-x: scroll;
  }
`;

const CollectionPreview = ({ items, title, history, match, routeName }) => {
  return (
    <CollectionPreviewContainer>
      <Title onClick={() => history.push(`${match.path}/${routeName}`)}>
        {title.toUpperCase()}
      </Title>
      <Preview>
        {items
          .filter((item, i) => i < 4)
          .map(item => (
            <CollectionItemContainer key={item.id} item={item} />
          ))}
      </Preview>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
