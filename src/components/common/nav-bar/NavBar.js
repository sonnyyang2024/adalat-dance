import React, { useState } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

// hooks
import useLanguage from '../../../hooks/useLanguage';

// data
import {
  BOLLYWOOD_ID,
  BELLYDANCE_ID,
  UYGHUR_ID
} from '../../../constants';

// styles
import './NavBar.scss';

const translationsByLanguage = {
  en: {
    home: 'Home',
    bellydance: 'Bellydance',
    uyghur: 'Uyghur Dance',
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
  // Use language
  const language = useLanguage();
  const {
    home,
    bellydance,
    uyghur,
    bollywood,
    about
  } = translationsByLanguage[language];

  // State
  const [listExpanded, setListExpanded] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setListExpanded(!listExpanded);
  };

  return (
    <nav className="nav-bar">
      <a
        href="/"
        className="nav-bar__toggle"
        onClick={handleToggle}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20"><path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"/></svg>
      </a>
      <ul
        className={classNames('nav-bar__list', {
          'list-expanded': listExpanded
        })}
      >
        <li className="nav-bar__item">
          <NavLink className="nav-bar__link" exact to="/">
            {home}
          </NavLink>
        </li>
        <li className="nav-bar__item">
          <NavLink className="nav-bar__link" to={`/dance/${BELLYDANCE_ID}`}>
            {bellydance}
          </NavLink>
        </li>
        <li className="nav-bar__item">
          <NavLink className="nav-bar__link" to={`/dance/${UYGHUR_ID}`}>
            {uyghur}
          </NavLink>
        </li>
        <li className="nav-bar__item">
          <NavLink className="nav-bar__link" to={`/dance/${BOLLYWOOD_ID}`}>
            {bollywood}
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
