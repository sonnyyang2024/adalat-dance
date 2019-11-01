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
          <div className="gallery__slider">
            <iframe 
              title="Video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/SPiJANRQ9EE?rel=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
            >
            </iframe>
          </div>
          {
            imageNames.map(imageName => (
              <div
                className="gallery__slider"
                key={imageName.id}
              >
                <img className="gallery__slider__content"
                  src={getImageUrl(imageName.name)}
                  alt={`Adalat Omar ${title} ${imageName.name}`}
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

