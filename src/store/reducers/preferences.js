import { CHANGE_LANGUAGE } from '../types/preferences';

const defaultPreferences = {
  language: 'en'
};

const preferencesReducer = (preferences = defaultPreferences, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...preferences,
        language: action.language
      };
    default:
      return preferences;
  }
};

export default preferencesReducer;
