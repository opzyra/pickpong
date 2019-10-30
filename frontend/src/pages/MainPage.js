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

const MainBlock = styled.div`
  h1 {
    font-size: 40px;
    line-height: 52px;
  }

  h2 {
    font-size: 36px;
    line-height: 48px;
  }

  h3 {
    font-size: 32px;
    line-height: 44px;
  }

  h4 {
    font-size: 28px;
    line-height: 40px;
  }

  h5 {
    font-size: 24px;
    line-height: 36px;
  }

  h6 {
    font-size: 20px;
    line-height: 32px;
  }

  ${({ theme }) => theme.mobile`
    h1 {
      font-size: 32px;
      line-height: 44px;
    }

    h2 {
      font-size: 28px;
      line-height: 40px;
    }

    h3 {
      font-size: 24px;
      line-height: 36px;
    }

    h4 {
      font-size: 20px;
      line-height: 32px;
    }

    h5 {
      font-size: 16px;
      line-height: 28px;
    }

    h6 {
      font-size: 12px;
      line-height: 24px;
    }
  `}
`;

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
