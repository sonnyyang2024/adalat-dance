import React from 'react';
import { NavLink } from 'react-router-dom';

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
        <NavLink className="nav-bar__link" exact to="/">Home</NavLink>
      </li>
      <li className="nav-bar__item">
        <NavLink className="nav-bar__link" to={`/dance/${BELLYDANCE_ID}`}>
          Bellydance
        </NavLink>
      </li>
      <li className="nav-bar__item">
        <NavLink className="nav-bar__link" to={`/dance/${BOLLYWOOD_ID}`}>
          Bollywood
        </NavLink>
      </li>
      <li className="nav-bar__item">
        <NavLink className="nav-bar__link" to={`/dance/${UYGHUR_ID}`}>
          Uyghur
        </NavLink>
      </li>
      <li className="nav-bar__item">
        <NavLink className="nav-bar__link" to="/about">
          About
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
