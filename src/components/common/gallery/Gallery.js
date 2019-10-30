import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import { getImageUrl } from '../../../utility';

import './Gallery.scss';

const Gallery = ({
  title,
  description,
  imageNames
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="gallery">
      <div className="container">
        <h1 className="gallery__title">{title}</h1>
        <p>{description}</p>
        <Slider {...settings} className="gallery__slider">
          {
            imageNames.map(imageName => (
              <div className="gallery__image-wrapper">
                <img
                  src={getImageUrl(imageName)}
                  alt={`Adalat Omar ${title} ${imageName}`}
                />
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  );
};

Gallery.propTypes = {
  title: PropTypes.string.isRequired
}

export default Gallery;

