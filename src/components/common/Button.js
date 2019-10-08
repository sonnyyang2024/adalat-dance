import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  text,
  link
}) => (
  <a className="button" href={link}>
    <span className="button__text">{text}</span>
  </a>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default Button;
