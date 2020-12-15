import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/selectors/userSelector';
import App from '../components/App';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const AppContainer = connect(mapStateToProps, { setCurrentUser })(App);

export default AppContainer;
