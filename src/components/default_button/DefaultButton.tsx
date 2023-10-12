import './DefaultButton.css'
import '../../assets/styles/fonts.css'
import '../../assets/styles/animation_durations.css'
import React, {useState} from "react";
import {useMediaQuery} from "react-responsive";
import {DefaultButtonColor} from "../../constants/DefaultButtonColor";
import {MediaQueries} from "../../constants/MediaQueries";

export interface DefaultButtonProps {
  color: DefaultButtonColor,
  text: string,
  onClickAction: () => void;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({ color, text, onClickAction}) => {
  const [isHovered, setHovered] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const isTouchable = useMediaQuery({ query: MediaQueries.TOUCHABLE });

  return(
    <div
      className={`default-btn-wrapper animation-02s-all ${color} ${isHovered && 'hovered'} ${isClicked && 'clicked'}`}
      onClick={onClickAction}
      onMouseEnter={() => {
        if (!isTouchable) {
          setHovered(true)
        }
      }}
      onMouseLeave={() => {
        if (!isTouchable) {
          setHovered(false)
          setClicked(false)
        }
      }}
      onTouchStart={() => setClicked(true)}
      onTouchEnd={() => setTimeout(() => setClicked(false), 1000)}
      onTouchCancel={() => setTimeout(() => setClicked(false), 1000)}
      onMouseDown={() => {
        if (!isTouchable) {
          setClicked(true)
        }
      }}
      onMouseUp={() => {
        if (!isTouchable) {
          setClicked(false)
        }
      }}
    >
      <div className={`mobile-button-text`}>{text}</div>
    </div>
  )
}

export default DefaultButton
