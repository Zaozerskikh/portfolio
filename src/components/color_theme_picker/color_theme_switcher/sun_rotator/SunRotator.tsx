import React, {useEffect, useState} from "react";
import './SunRotator.css'

interface SunRotatorProps extends React.PropsWithChildren {
  trigger: boolean;
}
const SunRotator: React.FC<SunRotatorProps> = ({ children, trigger}) => {
  const [rotated, setRotated] = useState(false)

  useEffect(() => {
    if (trigger) {
      setRotated(true);

      setTimeout(() => {
        setRotated(false);
      }, 200);
    }
  }, [trigger]);

  return(
    <div className={`sun-rotator-wrapper ${rotated && "rotated"}`}>
      {children}
    </div>
  )
}

export default SunRotator
