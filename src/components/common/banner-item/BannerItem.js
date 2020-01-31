import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

import { getImageUrl } from '../../../utility';

const BannerItem = ({
  name,
  description,
  imageName,
  linkTo,
  bannerIndex
}) => (
  <Fade delay={bannerIndex * 600 + 200} duration={1500}>
    <a className="banner-item" href={linkTo}>
      <div className="banner-item__fg">
        <h2 className="banner-item__name">
          {name}
          <svg
            className="banner-item__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="31.623"
            height="20"
            viewBox="0 0 31.623 20"
          >
            <g transform="translate(0 -89.975)"><g transform="translate(0 89.975)"><path d="M0,99.975a1.111,1.111,0,0,0,1.111,1.111H27.864l-7.008,7a1.108,1.108,0,0,0,1.57,1.563l8.887-8.894a1.148,1.148,0,0,0,0-1.57L22.419,90.3a1.11,1.11,0,1,0-1.57,1.57l7,7H1.1A1.1,1.1,0,0,0,0,99.975Z" transform="translate(0 -89.975)"/></g></g>
          </svg>
        </h2>
        <p className="banner-item__description">
          {description}
        </p>
      </div>
      <img
        className="banner-item__image"
        src={getImageUrl(imageName)}
        alt={imageName}
        width="300"
        height="300"
      />
    </a>
  </Fade>
);

BannerItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  bannerIndex: PropTypes.number.isRequired
};

export default BannerItem;
