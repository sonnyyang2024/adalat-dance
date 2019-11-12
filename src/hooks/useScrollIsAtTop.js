import { useEffect, useState } from 'react';
import { windowIsScrolledToTop, debounce } from '../utility';

const useScrollIsAtTop = () => {
  const [scrollIsAtTop, setScrollIsAtTop] = useState(windowIsScrolledToTop());

  const handleScroll = () => setScrollIsAtTop(windowIsScrolledToTop());

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', debounce(handleScroll, 300));
  }, []);

  return scrollIsAtTop;
};

export default useScrollIsAtTop;
