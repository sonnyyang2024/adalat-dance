import React from 'react';
import PropTypes from 'prop-types';

import CourseCard from './CourseCard';

const CourseList = ({ courses }) => (
  <div className="course-list">
    {
      courses.map((course) => (
        <CourseCard
          key={course.id}
          nameByLanguage={course.nameByLanguage}
          location={course.location}
          time={course.time}
        />
      ))
    }
  </div>
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
