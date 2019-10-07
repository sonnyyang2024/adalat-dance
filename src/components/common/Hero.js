import React from 'react';
import PropTypes from 'prop-types';

// utility
import { getImageUrl } from '../../utility';

// components
import Button from './Button';

// styles
import './Hero.scss';

const Hero = ({
  title,
  paragraphTemplate,
  buttonText,
  imageName
}) => (
  <div className="hero">
    <div className="hero__left">
      <div className="hero__left__content">
        <h1 className="hero__title">{title}</h1>
        {paragraphTemplate}
        <div className="hero__button-wrapper">
          <Button text={buttonText} link="/" />
        </div>
      </div>
    </div>
    <div className="hero__right">
      <img
        className="hero__image"
        src={getImageUrl(imageName)}
        alt={imageName}
        width="500"
        height="600"
      />
    </div>
  </div>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  paragraphTemplate: PropTypes.object,
  buttonText: PropTypes.string,
  imageName: PropTypes.string.isRequired
};

Hero.defaultProps = {
  paragraphTemplate: '',
  buttonText: null
};

export default Hero;
