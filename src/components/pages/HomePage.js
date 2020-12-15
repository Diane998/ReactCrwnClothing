import React from 'react';
import styled from 'styled-components';
import DirectoryContainer from '../../containers/DirectoryContainer';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

const HomePage = () => (
  <HomePageContainer>
    <DirectoryContainer />
  </HomePageContainer>
);

export default HomePage;
