import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { getImageUrl } from '../../utility';

import Button from './Button';

const Hero = ({
  title,
  paragraphTemplate,
  buttonText,
  imageName
}) => (
  <div className="hero">
    <div className="hero__left">
      <h1 className="hero__title">{title}</h1>
      <Fragment>
        {paragraphTemplate}
      </Fragment>
      <Button text={buttonText} />
    </div>
    <div className="hero__right">
      <img
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
  paragraphTemplate: PropTypes.string,
  buttonText: PropTypes.string,
  imageName: PropTypes.string.isRequired
};

Hero.defaultProps = {
  paragraphTemplate: '',
  buttonText: null
};

export default Hero;
