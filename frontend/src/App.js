import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { useAuthDispatch } from './contexts/auth/authContext';

import CallbackPage from './pages/CallbackPage';
import MainPage from './pages/MainPage';
import { fetchAuthUrl, fetchUser } from './contexts/auth/authAction';
import { fetchMissions } from './contexts/mission/missionAction';
import { useMissionDispatch } from './contexts/mission/missionContext';
import { useRewardDispatch } from './contexts/reward/rewardContext';
import { fetchRewards } from './contexts/reward/rewardAction';

function App() {
  const authDispatch = useAuthDispatch();
  const missionDispatch = useMissionDispatch();
  const rewardDispatch = useRewardDispatch();

  useEffect(() => {
    fetchAuthUrl(authDispatch);
    fetchUser(authDispatch);
    fetchMissions(missionDispatch);
    fetchRewards(rewardDispatch);
  }, [authDispatch, missionDispatch, rewardDispatch]);

  return (
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path="/callback" component={CallbackPage} exact />
    </Switch>
  );
}

export default App;
