import React from 'react';
import PropTypes from 'prop-types';

// components
import CourseCard from '../course-card/CourseCard';

const CourseList = ({
  courses
}) => (
  <div className="course-list">
    {
      courses.map((course) => (
        <CourseCard
          key={course.id}
          name={course.name}
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
