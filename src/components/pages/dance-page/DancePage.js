import React from 'react';
import PropTypes from 'prop-types';

// hooks
import useDataByLanguage from '../../../hooks/useDataByLanguage';

// data
import dataByLanguage from './dataByLanguage';

// components
import CourseList from './course-list/CourseList';
import Gallery from '../../common/gallery/Gallery';
import ScheduleBanner from '../../common/schedule-banner/ScheduleBanner';

// Styles
import './DancePage.scss';

// Utils
import { getUUID } from '../../../utility';

const DancePage = ({
  match
}) => {
  const data = useDataByLanguage(dataByLanguage);

  const { danceId } = match.params;
  const dance = data[danceId];

  const classColumns = [
    { id: getUUID(), key: 'date', label: 'Date' },
    { id: getUUID(), key: 'time', label: 'Time' },
    { id: getUUID(), key: 'location', label: 'Location' },
    { id: getUUID(), key: 'name', label: 'Class Name' }
  ]

  return (
    <div className="dance-page">
      <Gallery 
        title={dance.title} 
        description={dance.description}
        imageNames={dance.imageNames}
      />
      <ScheduleBanner 
        title={dance.coursesFor}
        columns={classColumns}
        rows={dance.courses}
      />
    </div>
  );
};

DancePage.propTypes = {
  match: PropTypes.object.isRequired
};

export default DancePage;
