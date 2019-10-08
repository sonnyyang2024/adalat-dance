import React from 'react';

// hooks
import useLanguage from '../../common/useLanguage';

// data
import translationsByLanguage from './translationsByLanguage';

// components
import Hero from '../../common/Hero';
import Banner from '../../common/Banner';

const HomePage = () => {
  const language = useLanguage();
  const { title, information, callToAction, banners } = translationsByLanguage[language];

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
          <Banner title={banner.title} list={banner.list} />
        )))
      }
    </div>
  );
};

export default HomePage;
