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
import ScheduleBanner from '../../common/schedule-banner/ScheduleBanner';

const HomePage = () => {
  const data = useDataByLanguage(dataByLanguage);

  const {
    title,
    information,
    callToAction,
    banners,
    scheduleBanner
  } = data;

  return (
    <div>
      <Hero
        title={title}
        information={information}
        callToAction={callToAction}
        imageName="adalat-blue-transparent.png"
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
      <ScheduleBanner
        title={scheduleBanner.title}
        list={scheduleBanner.list}
      />
    </div>
  );
};

export default HomePage;
