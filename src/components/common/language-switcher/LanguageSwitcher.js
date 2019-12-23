import React from 'react';
import { useDispatch } from 'react-redux';
import { byLanguage } from '../../../utility';

// actions
import { changeLanguage, setIsSwitchingLanguage } from '../../../store/actions/preferences';

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
    // fire language switching animation
    dispatch(setIsSwitchingLanguage(true));
    setTimeout(() => dispatch(setIsSwitchingLanguage(false)), 1000);

    setTimeout(() => {
      dispatch(
        changeLanguage(
          language === 'en'
            ? 'ch'
            : 'en'
        )
      );
    }, 500);
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
