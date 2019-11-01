import React, { Fragment } from 'react';

const Contacts = ({ contacts }) => (
  <>
  {contacts.map(contact => (
    <Fragment key={contact.id}>
      {contact.name && (
        <h3 class="contact__name">
          {contact.name}
        </h3>
      )}
      <div className="contact__list">
        {contact.phoneNumber && (
          <p>
            Tel:
            <a href={`tel:${contact.phoneNumber}`}>
            {contact.phoneNumber}
            </a>
          </p>
        )}
        {contact.email && (
          <p>
            Email: 
            <a href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </p>
        )}
        {contact.website && (
          <p>
            Website: 
            <a href={contact.website} target="_blank" rel="noopener noreferrer">
              {contact.website}
            </a>
          </p>
        )}
      </div>
    </Fragment>
  ))}
  </>
);

export default Contacts;
