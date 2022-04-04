import React from 'react';
import Fade from 'react-reveal/Fade';
import classNames from 'classnames';

// styles
import './ScheduleBanner.scss';

// components
import Contacts from '../../common/contacts/Contacts';

const ScheduleBanner = ({
  title,
  notes,
  columns,
  rows,
  bottomNotes
}) => {
  return (
    <div className="banner--schedule" id="schedule">
      <div className="container">
          <div>
            <Fade bottom duration={700}>
              <h1 className="banner__title">
                {title}
              </h1>
              {
                notes && <p className="notes">{notes}</p>
              }
            </Fade>
            <Fade bottom>
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
                            <td
                              key={`${row.id}${data}`}
                              className='schedule-row__field contacts'
                            >
                              <Contacts
                                contactNames={data} 
                              />
                            </td>
                          );
                        }
                        if (column.type === 'mapLink') {
                          return (
                            <td
                              key={`${row.id}${data}`}
                              className="schedule-row__field"
                            >
                              <a
                                className="schedule__link"
                                href={data}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                see on map
                              </a>
                            </td>
                          );
                        }
                        return (
                          <td
                            className={classNames(
                              'schedule-row__field regular',
                              {
                                address: column.type === 'address'
                              }
                            )}
                            key={`${row.id}${data}`}
                          >
                            {data}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Fade>
          </div>
          <p className="schedule__bottom-notes">{bottomNotes}</p>
      </div>
    </div>
  );
};

export default ScheduleBanner;
