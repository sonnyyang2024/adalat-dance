import React from 'react';
import PropTypes from 'prop-types';

// styles
import './CourseCard.scss';

const CourseCard = ({
  name,
  location,
  time
}) => (
  <div className="course-card">
    <h1>{name}</h1>
    <p>{time} at {location}</p>
  </div>
);

CourseCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

export default CourseCard;
