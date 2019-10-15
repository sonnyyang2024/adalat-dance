import React from 'react';
import { useDispatch } from 'react-redux';
import { byLanguage } from '../../../utility';

// actions
import { changeLanguage } from '../../../store/actions/preferences';

// hooks
import useLanguage from '../../../hooks/useLanguage';
import useDataByLanguage from '../../../hooks/useDataByLanguage';

// styles
import './LanguageSwitcher.scss';

const dataByLanguage = {
  languageSymbol: byLanguage({
    en: '文',
    ch: 'en'
  })
};

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const language = useLanguage();

  const data = useDataByLanguage(dataByLanguage);

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
      {data.languageSymbol}
    </button>
  );
};

export default LanguageSwitcher;
