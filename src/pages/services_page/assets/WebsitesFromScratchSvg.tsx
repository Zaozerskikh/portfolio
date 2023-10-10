import React from "react";
import {ServiceIconAssetProps} from "./ServiceIconAssetProps";
import {ColorTheme} from "../../../constants/ColorTheme";

const WebsitesFromScratchSvg: React.FC<ServiceIconAssetProps> = ({ colorTheme}) => {
  return(
    colorTheme === ColorTheme.DARK ? (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5.5" y="10.5" width="37" height="22" rx="1.5" fill="#2F2F2F" stroke="#8A8A8A"/>
        <rect x="8.5" y="13.5" width="13" height="8" rx="1.5" fill="#EEC9FF" stroke="#8A8A8A"/>
        <rect x="16.5" y="23.5" width="8" height="6" rx="1.5" fill="#B1FFE3" stroke="#8A8A8A"/>
        <rect x="8.5" y="23.5" width="6" height="6" rx="3" fill="#FFFB90" stroke="#8A8A8A"/>
        <path d="M16 38H32" stroke="#8A8A8A" strokeLinecap="round"/>
        <path d="M19 38V33" stroke="#8A8A8A"/>
        <path d="M29 38V33" stroke="#8A8A8A"/>
        <rect x="24.25" y="15.25" width="15.5" height="0.5" fill="black" stroke="#8A8A8A" strokeWidth="0.5"/>
        <rect x="24.25" y="18.25" width="15.5" height="0.5" fill="black" stroke="#8A8A8A" strokeWidth="0.5"/>
        <rect x="28.25" y="23.25" width="11.5" height="0.5" fill="black" stroke="#8A8A8A" strokeWidth="0.5"/>
        <rect x="28.25" y="26.25" width="11.5" height="0.5" fill="black" stroke="#8A8A8A" strokeWidth="0.5"/>
        <rect x="28.25" y="29.25" width="11.5" height="0.5" fill="black" stroke="#8A8A8A" strokeWidth="0.5"/>
      </svg>
    ) : (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5.5" y="10.5" width="37" height="22" rx="1.5" fill="#EFEFEF" stroke="black"/>
        <rect x="8.5" y="13.5" width="13" height="8" rx="1.5" fill="#EEC9FF" stroke="black"/>
        <rect x="16.5" y="23.5" width="8" height="6" rx="1.5" fill="#B1FFE3" stroke="black"/>
        <rect x="8.5" y="23.5" width="6" height="6" rx="3" fill="#FFFB90" stroke="black"/>
        <path d="M16 38H32" stroke="black" strokeLinecap="round"/>
        <path d="M19 38V33" stroke="black"/>
        <path d="M29 38V33" stroke="black"/>
        <rect x="24" y="15" width="16" height="1" fill="black"/>
        <rect x="24" y="18" width="16" height="1" fill="black"/>
        <rect x="28" y="23" width="12" height="1" fill="black"/>
        <rect x="28" y="26" width="12" height="1" fill="black"/>
        <rect x="28" y="29" width="12" height="1" fill="black"/>
      </svg>
    )
  )
}

export default WebsitesFromScratchSvg
