import React from 'react';

import styled from 'styled-components';

import DirectoryContainer from '../../containers/DirectoryContainer';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = () => (
  <HomePageContainer>
    <DirectoryContainer />
  </HomePageContainer>
);

export default HomePage;
