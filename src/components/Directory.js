import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../redux/selectors/directorySelector';

import styled from 'styled-components';
import MenuItem from './MenuItem';

const DirectoryMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Directory = ({ sections }) => {
  const renderMenu = arr => {
    return arr.map(({ id, ...menuItem }) => (
      <MenuItem key={id} {...menuItem} />
    ));
  };

  return (
    <DirectoryMenuContainer>{renderMenu(sections)}</DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
