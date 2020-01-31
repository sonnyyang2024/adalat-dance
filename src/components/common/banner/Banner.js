import React from 'react';
import Fade from 'react-reveal/Fade';
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
      <Fade bottom>
        <h1 className="banner__title">
          {title}
        </h1>
      </Fade>
      <div className="banner__list">
        {
          list.map((item, index) => (
            <BannerItem
              key={item.name}
              name={item.name}
              description={item.description}
              imageName={item.imageName}
              linkTo={item.linkTo}
              bannerIndex={index}
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
