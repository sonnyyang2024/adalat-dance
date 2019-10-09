import React from 'react';
import PropTypes from 'prop-types';

import { getImageUrl } from '../../../utility';

const BannerItem = ({
  name,
  description,
  imageName
}) => (
  <div className="banner-item">
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
  </div>
);

BannerItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired
};

export default BannerItem;
