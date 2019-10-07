import React from 'react';
import { NavLink } from 'react-router-dom';

// hooks
import useLanguage from './common/useLanguage';

// data
import {
  BOLLYWOOD_ID,
  BELLYDANCE_ID,
  UYGHUR_ID
} from '../constants';

// styles
import './NavBar.scss';

const translationsByLanguage = {
  en: {
    home: 'Home',
    bellydance: 'Bellydance',
    uyghur: 'Uyghur',
    bollywood: 'Bollywood',
    about: 'About'
  },
  ch: {
    home: '首页',
    bellydance: '肚皮舞',
    uyghur: '维吾尔舞',
    bollywood: '宝莱坞舞',
    about: '关于'
  }
};

const NavBar = () => {
  const language = useLanguage();
  const {
    home,
    bellydance,
    uyghur,
    bollywood,
    about
  } = translationsByLanguage[language];

  return (
    <nav className="nav-bar">
      <ul className="nav-bar__list">
        <li className="nav-bar__item">
          <NavLink className="nav-bar__link" exact to="/">{home}</NavLink>
        </li>
        <li className="nav-bar__item">
          <NavLink className="nav-bar__link" to={`/dance/${BELLYDANCE_ID}`}>
            {bellydance}
          </NavLink>
        </li>
        <li className="nav-bar__item">
          <NavLink className="nav-bar__link" to={`/dance/${BOLLYWOOD_ID}`}>
            {bollywood}
          </NavLink>
        </li>
        <li className="nav-bar__item">
          <NavLink className="nav-bar__link" to={`/dance/${UYGHUR_ID}`}>
            {uyghur}
          </NavLink>
        </li>
        <li className="nav-bar__item">
          <NavLink className="nav-bar__link" to="/about">
            {about}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
