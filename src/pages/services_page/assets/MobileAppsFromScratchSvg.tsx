import React from "react";
import {ServiceIconAssetProps} from "./ServiceIconAssetProps";
import {ColorTheme} from "../../../redux/color_theme_reducer/ColorTheme";

const MobileAppsFromScratchSvg: React.FC<ServiceIconAssetProps> = ({ colorTheme}) => {
  return(
    colorTheme === ColorTheme.DARK ? (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="13.5" y="6.5" width="21" height="35" rx="1.5" fill="#2F2F2F" stroke="#8A8A8A"/>
        <rect x="16.5" y="12.5" width="15" height="11" rx="1.5" fill="#EEC9FF" stroke="#8A8A8A"/>
        <rect x="16.5" y="25.5" width="15" height="3" rx="1.5" fill="#81C7F8" stroke="#8A8A8A"/>
        <rect x="16.5" y="30.5" width="15" height="3" rx="1.5" fill="#FFFB90" stroke="#8A8A8A"/>
        <rect x="16.5" y="35.5" width="15" height="3" rx="1.5" fill="#B1FFE3" stroke="#8A8A8A"/>
        <rect x="21.5" y="8.5" width="5" height="1" rx="0.5" fill="black" stroke="#8A8A8A"/>
      </svg>
    ) : (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="13.5" y="6.5" width="21" height="35" rx="1.5" fill="#EFEFEF" stroke="black"/>
        <rect x="16.5" y="12.5" width="15" height="11" rx="1.5" fill="#EEC9FF" stroke="black"/>
        <rect x="16.5" y="25.5" width="15" height="3" rx="1.5" fill="#81C7F8" stroke="black"/>
        <rect x="16.5" y="30.5" width="15" height="3" rx="1.5" fill="#FFFB90" stroke="black"/>
        <rect x="16.5" y="35.5" width="15" height="3" rx="1.5" fill="#B1FFE3" stroke="black"/>
        <rect x="21" y="8" width="6" height="2" rx="1" fill="black"/>
      </svg>
    )
  )
}

export default MobileAppsFromScratchSvg
