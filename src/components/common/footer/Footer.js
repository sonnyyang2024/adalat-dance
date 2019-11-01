import React from 'react';
import Button from '../button/Button';

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

  return (
    <div className="footer">
      <div className="container">
        <div className="footer__column">
          <h2 className="footer__cta-message">{ctaMessage}</h2>
          <Button 
            text={ctaButton}
            link="/"
          />
        </div>
        <div className="footer__column">
          <h3>{contactMessage}</h3>
          {
            contacts.map(({
              id,
              name,
              phoneNumber,
            }) => (
              <div key={id}>
                <p>{name}</p>
                <a
                  className="footer__phone-number"
                  href={`tel:${phoneNumber}`}
                >
                  {contact}: {phoneNumber}
                </a>
              </div>
            ))
          }
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
