import React from 'react';

import NavBar from '../nav-bar/NavBar';
import LanguageSwitcher from '../language-switcher/LanguageSwitcher';

import './Header.scss';

const Header = () => (
  <div className="header">
    <NavBar />
    <LanguageSwitcher />
  </div>
);

export default Header;
