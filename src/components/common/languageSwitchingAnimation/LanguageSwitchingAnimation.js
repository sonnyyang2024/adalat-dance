import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import './LanguageSwitchingAnimation.scss';

const LanguageSwitchingAnimation = () => {
  const isSwitchingLanguage = useSelector((store) => store.preferences.isSwitchingLanguage);
  return (
    <div
      className={
        classNames('language-animation-box', {
          hidden: !isSwitchingLanguage
        })
      }
    >
    </div>
  );
};

export default LanguageSwitchingAnimation;
