import React from 'react';

import styled from 'styled-components';
import MenuItem from './MenuItem';

const DirectoryMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...menuItem }) => (
      <MenuItem key={id} {...menuItem} />
    ))}
  </DirectoryMenuContainer>
);

export default Directory;
