import { CHANGE_LANGUAGE, SET_IS_SWITCHING_LANGUAGE } from '../types/preferences';

export const changeLanguage = (language) => ({
  type: CHANGE_LANGUAGE,
  language
});

export const setIsSwitchingLanguage = (isSwitchingLanguage) => ({
  type: SET_IS_SWITCHING_LANGUAGE,
  isSwitchingLanguage
});
