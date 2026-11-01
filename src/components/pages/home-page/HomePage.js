/* eslint-disable max-len */
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
      {/* 1. 完好无损保留的灵魂大招牌 */}
      <Hero
        title={title}
        subtitle={subtitle}
        information={information}
        callToAction={callToAction}
        imageName="adalat-white-cropped.png"
      />

      {/* ==================== 🛠️ 2. 在大招牌正下方，精准插入的 2026 新海报（相对路径，多端同步自适应） ==================== */}
      <div style={{ textAlign: 'center', margin: '40px auto', maxWidth: '800px', padding: '0 15px' }}>
        <img 
          src="images/fall-2026-schedule.png" 
          alt="Fall 2026 Registration" 
          style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }} 
        />
      </div>
      {/* ======================================================================================= */}

      {/* 3. 课程表表格 */}
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
