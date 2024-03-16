import './HeaderDesktopLink.css'
import './../../../assets/styles/fonts.css'
import './../../../assets/styles/animation_durations.css'
import React from "react";
import {DefaultButtonColor} from "../../../constants/DefaultButtonColor";
import {ColorTheme} from "../../../constants/ColorTheme";
import useHoverAndClick from "../../../utils/hooks/UseHoverAndClickHook";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../../redux/Hooks";

interface HeaderDesktopLinkProps {
  text: string;
  color: DefaultButtonColor;
  link: string;
  isSelected: boolean;
  isExternal?: boolean;
  asBtn?: boolean;
  onClickAsBtn?: () => void;
}

const HeaderDesktopLink: React.FC<HeaderDesktopLinkProps> = ({
  text,
  link,
  isExternal,
  color,
  isSelected,
  asBtn,
  onClickAsBtn
}) => {
  const currTheme = useAppSelector(state => state.colorTheme)
  const {isHovered, isClicked, ...eventHandlers} = useHoverAndClick()
  const WrapperComponent = asBtn ? "div" : Link

  return(
    <WrapperComponent
      to={link}
      style={{ textDecoration: 'none' }}
      target={isExternal ? '_blank' : undefined}
      onClick={() => {
        if (onClickAsBtn && asBtn) {
          onClickAsBtn()
        }
      }}
      className={`desktop-header-link-wrapper ${isHovered && 'hovered'}`}
      {...eventHandlers}
    >
      <div
        className={`
          link-bracket animation-02s-all mobile-button-text
          ${(isClicked || isHovered || isSelected) && color}  
          ${isHovered && 'hovered'} 
          ${currTheme !== ColorTheme.DARK ? 'dark' : 'white'}
        `}
      >
        {'<'}
      </div>
      <div
        className={`
          desktop-header-wrapper animation-02s-all mobile-button-text
          ${(isClicked || isHovered || isSelected) && color} 
          ${isHovered && 'hovered'} 
          ${currTheme !== ColorTheme.DARK ? 'dark' : 'white'}
        `}
      >
        {text}
      </div>
      <div
        className={`
          link-bracket animation-02s-all mobile-button-text
          ${(isClicked || isHovered || isSelected) && color} 
          ${isHovered && 'hovered'} 
          ${currTheme !== ColorTheme.DARK ? 'dark' : 'white'}
        `}
      >
        {'>'}
      </div>
    </WrapperComponent>
  )
}

export default HeaderDesktopLink
