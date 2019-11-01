import React, { Fragment } from 'react';
import contactData from './dataByLanguage';

import './Contacts.scss';

const Contacts = ({ contactNames }) => (
  <>
  {contactNames.map(contactName => {
    const contact = contactData[contactName];
    return (
      <div
        className="contact"
        key={contact.id}
      >
        {contact.name && (
          <h3 class="contact__name">
            {contact.name}
          </h3>
        )}
        <ul className="contact__list">
          {contact.phoneNumber && (
            <li className="contact__item">
              <a href={`tel:${contact.phoneNumber}`}>
                <svg className="contact__item__icon" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M426.666 330.667a250.385 250.385 0 0 1-75.729-11.729c-7.469-2.136-16-1.073-21.332 5.333l-46.939 46.928c-60.802-30.928-109.864-80-140.802-140.803l46.939-46.927c5.332-5.333 7.462-13.864 5.332-21.333-8.537-24.531-12.802-50.136-12.802-76.803C181.333 73.604 171.734 64 160 64H85.333C73.599 64 64 73.604 64 85.333 64 285.864 226.136 448 426.666 448c11.73 0 21.334-9.604 21.334-21.333V352c0-11.729-9.604-21.333-21.334-21.333z"/></svg>
                {contact.phoneNumber}
              </a>
            </li>
          )}
          {contact.email && (
            <li className="contact__item">
              <a href={`mailto:${contact.email}`}>
                <svg className="contact__item__icon" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"/></svg>
                {contact.email}
              </a>
            </li>
          )}
          {contact.website && (
            <li className="contact__item">
              <a href={contact.website} target="_blank" rel="noopener noreferrer">
                <svg className="contact__item__icon" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M424 64H88c-26.6 0-48 21.6-48 48v288c0 26.4 21.4 48 48 48h336c26.4 0 48-21.6 48-48V112c0-26.4-21.4-48-48-48zm0 336H88V176h336v224z"/></svg>
                visit website
              </a>
            </li>
          )}
        </ul>
      </div>
    )}
  )}
  </>
);

export default Contacts;
