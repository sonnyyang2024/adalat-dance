import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.scss';

// Pages
import DancePage from './components/pages/DancePage';

const App = () => (
  <div className="App">
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dance/bellydance">Bellydance</Link>
          </li>
          <li>
            <Link to="/dance/bollywood-dance">Bollywood</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/dance/:danceId" component={DancePage} />
      </Switch>
    </Router>
  </div>
);

export default App;
