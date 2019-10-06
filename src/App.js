import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {
  BOLLYWOOD_ID,
  BELLYDANCE_ID,
  UYGHUR_ID
} from './constants';

import './App.scss';

// Common
import LanguageSwitcher from './components/common/LanguageSwitcher';

// Pages
import HomePage from './components/pages/HomePage';
import DancePage from './components/pages/dance-page/DancePage';
import TestPage from './components/pages/TestPage';

const App = () => (
  <div className="App">
    <LanguageSwitcher />
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={`/dance/${BELLYDANCE_ID}`}>
              Bellydance
            </Link>
          </li>
          <li>
            <Link to={`/dance/${BOLLYWOOD_ID}`}>
              Bollywood
            </Link>
          </li>
          <li>
            <Link to={`/dance/${UYGHUR_ID}`}>
              Uyghur
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/dance/:danceId" component={DancePage} />
        <Route path="/test" component={TestPage} />
      </Switch>
    </Router>
  </div>
);

export default App;
