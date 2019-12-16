import React from 'react';
import PropTypes from 'prop-types';

// components
import Button from '../../common/button/Button';

// hooks
import useDataByLanguage from '../../../hooks/useDataByLanguage';

// data
import dataByLanguage from './dataByLanguage';

// components
import Gallery from '../../common/gallery/Gallery';
import ScheduleBanner from '../../common/schedule-banner/ScheduleBanner';

// Styles
import './DancePage.scss';

// Utils
import { getUUID } from '../../../utility';

const DancePage = ({
  match
}) => {
  const data = useDataByLanguage(dataByLanguage);

  const { danceId } = match.params;
  const dance = data[danceId];

  const classColumns = [
    { id: getUUID(), key: 'name', label: 'Class Name' },
    { id: getUUID(), key: 'date', label: 'Date' },
    { id: getUUID(), key: 'time', label: 'Time' },
    {
      id: getUUID(),
      key: 'fullAddress',
      label: 'Address',
      type: 'address'
    },
    {
      id: getUUID(),
      key: 'price',
      label: 'Price'
    },
    {
      id: getUUID(),
      key: 'contactNames',
      label: 'Contacts',
      type: 'contacts'
    }
  ];

  return (
    <div className="dance-page">
      <div className="gallery">
        <div className="container">
          <h1 className="gallery__title">{dance.title}</h1>
          <p>{dance.description}</p>
        </div>
      </div>
      <Gallery
        title={dance.title}
        description={dance.description}
        imageNames={dance.imageNames}
      />
      <div className="contact__cta contact__cta--services">
        <div className="contact__cta__container">
          <h1 className="title">{data.servicesTitle}</h1>
          <p className="subtitle">{data.servicesSubtitle}</p>
          <p>{data.servicesDescription}</p>
          <Button text={data.servicesCtaButton} link="#contact-form" />
          <Button text={data.servicesCtaButtonAbout} link="/about" />
        </div>
      </div>
      { dance.courses && (
        <ScheduleBanner
          title={dance.coursesFor}
          notes={dance.coursesNotes}
          columns={classColumns}
          rows={dance.courses}
        />
      )}
      { dance.courses && (
        <div className="contact__cta">
          <div className="contact__cta__container">
            <h2 className="title">{data.privateClassTitle}</h2>
            <p className="subtitle">{data.contactCtaMessage}</p>
            <Button text={data.contactCtaButton} link="#contact-form" />
          </div>
        </div>
      )}
    </div>
  );
};

DancePage.propTypes = {
  match: PropTypes.object.isRequired
};

export default DancePage;
