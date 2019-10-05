import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.scss';
import PropTypes from 'prop-types';

const Dance = ({ match }) => (
  <div>
    <h2>Dance</h2>
    <p>{match.params.danceId}</p>
  </div>
);

Dance.propTypes = {
  match: PropTypes.object.isRequired,
};

const User = ({ name, age }) => (
  <div>
    <div>{name}</div>
    {
      age && (
        <div>
          {age} years old
        </div>
      )
    }
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};

User.defaultProps = {
  age: null
};

const Home = () => (
  <div>
    <h2>Home</h2>
    <User name="Arya" age={27} />
    <User name="Xuenan" />
  </div>
);

const About = () => (
  <h2>About Me</h2>
);

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
            <Link to="/dance/bollywooddance">Bollywood</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about" component={About} />
        <Route path="/dance/:danceId" component={Dance} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </div>
);

export default App;
