import React from 'react';
import PropTypes from 'prop-types';

// components
import ScheduleRow from '../schedule-row/ScheduleRow';

// styles
import './ScheduleBanner.scss';
import { arrayExpression } from '@babel/types';

const ContactsCell = ({ contacts }) => (
  <td className="schedule-row__field">
    {contacts.map(contact => (
      <>
        {contact.name && (
          <h4>
            {contact.name}
          </h4>
        )}
        {contact.phoneNumber && (
          <a href={`tel:${contact.phoneNumber}`}>
            {contact.phoneNumber}
          </a>
        )}
        {contact.email && (
          <a href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        )}
        {contact.website && (
          <a href={contact.website} target="_blank">
            {contact.website}
          </a>
        )}
      </>
    ))}
  </td>
);

const ScheduleBanner = ({
  title,
  notes,
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
        {
          notes && <p className="notes">{notes}</p>
        }
        <table className="banner__list--schedule">

          {/* header */}
          <thead>
            <tr className="schedule-row">
              {columns.map(column => (
                <th key={column.id}>{column.label}</th>
              ))}
            </tr>
          </thead>

          {/* body */}
          <tbody>
            {rows.map(row => (
              <tr className="schedule-row" key={row.id}>
                {columns.map(column => {
                  const data = row[column.key];

                  if (column.type === 'contacts') {
                    return (
                      <ContactsCell contacts={data} />
                    );
                  }

                  else {
                    return (
                      <td className="schedule-row__field">
                        {data}
                      </td>
                    );
                  }
                })}
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
