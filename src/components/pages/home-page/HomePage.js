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
    subtitle,
    information,
    callToAction,
    banners,
    publicShows
  } = data;

  const scheduleColumns = publicShows.showTableColumns.map(showColumn => (
    {
      id: getUUID(),
      key: showColumn.key,
      label: showColumn.label,
      type: showColumn.type
    }
  ));

  const scheduleRows = publicShows.showList;

  return (
    <div>
      <Hero
        title={title}
        subtitle={subtitle}
        information={information}
        callToAction={callToAction}
        imageName="adalat-white-cropped.png"
      />
      <ScheduleBanner
        title={publicShows.title}
        notes={publicShows.subtitle}
        columns={scheduleColumns}
        rows={scheduleRows}
        bottomNotes={publicShows.bottomNotes}
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

    </div>
  );
};

export default HomePage;
