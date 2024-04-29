import { useState, useEffect } from 'react';
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../constants/MediaQueries";

interface WindowSize {
  width: number;
  height: number;
}

const useWindowParams = (): WindowSize => {
  const isMobile = useMediaQuery({ query: MediaQueries.NORMAL_MOBILE})
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => handleResize(), 100)
  }, [isMobile]);

  return windowSize;
};

export default useWindowParams;
