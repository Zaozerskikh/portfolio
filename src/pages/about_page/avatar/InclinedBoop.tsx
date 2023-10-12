import {animated, useSpring} from 'react-spring';
import React, {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../../constants/MediaQueries";

interface InclinedBoopProps {
  rotation: number;
  children: any;
}
const InclinedBoop: React.FC<InclinedBoopProps> = ({ rotation , children }) => {
  const [isBooped, setIsBooped] = useState(false);
  const [isHovered,setHovered] = useState(false);
  const [isInclined, setInclined] = useState(false)
  const isTouchable = useMediaQuery({ query: MediaQueries.TOUCHABLE });

  const s = useSpring({
    display: 'inline-block',
    transform: isBooped
      ? `rotate(${-rotation}deg)`
      : isInclined ? `rotate(-10deg)`
        : `rotate(0deg)`,
    config: {
      tension: 400,
      friction: 10,
    },
  });

  useEffect(() => {
    if (!isHovered && isInclined){
      setInclined(false)
    }
  }, [isHovered, isInclined]);

  const trigger = () => {
    setHovered(true)
    setIsBooped(true)
    setTimeout(() => {
      setIsBooped(false)
    }, 50)

    if (!isTouchable) {
      setTimeout(() => {
        setInclined(true)
      }, 200)
    }
  };

  return (
    <animated.span
      onMouseEnter={trigger}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => {
        if (isTouchable) {
          trigger()
        }
      }}
      onTouchEnd={() => setHovered(false)}
      style={s}
    >
      {children}
    </animated.span>
  );
};

export default InclinedBoop
