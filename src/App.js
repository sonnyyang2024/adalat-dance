import React from 'react';

// styles
import './App.scss';

// components
import {
  HashRouter as Router, // 【核心修改点 1】改用 HashRouter，彻底解决 GitHub Pages 二级目录兼容问题
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import LanguageSwitchingAnimation from './components/common/languageSwitchingAnimation/LanguageSwitchingAnimation';

// pages
import HomePage from './components/pages/home-page/HomePage';
import DancePage from './components/pages/dance-page/DancePage';
import AboutPage from './components/pages/about-page/AboutPage';

const App = () => (
  <div className="App">
    <LanguageSwitchingAnimation />
    {/* 【核心修改点 2】这里无需再写繁琐的 basename 网址，HashRouter 会自动完美兼容 */}
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
