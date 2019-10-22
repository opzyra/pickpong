import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CallbackPage from './pages/CallbackPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path="/callback" component={CallbackPage} exact />
    </Switch>
  );
}

export default App;
