import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/selectors/userSelector';
import { checkUserSession } from '../redux/actions/usersActions';
import App from '../components/App';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const AppContainer = connect(mapStateToProps, { checkUserSession })(App);

export default AppContainer;
