import React from 'react';
import PropTypes from 'prop-types';

const ScheduleRow = ({
  date,
  startTime,
  venue,
  eventName
}) => (
  <div className="schedule-row">
    <div className="schedule-row__field">{date}</div>
    <div className="schedule-row__field">{eventName}</div>
    <div className="schedule-row__field">{venue}</div>
    <div className="schedule-row__field">{startTime}</div>
  </div>
);

ScheduleRow.propTypes = {
  date: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  eventName: PropTypes.string.isRequired
};

export default ScheduleRow;
