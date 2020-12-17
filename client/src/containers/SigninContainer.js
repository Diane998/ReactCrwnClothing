import { connect } from 'react-redux';
import {
  googleSignInStart,
  emailSignInStart
} from '../redux/actions/usersActions';
import Signin from '../components/auth/Signin';

const SigninContainer = connect(null, { googleSignInStart, emailSignInStart })(
  Signin
);

export default SigninContainer;
