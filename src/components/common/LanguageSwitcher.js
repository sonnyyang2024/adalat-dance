import React from 'react';
import { useDispatch } from 'react-redux';

// actions
import { changeLanguage } from '../../store/actions/preferences';

// hooks
import useLanguage from './useLanguage';

// styles
import './LanguageSwitcher.scss';

const translationsByLanguage = {
  ch: {
    languageSymbol: 'en'
  },
  en: {
    languageSymbol: '文'
  }
};

const LanguageSwitcher = () => {
  const dispatch = useDispatch();

  const language = useLanguage();
  const { languageSymbol } = translationsByLanguage[language];

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
      type="button"
      className="language-switcher"
      onClick={handleOnClick}
    >
      {languageSymbol}
    </button>
  );
};

export default LanguageSwitcher;
