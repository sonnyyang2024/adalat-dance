import { CHANGE_LANGUAGE, SET_IS_SWITCHING_LANGUAGE } from '../types/preferences';

const defaultPreferences = {
  language: 'en',
  isSwitchingLanguage: false
};

const preferencesReducer = (preferences = defaultPreferences, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...preferences,
        language: action.language
      };
    case SET_IS_SWITCHING_LANGUAGE:
      return {
        ...preferences,
        isSwitchingLanguage: action.isSwitchingLanguage
      };
    default:
      return preferences;
  }
};

export default preferencesReducer;
