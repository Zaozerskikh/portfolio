import React from "react";
import {useSelector} from "react-redux";
import {RootStoreState} from "../../../redux/ReduxStore";
import {ColorTheme} from "../../../constants/ColorTheme";

interface SunProps {
  isHovered ? : boolean;
  isActive ?: boolean;
}
const SunIcon: React.FC<SunProps> = ({ isActive, isHovered }) => {
  const currTheme = useSelector((state: RootStoreState) => state.colorTheme)

  return(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        className={'animation-02-all'}
        cx="12"
        cy="12"
        r="5"
        fill={isActive || isHovered ? '#FFFB90' : 'none'}
      />
      <path
        className={'animation-02s-all'}
        d="M12 20L12 22M12 2L12 4M20 12H22M2 12H4M18 17.9995L19.5 19.4995M4.5 4.49949L6.00002 5.99953M18 6L19.5 4.5M4.5 19.5L6 18M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
        stroke={currTheme === ColorTheme.WHITE ? 'black' : 'white'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SunIcon
