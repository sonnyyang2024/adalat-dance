import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import './Gallery.scss';

const Gallery = ({
  title,
  description
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
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

Gallery.propTypes = {
  title: PropTypes.string.isRequired
}

export default Gallery;

