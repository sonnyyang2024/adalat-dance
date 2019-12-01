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
import Button from './components/common/button/Button';

// pages
import HomePage from './components/pages/home-page/HomePage';
import DancePage from './components/pages/dance-page/DancePage';

// hooks
import { byLanguage } from './utility';

const callToAction = byLanguage({
  en: 'Contact Adalat',
  ch: '联系Adalat'
});

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
    <div className="contact-button__mobile">
      <Button text="📞" link="#contact-form" />
    </div>
    <Footer />
  </div>
);

export default App;
