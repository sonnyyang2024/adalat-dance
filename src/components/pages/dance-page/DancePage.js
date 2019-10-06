import React from 'react';
import PropTypes from 'prop-types';

// hooks
import useLanguage from '../../common/useLanguage';

// data
import translations from './translations';
import courses from './courses';

// components
import Button from '../../common/Button';

const DancePage = ({
  match
}) => {
  const { danceId } = match.params;
  const language = useLanguage();

  const dance = {
    localized: translations[language][danceId],
    courses: courses[danceId]
  };

  return (
    <div>
      <h1>{dance.localized.title}</h1>
      <p>{dance.localized.description}</p>
      <Button text={dance.localized.button} />
      <div>
        {dance.courses.map((course) => (
          <p>
            {course.time}, {course.name[language]}
          </p>
        ))}
      </div>
    </div>
  );
};

DancePage.propTypes = {
  match: PropTypes.object.isRequired
};

export default DancePage;
