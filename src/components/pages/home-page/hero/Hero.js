import React from 'react';
import PropTypes from 'prop-types';

// utility
import { getImageUrl } from '../../../../utility';

// components
import Button from '../../../common/button/Button';

// styles
import './Hero.scss';

const Hero = ({
  title,
  subtitle,
  information,
  callToAction,
  imageName
}) => (
  <div className="hero">
    <div className="container">
      <div className="hero__left">
        <div className="hero__left__content">
          <h1 className="hero__title">{title}</h1>
          <p className="hero__subtitle">{subtitle}</p>
          {
            information && (
              <div className="hero__description">
                {information}
              </div>
            )
          }
          {
            callToAction && (
              <div className="hero__button-wrapper">
                <Button text={callToAction} link="#contact-form" />
              </div>
            )
          }
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
  </div>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  information: PropTypes.element,
  callToAction: PropTypes.string,
  imageName: PropTypes.string.isRequired
};

Hero.defaultProps = {
  information: null,
  callToAction: null
};

export default Hero;
