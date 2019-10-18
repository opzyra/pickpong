import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./Login";
import Callback from "./Callback";

function App() {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/callback" component={Callback} exact />
    </Switch>
  );
}

export default App;
