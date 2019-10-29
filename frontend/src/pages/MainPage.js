import React from 'react';
import styled from 'styled-components';
import Visual from '../components/main/Visual';
import Information from '../components/main/Information';
import Roulette from '../components/main/Roulette';
import Comment from '../components/main/Comment';
import Footer from '../components/main/Footer';
import LoginModal from '../components/main/LoginModal';
import Alert from '../components/common/Alert';
import RouletteModal from '../components/main/RouletteModal';
import RewardModal from '../components/main/RewardModal';

const MainBlock = styled.div``;

function MainPage() {
  return (
    <MainBlock>
      <Visual />
      <Information />
      <Roulette />
      <Comment />
      <Footer />
      <LoginModal />
      <RouletteModal />
      <RewardModal />
      <Alert />
    </MainBlock>
  );
}

export default MainPage;
