import React from 'react';
import styled from 'styled-components';
import Signin from '../auth/Signin';
import Signup from '../auth/Signup';

const AuthenticationPageContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;

const AuthenticationPage = () => {
  return (
    <AuthenticationPageContainer>
      <Signin />
      <Signup />
    </AuthenticationPageContainer>
  );
};

export default AuthenticationPage;
