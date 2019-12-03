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

const HomePage = () => {
  const data = useDataByLanguage(dataByLanguage);

  const {
    title,
    subtitle,
    information,
    callToAction,
    banners,
  } = data;

  return (
    <div>
      <Hero
        title={title}
        subtitle={subtitle}
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
            type={banner.type}
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
