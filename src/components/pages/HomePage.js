import React from 'react';
import Button from '../common/Button';
import useLocalized from '../common/useLocalized';

import { getImageUrl } from '../../utility';

const translations = {
  en: {
    title: 'Hello, world!',
    description: 'This is the home page.',
    button: 'Learn More'
  },
  ch: {
    title: '你好!',
    description: '这是主页.',
    button: '了解更多'
  }
};

const HomePage = () => {
  const { title, description, button } = useLocalized(translations);

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
