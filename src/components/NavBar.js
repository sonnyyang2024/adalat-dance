import React from 'react';
import { Link } from 'react-router-dom';

import {
  BOLLYWOOD_ID,
  BELLYDANCE_ID,
  UYGHUR_ID
} from '../constants';

import './NavBar.scss';

const NavBar = () => (
  <nav className="nav-bar">
    <ul className="nav-bar__list">
      <li className="nav-bar__item">
        <Link className="nav-bar__link" to="/">Home</Link>
      </li>
      <li className="nav-bar__item">
        <Link className="nav-bar__link" to={`/dance/${BELLYDANCE_ID}`}>
          Bellydance
        </Link>
      </li>
      <li className="nav-bar__item">
        <Link className="nav-bar__link" to={`/dance/${BOLLYWOOD_ID}`}>
          Bollywood
        </Link>
      </li>
      <li className="nav-bar__item">
        <Link className="nav-bar__link" to={`/dance/${UYGHUR_ID}`}>
          Uyghur
        </Link>
      </li>
      <li className="nav-bar__item">
        <Link className="nav-bar__link" to="/about">
          About
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
