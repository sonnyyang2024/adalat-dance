import React from 'react';
import PropTypes from 'prop-types';
import BannerItem from '../banner-item/BannerItem';

import './Banner.scss';

const Banner = ({
  title,
  list
}) => (
  <div className="container banner">
    <h1 className="banner__title">{title}</h1>
    <div className="banner__list">
      {
        list.map((item) => (
          <BannerItem name={item.name} description={item.description} imageName={item.imageName} />
        ))
      }
    </div>
  </div>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
};

export default Banner;
