import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'util/history';
import Home from 'components/Home';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
