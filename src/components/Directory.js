import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../redux/selectors/directorySelector';

import './Directory.scss';
import MenuItem from './MenuItem';

const Directory = ({ sections }) => {
  const renderMenu = arr => {
    return arr.map(({ id, ...menuItem }) => (
      <MenuItem key={id} {...menuItem} />
    ));
  };

  return <div className="directory-menu">{renderMenu(sections)}</div>;
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
