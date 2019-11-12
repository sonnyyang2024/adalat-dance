import React from 'react';
import classNames from 'classnames';

import NavBar from '../nav-bar/NavBar';
import LanguageSwitcher from '../language-switcher/LanguageSwitcher';
import useScrollIsAtTop from '../../../hooks/useScrollIsAtTop';

import './Header.scss';

const Header = () => {
  const scrollIsAtTop = useScrollIsAtTop();

  return (
    <div
      className={classNames('header', {
        'off-top': !scrollIsAtTop
      })}
    >
      <NavBar />
      <LanguageSwitcher />
    </div>
  );
}

export default Header;
