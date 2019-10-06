import React from 'react';
import PropTypes from 'prop-types';

// hooks
import useLanguage from '../../common/useLanguage';

// styles
import './CourseCard.scss';

const CourseCard = ({
  nameByLanguage,
  location,
  time
}) => {
  const language = useLanguage();
  const name = nameByLanguage[language];

  return (
    <div className="course-card">
      <h1>{name}</h1>
      <p>{time} at {location}</p>
    </div>
  );
};

CourseCard.propTypes = {
  nameByLanguage: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

export default CourseCard;
