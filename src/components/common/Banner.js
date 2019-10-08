import React from 'react';
import PropTypes from 'prop-types';
import BannerItem from './BannerItem';

const Banner = ({
  title,
  list
}) => (
  <div className="banner">
    <h1>{title}</h1>
    <div className="banner__list">
      {
        list.map((item) => (
          <BannerItem name={item.name} description={item.description} />
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
