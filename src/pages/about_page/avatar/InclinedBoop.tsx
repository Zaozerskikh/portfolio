import {animated, useSpring} from 'react-spring';
import React, {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../../constants/MediaQueries";

interface InclinedBoopProps extends React.PropsWithChildren {
  rotation: number;
  tension: number;
  friction: number;
  externalTrigger ? : boolean;
}

const InclinedBoop: React.FC<InclinedBoopProps> = ({ rotation , children, externalTrigger, tension, friction }) => {
  const [isBooped, setIsBooped] = useState(false);
  const [isHovered,setHovered] = useState(false);
  const [isInclined, setInclined] = useState(false)
  const isTouchable = useMediaQuery({ query: MediaQueries.TOUCHABLE });

  const boopStyle = useSpring({
    transform: isBooped
      ? `rotate(${-rotation}deg)`
      : isInclined ? `rotate(-10deg)`
        : `rotate(0deg)`,
    config: {
      tension: tension,
      friction: friction,
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

  useEffect(() => {
    if (externalTrigger) {
      trigger()
    }
  }, [externalTrigger]);

  return (
    <animated.div
      onMouseEnter={trigger}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => {
        if (isTouchable) {
          trigger()
        }
      }}
      onTouchEnd={() => setHovered(false)}
      style={boopStyle}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {children}
      </div>
    </animated.div>
  );
};

export default InclinedBoop
