import React from 'react';
import PropTypes from 'prop-types';

// components
import ScheduleRow from '../schedule-row/ScheduleRow';

// styles
import './ScheduleBanner.scss';

const ScheduleBanner = ({
  title,
  columns,
  rows
}) => {
  const sortedRows = rows.sort((rowX, rowY) => {
    return new Date(rowX.date) - new Date(rowY.date);
  });

  return (
    <div className="banner--schedule">
      <div className="container">
      <div>
        <h1 className="banner__title">
          {title}
        </h1>
        <table className="banner__list--schedule">
          <thead>
            <tr className="schedule-row">
              {columns.map(column => (
                <th key={column.id}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr className="schedule-row" key={row.id}>
                {columns.map(column => (
                  <td key={column.id} className="schedule-row__field">{row[column.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      </div>
    </div>
  );
};

export default ScheduleBanner;
