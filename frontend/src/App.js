import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { useAuthDispatch } from './contexts/auth/authContext';

import CallbackPage from './pages/CallbackPage';
import MainPage from './pages/MainPage';
import { fetchAuthUrl, fetchUser } from './contexts/auth/authAction';
import { fetchMissions } from './contexts/mission/missionAction';
import { useMissionDispatch } from './contexts/mission/missionContext';

function App() {
  const authDispatch = useAuthDispatch();
  const missionDispatch = useMissionDispatch();

  useEffect(() => {
    fetchAuthUrl(authDispatch);
    fetchUser(authDispatch);
    fetchMissions(missionDispatch);
  }, [authDispatch, missionDispatch]);

  return (
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path="/callback" component={CallbackPage} exact />
    </Switch>
  );
}

export default App;
