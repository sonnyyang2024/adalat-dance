import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.scss';

import Header from './components/Header';

// Pages
import HomePage from './components/pages/HomePage';
import DancePage from './components/pages/dance-page/DancePage';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Switch>
        <div className="page__content">
          <Route path="/" exact component={HomePage} />
          <Route path="/dance/:danceId" component={DancePage} />
        </div>
      </Switch>
    </Router>
  </div>
);

export default App;
