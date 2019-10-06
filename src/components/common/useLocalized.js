import { useSelector } from 'react-redux';

const useLocalized = (translations) => {
  const language = useSelector((state) => state.preferences.language);
  return translations[language];
};

export default useLocalized;
