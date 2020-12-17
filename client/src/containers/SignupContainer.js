import { connect } from 'react-redux';
import { signUpStart } from '../redux/actions/usersActions';
import Signup from '../components/auth/Signup';

const SignupContainer = connect(null, { signUpStart })(Signup);

export default SignupContainer;
