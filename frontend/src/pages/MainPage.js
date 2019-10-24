import React from 'react';
import styled from 'styled-components';
import Visual from '../components/main/Visual';
import Information from '../components/main/Information';
import Roulette from '../components/main/Roulette';
import Comment from '../components/main/Comment';
import Footer from '../components/main/Footer';

const MainBlock = styled.div``;

function MainPage() {
  return (
    <MainBlock>
      <Visual />
      <Information />
      <Roulette />
      <Comment />
      <Footer />
    </MainBlock>
  );
}

export default MainPage;
