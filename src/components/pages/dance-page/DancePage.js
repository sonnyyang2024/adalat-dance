import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";

// hooks
import useDataByLanguage from '../../../hooks/useDataByLanguage';

// data
import dataByLanguage from './dataByLanguage';

// components
import Button from '../../common/button/Button';
import CourseList from './course-list/CourseList';
import Gallery from '../../common/gallery/Gallery';

// Styles
import './DancePage.scss';

const DancePage = ({
  match
}) => {
  const data = useDataByLanguage(dataByLanguage);

  const { danceId } = match.params;
  const dance = data[danceId];
  // 
  // <p>{dance.description}</p>
  // <Button
  //   text={dance.button}
  //   link="/"
  // />
  // <CourseList courses={dance.courses} />

  return (
    <div className="dance-page">
      <Gallery title={dance.title} />
    </div>
  );
};

DancePage.propTypes = {
  match: PropTypes.object.isRequired
};

export default DancePage;
