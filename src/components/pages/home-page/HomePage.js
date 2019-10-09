import React from 'react';

// hooks
import useLanguage from '../../../hooks/useLanguage';

// utility
import { getUUID } from '../../../utility';

// data
import translationsByLanguage from './translationsByLanguage';

// components
import Hero from './Hero';
import Banner from '../../common/banner/Banner';
import ScheduleBanner from '../../common/ScheduleBanner';

const HomePage = () => {
  const language = useLanguage();
  const {
    title,
    information,
    callToAction,
    banners,
    scheduleBanner
  } = translationsByLanguage[language];

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
