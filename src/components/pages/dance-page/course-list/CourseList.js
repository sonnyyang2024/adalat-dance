import React from 'react';
import PropTypes from 'prop-types';

// components
import CourseCard from '../course-card/CourseCard';

const CourseList = ({
  danceName,
  courses,
  coursesFor
}) => {
  const courseCards = courses.map((course) => (
    <CourseCard
      key={course.id}
      name={course.name}
      location={course.location}
      time={course.time}
    />
  ));

  const noCourseMessage = <p>There is currently no classes scheduled for {danceName}. </p>;

  return (
    <div className="course-list">
      <h1>{coursesFor}</h1>
      {
        courses.length > 0 ? courseCards : noCourseMessage
      }
    </div>
  )
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
