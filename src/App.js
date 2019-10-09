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

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <div className="page__content">
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
        </Switch>
      </div>
    </Router>
    <Footer />
  </div>
);

export default App;
