import { useCallback, useEffect, useState } from 'react';
import { mobileBreakpoint } from '../theme';

/**
 * Sets up an observer to tell when the display is mobile sized or not.
 * @returns Whether the display is small enough to be consider "mobile"
 * or not
 */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const isWindowMobile = useCallback(() => {
    return window.innerWidth <= mobileBreakpoint;
  }, []);

  const onWindowResize = useCallback(() => {
    setIsMobile(isWindowMobile());
  }, [isWindowMobile]);

  useEffect(() => {
    setIsMobile(isWindowMobile());

    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, [onWindowResize, isWindowMobile]);

  return isMobile;
};

export default useIsMobile;
