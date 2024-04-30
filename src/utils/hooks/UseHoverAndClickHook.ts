import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {MediaQueries} from "../../constants/MediaQueries";

interface Config {
  touchEndDelay?: number
}

const useHoverAndClick = (config: Config = {}) => {
  const [isHovered, setHovered] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const isTouchable = useMediaQuery({ query: MediaQueries.TOUCHABLE });

  const hoverHandlers = {
    onMouseEnter: () => {
      if (!isTouchable) {
        setHovered(true);
      }
    },
    onMouseLeave: () => {
      if (!isTouchable) {
        setHovered(false);
        setClicked(false);
      }
    },
  };

  const clickHandlers = {
    onTouchStart: () => setHovered(true),
    onTouchEnd: () => {
      if (config?.touchEndDelay) {
        setTimeout(() => setHovered(false), config.touchEndDelay)
      } else {
        setHovered(false)
      }
    },
    onTouchCancel: () => {
      if (config?.touchEndDelay) {
        setTimeout(() => setHovered(false), config.touchEndDelay)
      } else {
        setHovered(false)
      }
    },
    onMouseDown: () => {
      if (!isTouchable) {
        setClicked(true);
      }
    },
    onMouseUp: () => {
      if (!isTouchable) {
        setClicked(false);
      }
    },
  };

  return {
    isHovered,
    isClicked,
    ...hoverHandlers,
    ...clickHandlers,
  };
};

export default useHoverAndClick;
