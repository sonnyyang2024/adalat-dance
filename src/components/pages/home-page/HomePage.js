import React from 'react';

// hooks
import useDataByLanguage from '../../../hooks/useDataByLanguage';

// utility
import { getUUID } from '../../../utility';

// data
import dataByLanguage from './dataByLanguage';

// components
import Hero from './hero/Hero';
import Banner from '../../common/banner/Banner';
// import ScheduleBanner from '../../common/schedule-banner/ScheduleBanner';

const HomePage = () => {
  const data = useDataByLanguage(dataByLanguage);

  const {
    title,
    information,
    callToAction,
    banners,
  } = data;
  // scheduleBanner

  // const scheduleColumns = [
  //   { id: getUUID(), key: 'date', label: 'Date' },
  //   { id: getUUID(), key: 'startTime', label: 'Time' },
  //   { id: getUUID(), key: 'venue', label: 'Venue' },
  //   { id: getUUID(), key: 'danceType', label: 'Performance' },
  //   { id: getUUID(), key: 'mapLink', label: 'Directions', type: 'mapLink' }
  // ];

  return (
    <div>
      <Hero
        title={title}
        information={information}
        callToAction={callToAction}
        imageName="adalat-white-cropped.png"
      />
      {
        banners.map(((banner) => (
          <Banner
            key={getUUID()}
            title={banner.title}
            list={banner.list}
          />
        )))
      }
      {/* <ScheduleBanner
        title={scheduleBanner.title}
        columns={scheduleColumns}
        rows={scheduleBanner.list}
      /> */}
    </div>
  );
};

export default HomePage;
