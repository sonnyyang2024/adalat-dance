import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from './common/Button'
import './App.scss'

const App = () => {
  return (
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
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dance/:danceId" component={Dance}>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <Button text="Book Private Class" link="#"></Button>
    </div>
  )
}

const Dance = ({ match }) => {
  return (
    <div>
      <h2>Dance</h2>
      <p>{match.params.danceId}</p>
    </div>
  )
}

const About = () => {
  return <h2>About Me</h2>
}

export default App;
