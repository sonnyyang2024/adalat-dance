import React from 'react';
import { getImageUrl } from '../../../utility';

// hooks
import useLanguage from '../../common/useLanguage';

// data
import translationsByLanguage from './translationsByLanguage';

// components
import Button from '../../common/Button';
import Hero from '../../common/Hero';

const HomePage = () => {
  const language = useLanguage();
  const { title, description, button } = translationsByLanguage[language];

  return (
    <div>
      <Hero
        title={title}
        paragraphTemplate={description}
        buttonText={button}
        imageName="ada-white.jpg"
      />
    </div>
  );
};

export default HomePage;
