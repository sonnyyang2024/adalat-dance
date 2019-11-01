import React from 'react';

// styles
import './ScheduleBanner.scss';

// components
import Contacts from '../../common/contacts/Contacts';

const ScheduleBanner = ({
  title,
  notes,
  columns,
  rows
}) => {

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
                      <td className="schedule-row__field">
                        <Contacts
                          contactNames={data} 
                          key={`${row.id}${data}`}
                        />
                      </td>
                    );
                  }

                  else {
                    return (
                      <td 
                        className="schedule-row__field"
                        key={`${row.id}${data}`}
                      >
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
