import cloneDeep from 'lodash/cloneDeep';
import useLanguage from './useLanguage';

const resolveDataToSingleLanguage = (dataByLanguage, language) => {
  /* eslint-disable no-param-reassign */

  Object.keys(dataByLanguage).forEach((key) => {
    const value = dataByLanguage[key];

    if (value && typeof value === 'object') {
      if (value.id === 'byLanguage') {
        dataByLanguage[key] = value.getLanguage(language);
        return;
      }

      dataByLanguage[key] = resolveDataToSingleLanguage(
        dataByLanguage[key],
        language
      );
    }
  });

  return dataByLanguage;
};

export default (dataByLanguage) => (
  resolveDataToSingleLanguage(
    cloneDeep(dataByLanguage),
    useLanguage()
  )
);
