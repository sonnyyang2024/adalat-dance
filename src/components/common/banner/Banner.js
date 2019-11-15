import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import BannerItem from '../banner-item/BannerItem';

import './Banner.scss';

const Banner = ({
  type,
  title,
  list
}) => (
  <div
    className={classnames('banner', {
      'in-page': type === 'in-page'
    })}
  >
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
  list: PropTypes.array.isRequired,
  type: PropTypes.string
};

export default Banner;
