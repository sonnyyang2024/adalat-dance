import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import NavBar from '../nav-bar/NavBar';
import LanguageSwitcher from '../language-switcher/LanguageSwitcher';
import useScrollIsAtTop from '../../../hooks/useScrollIsAtTop';
import useScrollToTopOnRouteChange from '../../../hooks/useScrollToTopOnRouteChange';

import './Header.scss';

const Header = () => {
  const scrollIsAtTop = useScrollIsAtTop();
  useScrollToTopOnRouteChange();

  return (
    <div
      className={classNames('header', {
        'off-top': !scrollIsAtTop
      })}
      id="header"
    >
      <NavLink className="header__text--mobile" exact to="/">
        <h1>
          Adalat Omar
        </h1>
      </NavLink>
      <NavBar />
      <LanguageSwitcher />
    </div>
  );
}

export default Header;
