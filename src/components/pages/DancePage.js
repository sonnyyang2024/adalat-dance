import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropType from 'prop-types';
import {
  BOLLYWOOD_ID,
  BELLYDANCE_ID,
  UYGHUR_ID
} from '../../constants';

import Button from '../common/Button';

const translations = {
  en: {
    [BOLLYWOOD_ID]: {
      title: 'Bollywood Dance',
      description: 'Originated in India.',
      button: 'Learn Bollywood'
    },
    [BELLYDANCE_ID]: {
      title: 'Bellydance',
      description: 'Originated in the Middle East.',
      button: 'Learn Bellydance'
    },
    [UYGHUR_ID]: {
      title: 'Uyghur Dance',
      description: 'Originated in the Middle East.',
      button: 'Learn Bellydance'
    }
  },
  ch: {
    [BOLLYWOOD_ID]: {
      title: '宝莱坞舞蹈',
      description: '来自古老的印度',
      button: '学习宝莱坞舞蹈'
    },
    [BELLYDANCE_ID]: {
      title: '肚皮舞',
      description: '来自古老的中东',
      button: '学习肚皮舞'
    },
    [UYGHUR_ID]: {
      title: '维吾尔舞',
      description: '来自新疆维吾尔族舞蹈',
      button: '学习维吾尔舞'
    }
  }
};

const classes = {
  [BOLLYWOOD_ID]: [
    {
      location: '1234 Alpha St',
      time: '9pm',
      name: {
        en: 'Intermediate Adult Richmond',
        ch: '列治文成人中级班'
      }
    }
  ],
  [BELLYDANCE_ID]: [
    {
      location: '1234 Alpha St',
      time: '9pm',
      name: {
        en: 'Intermediate Adult Richmond',
        ch: '列治文成人中级班'
      }
    }
  ],
  [UYGHUR_ID]: [
    {
      location: '1234 Alpha St',
      time: '9pm',
      name: {
        en: 'Intermediate Adult Richmond',
        ch: '列治文成人中级班'
      }
    }
  ]
};

const useLanguage = () => useSelector((state) => state.preferences.language);

const DancePage = ({
  match
}) => {
  const { danceId } = match.params;
  const language = useLanguage();

  const dance = {
    localized: translations[language][danceId],
    classes: classes[danceId]
  };

  return (
    <div>
      <h1>{dance.localized.title}</h1>
      <p>{dance.localized.description}</p>
      <Button text={dance.localized.button} />
      <div>
        {dance.classes.map((course) => (
          <p>
            {course.time}, {course.name[language]}
          </p>
        ))}
      </div>
    </div>
  );
};

DancePage.propTypes = {
  match: PropType.object.isRequired
};

export default DancePage;
