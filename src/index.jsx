import React from 'react';
import { render } from 'react-dom';
import { Home } from './components/Home/Home.jsx';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

const routes = [{ component: Home, path: '/', exact: true }];
const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route {...route} key={route.path} />
        ))}
      </Switch>
    </Router>
  );
};
render(<App />, document.querySelector('#app'));
