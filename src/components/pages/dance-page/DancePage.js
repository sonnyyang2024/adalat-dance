import React from 'react';
import PropTypes from 'prop-types';

// hooks
import useDataByLanguage from '../../../hooks/useDataByLanguage';

// data
import dataByLanguage from './dataByLanguage';

// components
import Button from '../../common/button/Button';
import CourseList from './course-list/CourseList';

const DancePage = ({
  match
}) => {
  const data = useDataByLanguage(dataByLanguage);

  const { danceId } = match.params;
  const dance = data[danceId];

  return (
    <div>
      <h1>{dance.title}</h1>
      <p>{dance.description}</p>
      <Button
        text={dance.button}
        link="/"
      />
      <CourseList courses={dance.courses} />
    </div>
  );
};

DancePage.propTypes = {
  match: PropTypes.object.isRequired
};

export default DancePage;
