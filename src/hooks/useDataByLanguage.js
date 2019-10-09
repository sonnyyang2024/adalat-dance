import cloneDeep from 'lodash/cloneDeep';
import useLanguage from './useLanguage';

const resolveDataToSingleLanguage = (dataByLanguage, language) => {
  /* eslint-disable no-param-reassign */

  Object.keys(dataByLanguage).forEach((key) => {
    const value = dataByLanguage[key];

    if (typeof value === 'object') {
      if (value.id === 'byLanguage') {
        dataByLanguage[key] = value.getLanguage(language);
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
