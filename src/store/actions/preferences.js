import { CHANGE_LANGUAGE } from '../types/preferences';

export const changeLanguage = (language) => ({
  type: CHANGE_LANGUAGE,
  language
});
