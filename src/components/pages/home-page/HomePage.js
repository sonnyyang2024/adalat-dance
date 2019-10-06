import React from 'react';
import { getImageUrl } from '../../../utility';

// hooks
import useLanguage from '../../common/useLanguage';

// data
import translationsByLanguage from './translationsByLanguage';

// components
import Button from '../../common/Button';

const HomePage = () => {
  const language = useLanguage();
  const { title, description, button } = translationsByLanguage[language];

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <Button text={button} />
      <img
        src={getImageUrl('ada-white.jpg')}
        alt="Ada in white bellydance costum"
        width="500"
        height="600"
      />
    </div>
  );
};

export default HomePage;
