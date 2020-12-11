import React from 'react';
import './Authentication.scss';
import Signin from '../auth/Signin';
import Signup from '../auth/Signup';

const AuthenticationPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Signin />
      <Signup />
    </div>
  );
};

export default AuthenticationPage;
