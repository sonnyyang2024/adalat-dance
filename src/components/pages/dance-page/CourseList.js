import React from 'react';
import PropTypes from 'prop-types';

import CourseCard from './CourseCard';

const CourseList = ({ courses }) => (
  <div className="course-list">
    <h1>Class List</h1>
    {
      courses.map((course) => <CourseCard key={course.id} course />)
    }
  </div>
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
