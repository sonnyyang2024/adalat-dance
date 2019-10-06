import React from 'react';
import PropTypes from 'prop-types';

// hooks
import useLanguage from '../../common/useLanguage';

// data
import translationsByLanguage from './translationsByLanguage';
import courses from './courses';

// components
import Button from '../../common/Button';
import CourseList from './CourseList';

const DancePage = ({
  match
}) => {
  const { danceId } = match.params;
  const language = useLanguage();

  const dance = {
    localized: translationsByLanguage[language][danceId],
    courses: courses[danceId]
  };

  return (
    <div>
      <h1>{dance.localized.title}</h1>
      <p>{dance.localized.description}</p>
      <Button text={dance.localized.button} />
      <CourseList courses={dance.courses} />
    </div>
  );
};

DancePage.propTypes = {
  match: PropTypes.object.isRequired
};

export default DancePage;
