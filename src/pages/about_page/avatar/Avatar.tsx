import './Avatar.css'
import React, {useState} from "react";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../../constants/MediaQueries";
import InclinedBoop from "./InclinedBoop";

const Avatar: React.FC = () => {
  const avatar = 'https://i.imgur.com/iZV5NZ3.png'
  const [isHovered, setHovered] = useState(false)
  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})
  const isTouchable = useMediaQuery({ query: MediaQueries.TOUCHABLE });

  return(
    <div style={{ zIndex: '99'}}>
      <InclinedBoop
        rotation={20}
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
