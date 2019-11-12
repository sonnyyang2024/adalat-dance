import uuid from 'uuid/v4';

export const getUUID = () => uuid();

export const getImageUrl = (imageName) => `${process.env.PUBLIC_URL}/images/${imageName}`;

export const byLanguage = (dataByLanguage) => ({
  id: 'byLanguage',

  getLanguage(language) {
    return dataByLanguage[language];
  }
});

export const windowIsScrolledToTop = () => window.scrollY === 0;

export const debounce = (func, delay) => {
  let inDebounce;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};
