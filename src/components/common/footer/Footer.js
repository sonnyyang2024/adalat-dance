import React from 'react';
import Button from '../button/Button';

// component 
import Contacts from '../contacts/Contacts';
import ContactForm from '../contact-form/ContactForm';

// data
import dataByLanguage from './dataByLanguage';

// hooks
import useDataByLanguage from '../../../hooks/useDataByLanguage';

import './Footer.scss';

const Footer = () => {
  const {
    ctaButton,
    ctaMessage,
    contact,
    contactMessage,
    contacts,
    socialMedia
  } = useDataByLanguage(dataByLanguage);

  const footerContacts = [
    'adalat_omar',
    'leana_li'
  ]

  return (
    <div className="footer">
      <div className="footer__form__container container">
        <ContactForm />
      </div>
      <div className="footer__contact__container container">
        <div className="footer__column">
          <h3>{contactMessage}</h3>
          <Contacts contactNames={footerContacts} />
        </div>
        <div className="footer__column">
          <h3>{socialMedia.title}</h3>
          {
            socialMedia.list.map(({
              id,
              name,
              linkTo
            }) => (
              <p key={id}>
                <a
                  className="footer__social-media__link"
                  href={linkTo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name}
                </a>
              </p>
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default Footer;
