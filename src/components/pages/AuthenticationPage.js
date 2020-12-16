import React from 'react';
import styled from 'styled-components';
import SigninContainer from '../../containers/SigninContainer';
import SignupContainer from '../../containers/SignupContainer';

const AuthenticationPageContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;

const AuthenticationPage = () => {
  return (
    <AuthenticationPageContainer>
      <SigninContainer />
      <SignupContainer />
    </AuthenticationPageContainer>
  );
};

export default AuthenticationPage;
