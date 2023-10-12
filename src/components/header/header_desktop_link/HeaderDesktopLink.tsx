import './HeaderDesktopLink.css'
import './../../../assets/styles/fonts.css'
import './../../../assets/styles/animation_durations.css'
import React, {useState} from "react";
import {DefaultButtonColor} from "../../../constants/DefaultButtonColor";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../../constants/MediaQueries";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/ReduxStore";
import {ColorTheme} from "../../../constants/ColorTheme";

interface HeaderDesktopLinkProps {
  text: string;
  color: DefaultButtonColor;
  onClickAction: () => void;
  isSelected: boolean;
}

const HeaderDesktopLink: React.FC<HeaderDesktopLinkProps> = ({ text, color, onClickAction, isSelected}) => {
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)
  const [isHovered, setHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const isTouchable = useMediaQuery({ query: MediaQueries.TOUCHABLE });

  return(
    <div
      className={`desktop-header-link-wrapper ${isHovered && 'hovered'}`}
      onClick={onClickAction}
      onMouseEnter={() => {
        if (!isTouchable) {
          setHovered(true)
        }
      }}
      onMouseLeave={() => {
        if (!isTouchable) {
          setHovered(false)
          setIsClicked(false)
        }
      }}
      onTouchStart={() => setIsClicked(true)}
      onTouchEnd={() => setTimeout(() => setIsClicked(false), 1000)}
      onTouchCancel={() => setTimeout(() => setIsClicked(false), 1000)}
      onMouseDown={() => {
        if (!isTouchable) {
          setIsClicked(true)
        }
      }}
      onMouseUp={() => {
        if (!isTouchable) {
          setIsClicked(false)
        }
      }}
    >
      <div className={`link-bracket ${(isClicked || isSelected) && color} animation-02s-all mobile-button-text ${isHovered && 'hovered'} ${currTheme === ColorTheme.DARK && 'white'}`}>
        {'<'}
      </div>
      <div className={`desktop-header-wrapper animation-02s-all ${(isClicked || isSelected) && color} mobile-button-text ${isHovered && 'hovered'} ${currTheme === ColorTheme.DARK && 'white'}`}>
        {text}
      </div>
      <div className={`link-bracket ${(isClicked || isSelected) && color} animation-02s-all mobile-button-text ${isHovered && 'hovered'} ${currTheme === ColorTheme.DARK && 'white'}`}>
        {'>'}
      </div>
    </div>
  )
}

export default HeaderDesktopLink
