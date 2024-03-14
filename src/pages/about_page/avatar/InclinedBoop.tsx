import {animated, useSpring} from 'react-spring';
import React, {useCallback, useEffect, useRef, useState} from "react";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../../constants/MediaQueries";

interface InclinedBoopProps extends React.PropsWithChildren {
  rotation: number;
  tension: number;
  friction: number;
  externalTrigger ? : boolean;
  rotateOnClick?: boolean;
  tensionOnClick?: number;
  frictionOnClick?: number;
  onClickRollbackTimeInMs?: number;
}

const InclinedBoop: React.FC<InclinedBoopProps> = ({
  rotation ,
  children,
  externalTrigger,
  tension,
  friction,
  rotateOnClick,
  tensionOnClick,
  frictionOnClick,
  onClickRollbackTimeInMs
}) => {
  const [isBooped, setIsBooped] = useState(false);
  const [isHovered, setHovered] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const [isInclined, setInclined] = useState(false)
  const isTouchable = useMediaQuery({ query: MediaQueries.TOUCHABLE });
  const boopAnimationTimeouts = useRef<NodeJS.Timeout[]>([])
  const inclineOnClickAnimationTimeout = useRef<NodeJS.Timeout | undefined>()

  const boopStyle = useSpring({
    transform: isBooped
      ? `rotate(${-rotation}deg)`
      : isInclined ? `rotate(-${isClicked && rotateOnClick ? 180 : 10}deg)`
        : `rotate(0deg)`,
    config: {
      tension: isClicked && rotateOnClick ? tensionOnClick ? tensionOnClick : 600 : tension,
      friction: isClicked && rotateOnClick ? frictionOnClick ? frictionOnClick : 5 : friction,
    },
  });

  useEffect(() => {
    if (!isHovered && isInclined){
      setInclined(false)
    }
  }, [isHovered, isInclined]);

  const trigger = useCallback(() => {
    setHovered(true);
    setIsBooped(true);
    boopAnimationTimeouts.current?.push(setTimeout(() => {
      setIsBooped(false);
    }, 50));

    if (!isTouchable) {
      boopAnimationTimeouts.current?.push(setTimeout(() => {
        setInclined(true);
      }, 200));
    }
  }, [isTouchable]);

  useEffect(() => {
    if (externalTrigger) {
      trigger()
    }
  }, [externalTrigger, trigger]);

  const onClickStartAction = useCallback(() => {
    if (rotateOnClick) {
      if (inclineOnClickAnimationTimeout?.current !== undefined) {
        window.clearTimeout(inclineOnClickAnimationTimeout?.current as unknown as NodeJS.Timeout)
      }
      setClicked(true)
    }
  }, [rotateOnClick]);

  const onClickEndAction = useCallback(() => {
    if (rotateOnClick) {
      inclineOnClickAnimationTimeout.current = setTimeout(() => {
        setClicked(false)
      }, onClickRollbackTimeInMs ? onClickRollbackTimeInMs : 1222)
    }
  }, [rotateOnClick, onClickRollbackTimeInMs]);

  return (
    <animated.div
      onMouseEnter={trigger}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => {
        if (isTouchable) {
          trigger()
        }
      }}
      onTouchEnd={() => {
        if (isTouchable) {
          setHovered(false)
        }
      }}
      onMouseDown={onClickStartAction}
      onMouseUp={onClickEndAction}
      style={boopStyle}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {children}
      </div>
    </animated.div>
  );
};

export default InclinedBoop
