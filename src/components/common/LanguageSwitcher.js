import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../../store/actions/preferences';
import useLocalized from './useLocalized';

import './LanguageSwitcher.scss';

const translations = {
  ch: {
    languageSymbol: 'en'
  },
  en: {
    languageSymbol: '文'
  }
};

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.preferences.language);
  const localized = useLocalized(translations);

  const handleOnClick = () => {
    dispatch(
      changeLanguage(
        language === 'en'
          ? 'ch'
          : 'en'
      )
    );
  };

  return (
    <button
      className="language-switcher"
      onClick={handleOnClick}
    >
      {localized.languageSymbol}
    </button>
  );
};

export default LanguageSwitcher;
