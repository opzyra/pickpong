import React from 'react';
import styled from 'styled-components';
import Visual from '../components/main/Visual';
import Information from '../components/main/Information';

const MainBlock = styled.div``;

function MainPage() {
  return (
    <MainBlock>
      <Visual />
      <Information />
    </MainBlock>
  );
}

export default MainPage;
