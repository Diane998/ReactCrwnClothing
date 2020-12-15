import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../redux/selectors/directorySelector';
import Directory from '../components/Directory';

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

const DirectoryContainer = connect(mapStateToProps)(Directory);

export default DirectoryContainer;
