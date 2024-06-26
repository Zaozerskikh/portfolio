import {animated, useSpring} from 'react-spring';
import React, {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../constants/MediaQueries";

interface BoopProps {
  rotation: number;
  tension: number;
  friction: number;
  children: React.ReactNode;
  externalTrigger ? : boolean;
  boopOnHover ? : boolean;
  boopOnClick ? : boolean;
}
const Boop: React.FC<BoopProps> = ({ rotation , children , externalTrigger,
                                     boopOnClick, boopOnHover, tension, friction}) => {
  const [isBooped, setIsBooped] = useState(false);
  const isTouchable = useMediaQuery({ query: MediaQueries.TOUCHABLE });

  const style = useSpring({
    display: 'inline-block',
    transform: isBooped
      ? `rotate(${-rotation}deg)`
      : `rotate(0deg)`,
    config: {
      tension: tension,
      friction: friction,
    },
  });

  const trigger = () => {
    setIsBooped(true)
    setTimeout(() => {
      setIsBooped(false)
    }, 200)
  };

  useEffect(() => {
    if (externalTrigger) {
      trigger()
    }
  }, [externalTrigger]);

  return (
    <animated.div
      onMouseEnter={() => {
        if (!isTouchable && boopOnHover) {
          trigger()
        }
      }}
      onTouchStart={() => {
        if (isTouchable && boopOnClick) {
          trigger()
        }
      }}
      onClick={() => {
        if (!isTouchable && boopOnClick) {
          trigger()
        }
      }}
      style={style}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {children}
      </div>
    </animated.div>
  );
};

export default Boop
