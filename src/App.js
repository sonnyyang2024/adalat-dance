import React from 'react';

// styles
import './App.scss';

// components
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';

// pages
import HomePage from './components/pages/home-page/HomePage';
import DancePage from './components/pages/dance-page/DancePage';
import AboutPage from './components/pages/about-page/AboutPage';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          component={HomePage}
        />
        <Route
          path="/dance/:danceId"
          component={DancePage}
        />
        <Route
          exact
          path="/about"
          component={AboutPage}
        />
      </Switch>
    </Router>
    <Footer />
  </div>
);

export default App;
