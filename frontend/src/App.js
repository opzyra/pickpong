import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { useAuthDispatch } from './contexts/auth/authContext';

import CallbackPage from './pages/CallbackPage';
import MainPage from './pages/MainPage';
import { fetchAuthUrl, fetchUser } from './contexts/auth/authAction';
import { fetchMissions } from './contexts/mission/missionAction';
import { useMissionDispatch } from './contexts/mission/missionContext';
import { useRewardDispatch } from './contexts/reward/rewardContext';
import { fetchRewards } from './contexts/reward/rewardAction';
import { useCommentDispatch } from './contexts/comment/commentContext';
import { fetchComments } from './contexts/comment/commentAction';

const AppBlock = styled.div`
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

function App() {
  const authDispatch = useAuthDispatch();
  const missionDispatch = useMissionDispatch();
  const rewardDispatch = useRewardDispatch();
  const commentDispatch = useCommentDispatch();

  useEffect(() => {
    fetchAuthUrl(authDispatch);
    fetchUser(authDispatch);
    fetchMissions(missionDispatch);
    fetchRewards(rewardDispatch);
    fetchComments(commentDispatch);
  }, [authDispatch, commentDispatch, missionDispatch, rewardDispatch]);

  return (
    <AppBlock>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/callback" component={CallbackPage} exact />
      </Switch>
    </AppBlock>
  );
}

export default App;
