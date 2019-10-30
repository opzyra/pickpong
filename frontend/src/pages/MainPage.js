import React, { useEffect } from 'react';
import styled from 'styled-components';
import qs from 'qs';

import Visual from '../components/main/Visual';
import Information from '../components/main/Information';
import Roulette from '../components/main/Roulette';
import Comment from '../components/main/Comment';
import Footer from '../components/main/Footer';
import LoginModal from '../components/main/LoginModal';
import Alert from '../components/common/Alert';
import RouletteModal from '../components/main/RouletteModal';
import RewardModal from '../components/main/RewardModal';

import { useAuthDispatch } from '../contexts/auth/authContext';
import { useMissionDispatch } from '../contexts/mission/missionContext';
import { useRewardDispatch } from '../contexts/reward/rewardContext';
import { useCommentDispatch } from '../contexts/comment/commentContext';

import { openAlert } from '../contexts/common/commonAction';
import { fetchAuthUrl, fetchUser } from '../contexts/auth/authAction';
import { fetchMissions } from '../contexts/mission/missionAction';
import { fetchRewards } from '../contexts/reward/rewardAction';
import { fetchComments } from '../contexts/comment/commentAction';
import { useCommonDispatch } from '../contexts/common/commonContext';

const MainBlock = styled.div``;

function MainPage({ location }) {
  const authDispatch = useAuthDispatch();
  const missionDispatch = useMissionDispatch();
  const rewardDispatch = useRewardDispatch();
  const commentDispatch = useCommentDispatch();
  const commonDispatch = useCommonDispatch();
  useEffect(() => {
    const { error } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    if (error) {
      openAlert(commonDispatch, 'error');
      return;
    }

    fetchAuthUrl(authDispatch);
    fetchUser(authDispatch);
    fetchMissions(missionDispatch);
    fetchRewards(rewardDispatch);
    fetchComments(commentDispatch);
  }, [
    authDispatch,
    commentDispatch,
    missionDispatch,
    rewardDispatch,
    location,
    commonDispatch,
  ]);

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
