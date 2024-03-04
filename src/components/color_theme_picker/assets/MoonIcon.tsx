import React from "react";
import {useSelector} from "react-redux";
import {RootStoreState} from "../../../redux/ReduxStore";
import {ColorTheme} from "../../../constants/ColorTheme";

interface MoonIconProps {
  isActive?: boolean;
  isHovered?: boolean;
}

const MoonIcon: React.FC<MoonIconProps> = ({ isActive, isHovered }) => {
  const currTheme = useSelector((state: RootStoreState) => state.colorTheme)

  return(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className={'animation-02s-all'}
        d="M3 11.4489C3 16.7238 7.16904 21 12.3118 21C16.2709 21 19.6529 18.4657 21 14.8925C19.9331 15.4065 18.7418 15.6938 17.485 15.6938C12.9137 15.6938 9.20787 11.8928 9.20787 7.20396C9.20787 5.24299 9.85605 3.4373 10.9446 2C6.45002 2.6783 3 6.65034 3 11.4489Z"
        fill={isActive || isHovered ? '#FFFB90' : 'none'}
      />
      <path
        className={'animation-02s-all'}
        d="M3 11.4489C3 16.7238 7.16904 21 12.3118 21C16.2709 21 19.6529 18.4657 21 14.8925C19.9331 15.4065 18.7418 15.6938 17.485 15.6938C12.9137 15.6938 9.20787 11.8928 9.20787 7.20396C9.20787 5.24299 9.85605 3.4373 10.9446 2C6.45002 2.6783 3 6.65034 3 11.4489Z"
        stroke={currTheme === ColorTheme.DARK ? 'white' : 'black'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default MoonIcon
