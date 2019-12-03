import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import { getImageUrl } from '../../../utility';

import './Gallery.scss';

const SampleNextArrow = ({
  onClick, 
  className
}) => {
  return (
    <div
      onClick={onClick}
      className={className}
    >
      <img
        src={getImageUrl('arrow-next.svg')}
        alt="Arrow next"
        width="30"
        height="30"
      />
    </div>
  );
};

const SamplePrevArrow = ({
  className,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={className}
    >
      <img
        src={getImageUrl('arrow-prev.svg')}
        alt="Arrow previous"
        width="30"
        height="30"
      />
    </div>
  );
};

const Gallery = ({ 
  imageNames,
  title
}) => {
  const settings = {
    infinite: true,
    variableWidth: true,
    speed: 500,
    draggable: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2400,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
    ]
  };
  return (
    <Slider {...settings} className="gallery__slider">
      {
        imageNames.map(imageName => (
          <div
            className="gallery__slider"
            key={imageName.id}
          >
            <img
              className="gallery__slider__content"
              src={getImageUrl(imageName.name)}
              alt={`Adalat Omar ${title} ${imageName.name}`}
              height="300"
              width="300"
            />
          </div>
        ))
      }
    </Slider>
  );
};

Gallery.propTypes = {
  title: PropTypes.string.isRequired,
  imageNames: PropTypes.array.isRequired
};

export default Gallery;
