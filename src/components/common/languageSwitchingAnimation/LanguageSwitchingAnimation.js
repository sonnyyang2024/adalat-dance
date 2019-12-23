import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import './LanguageSwitchingAnimation.scss';

const LanguageSwitchingAnimation = (props) => {
  const isSwitchingLanguage = useSelector((store) => store.preferences.isSwitchingLanguage);

  return (
    <div
      className={
        classNames('language-switching-animation__shade', {
          active: isSwitchingLanguage
        })
      }
    />
  );
};

export default LanguageSwitchingAnimation;
