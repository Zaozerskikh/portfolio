import {animated, useSpring} from 'react-spring';
import React, {useEffect, useState} from "react";
import {useDrag} from "@use-gesture/react";
import {ReactDOMAttributes} from "@use-gesture/react/dist/declarations/src/types";

interface BoopProps {
  rotation: number;
  children: any;
  isMobile ? : boolean;
  externalTrigger ? : boolean;
}
const Boop: React.FC<BoopProps> = ({ rotation , children, isMobile , externalTrigger}) => {
  const [isBooped, setIsBooped] = useState(false);
  const [isHovered,setHovered] = useState(false);

  const s = useSpring({
    display: 'inline-block',
    transform: isBooped
      ? `rotate(${-rotation}deg)`
      : `rotate(0deg)`,
    config: {
      tension: 400,
      friction: 5,
    },
  });

  const trigger = () => {
    setHovered(true)
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

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    if (mx > 5 && isMobile) {
      trigger()
    }
  }) as unknown as (...args: any[]) => ReactDOMAttributes;

  return (
    <animated.div {...bind()}
      onMouseEnter={trigger}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => {
        if (isMobile) {
          trigger()
        }
      }}
      onTouchEnd={() => setHovered(false)}
      style={s}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {children}
      </div>
    </animated.div>
  );
};

export default Boop
