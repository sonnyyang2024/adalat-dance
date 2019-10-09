import React from 'react';
import PropTypes from 'prop-types';

// utility
import { getUUID } from '../../utility';

// components
import ScheduleRow from './ScheduleRow';

// styles
import './ScheduleBanner.scss';

const ScheduleBanner = ({
  title,
  list
}) => (
  <div className="banner--schedule">
    <div className="container">
      <h1 className="banner__title">
        {title}
      </h1>
      <div className="banner__list--schedule">
        {
          list.map(({
            date,
            startTime,
            venue,
            eventName
          }) => (
            <ScheduleRow
              key={getUUID()}
              date={date}
              startTime={startTime}
              venue={venue}
              eventName={eventName}
            />
          ))
        }
      </div>
    </div>
  </div>
);

ScheduleBanner.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
};

export default ScheduleBanner;
