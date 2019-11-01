import React, { Fragment } from 'react';

// styles
import './ScheduleBanner.scss';

const ContactsCell = ({ contacts }) => (
  <td className="schedule-row__field">
    {contacts.map(contact => (
      <Fragment key={contact.id}>
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
          <a href={contact.website} target="_blank" rel="noopener noreferrer">
            {contact.website}
          </a>
        )}
      </Fragment>
    ))}
  </td>
);

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
                      <ContactsCell 
                        contacts={data} 
                        key={`${row.id}${data}`}
                      />
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
