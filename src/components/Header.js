import React from 'react';

import NavBar from './NavBar';
import LanguageSwitcher from './common/LanguageSwitcher';

import './Header.scss';

const Header = () => (
  <div className="header">
    <NavBar />
    <LanguageSwitcher />
  </div>
);

export default Header;
