import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getImageUrl } from '../../utility';

const BannerItem = ({
  name,
  description,
  imageName,
  linkTo
}) => (
  <Link className="banner-item" to={linkTo}>
    <div className="banner-item__fg">
      <h2 className="banner-item__name">
        {name}
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
  </Link>
);

BannerItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired
};

export default BannerItem;
