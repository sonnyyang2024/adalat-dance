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
    about: 'About',
    contact: 'Contact'
  },
  ch: {
    home: '首页',
    bellydance: '肚皮舞',
    uyghur: '维吾尔舞',
    bollywood: '宝莱坞舞',
    about: '关于',
    contact: '联系方式'
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
    about,
    contact
  } = translationsByLanguage[language];

  // State
  const [listExpanded, setListExpanded] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setListExpanded(!listExpanded);
  };

  const closeList = () => (setListExpanded(false));

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
          <NavLink
            className="nav-bar__link"
            exact
            to="/"
            onClick={closeList}
          >
            {home}
          </NavLink>
        </li>
        <li className="nav-bar__item">
          <NavLink
            className="nav-bar__link"
            to={`/dance/${BELLYDANCE_ID}`}
            onClick={closeList}
          >
            {bellydance}
          </NavLink>
        </li>
        <li className="nav-bar__item">
          <NavLink
            className="nav-bar__link"
            to={`/dance/${UYGHUR_ID}`}
            onClick={closeList}
          >
            {uyghur}
          </NavLink>
        </li>
        <li className="nav-bar__item">
          <NavLink
            className="nav-bar__link"
            to={`/dance/${BOLLYWOOD_ID}`}
            onClick={closeList}
          >
            {bollywood}
          </NavLink>
        </li>
        <li className="nav-bar__item">
          <NavLink
            className="nav-bar__link"
            to="/about"
            onClick={closeList}
          >
            {about}
          </NavLink>
        </li>
        <li className="nav-bar__item contact">
          <a
            className="nav-bar__link"
            href="#contact-form"
            onClick={closeList}
          >
            {contact}
          </a>
        </li>
      </ul>
      <a
        className="contact-button__mobile"
        href="#contact-form"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"/><path d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"/></svg>      
      </a>
    </nav>
  );
};

export default NavBar;
