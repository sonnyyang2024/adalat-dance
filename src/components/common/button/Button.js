import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  text,
  link
}) => (
  <Link className="button" to={link}>
    <span className="button__text">{text}</span>
  </Link>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default Button;
