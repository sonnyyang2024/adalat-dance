import React from 'react';

// hooks
import useLanguage from '../../common/useLanguage';

// data
import translationsByLanguage from './translationsByLanguage';

// components
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
        imageName="adalat-blue-transparent.png"
      />
    </div>
  );
};

export default HomePage;
