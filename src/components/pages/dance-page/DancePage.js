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
      <div className="contact__cta">
        <h1 className="title">Services</h1>
        <p className="subtitle">events, festivals, theatre productions</p>
        <p>Adalat Omar has been performing mainly in the Greater Vancouver area. The venues include Arabic, Greek, Persian, Turkish, Mediterranean restaurants, weddings, events, festivals and theatre productions.</p>
        <p>Locally, Adalat Omar regularly performs at the Afghan Horseman Restaurant, Paradiz Teahouse & Hookah Lounge, Cazba Restaurant, Saray Turkish Restaurant, Taverna Greka, Zeitoon Restaurant and Arwaz Hookah Lounge. She also regularly performs at weddings, private party and corporate events.</p>
        <Button text={data.contactCtaButton} link="#contact-form" />
      </div>
      { dance.courses && (
        <ScheduleBanner
          title={dance.coursesFor}
          notes={dance.coursesNotes}
          columns={classColumns}
          rows={dance.courses}
        />
      )}
      <div className="contact__cta">
        <p>{data.contactCtaMessage}</p>
        <Button text={data.contactCtaButton} link="#contact-form" />
      </div>
    </div>
  );
};

DancePage.propTypes = {
  match: PropTypes.object.isRequired
};

export default DancePage;
