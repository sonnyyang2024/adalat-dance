import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.scss';

import Header from './components/common/header/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './components/pages/home-page/HomePage';
import DancePage from './components/pages/dance-page/DancePage';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <div className="page__content">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/dance/:danceId" component={DancePage} />
        </Switch>
      </div>
    </Router>
    <Footer />
  </div>
);

export default App;
