import './Avatar.css'
import React, {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../../constants/MediaQueries";
import InclinedBoop from "./InclinedBoop";

const Avatar: React.FC = () => {
  const avatar = 'https://i.imgur.com/iZV5NZ3.png'
  const [isHovered, setHovered] = useState(false)
  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})
  const isTouchable = useMediaQuery({ query: MediaQueries.TOUCHABLE });
  const [externalTrigger, setExternalTrigger] = useState(false)

  useEffect(() => {
    if (externalTrigger) {
      setTimeout(() => {
        setExternalTrigger(false)
      }, 2000)
    }
  }, [externalTrigger]);

  useEffect(() => {
    if (isTouchable) {
      setTimeout(() => {
        setExternalTrigger(true)
      }, 2000)
    }
  }, [isTouchable]);

  return(
    <div style={{ zIndex: '3'}}>
      <InclinedBoop
        rotation={20}
        externalTrigger={externalTrigger}
        tension={400}
        friction={10}
      >
        <div
          className={`avatar-wrapper ${isDesktop && 'desktop'} ${isHovered && 'hovered'}`}
          onMouseEnter={() => {
            if (!isTouchable) {
              setHovered(true)
            }
          }}
          onMouseLeave={() => {
            if (!isTouchable) {
              setHovered(false)
            }
          }}
        >
          <img src={avatar} className={`avatar ${isDesktop && 'desktop'}`} alt="avatar"/>
          <div className={`avatar-shadow ${isDesktop && 'desktop'}`}/>
        </div>
      </InclinedBoop>
    </div>
  )
}

export default Avatar
