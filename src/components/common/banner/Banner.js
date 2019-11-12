import React from 'react';
import PropTypes from 'prop-types';
import BannerItem from '../banner-item/BannerItem';

import './Banner.scss';

const Banner = ({
  title,
  list
}) => (
  <div className="banner">
    <div className="container">
      <h1 className="banner__title">
        {title}
      </h1>
      <div className="banner__list">
        {
          list.map((item) => (
            <BannerItem
              key={item.name}
              name={item.name}
              description={item.description}
              imageName={item.imageName}
              linkTo={item.linkTo}
            />
          ))
        }
      </div>
    </div>
  </div>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
};

export default Banner;
