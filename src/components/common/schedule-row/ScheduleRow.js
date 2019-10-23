import React from 'react';
import PropTypes from 'prop-types';

const ScheduleRow = ({
  data
}) => (
  <div className="schedule-row">
    {
      data.map(item => (
        <div
          key={item}
          className="schedule-row__field"
        >
          {item}
        </div>
      ))
    }
  </div>
);

ScheduleRow.propTypes = {
  data: PropTypes.array.isRequired
};

export default ScheduleRow;
