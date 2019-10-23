import React from 'react';
import styled from 'styled-components';
import Visual from '../components/main/Visual';
import Information from '../components/main/Information';
import Roulette from '../components/main/Roulette';

const MainBlock = styled.div``;

function MainPage() {
  return (
    <MainBlock>
      <Visual />
      <Information />
      <Roulette />
    </MainBlock>
  );
}

export default MainPage;
