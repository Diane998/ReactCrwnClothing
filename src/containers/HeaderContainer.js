import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartVisibility } from '../redux/selectors/cartSelectors';
import { selectCurrentUser } from '../redux/selectors/userSelector';
import Header from '../components/Header';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartVisibility
});

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
