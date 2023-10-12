import React from "react";
import {ServiceIconAssetProps} from "./ServiceIconAssetProps";
import {ColorTheme} from "../../../constants/ColorTheme";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../../constants/MediaQueries";

const WebsitesFromScratchSvg: React.FC<ServiceIconAssetProps> = ({ colorTheme}) => {
  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})

  return(
    isDesktop ? (
      colorTheme === ColorTheme.DARK ? (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="11.4577" y="21.875" width="77.0833" height="45.8333" rx="3.125" fill="#2F2F2F" stroke="#8A8A8A" strokeWidth="2.08333"/>
          <rect x="17.7077" y="28.125" width="27.0833" height="16.6667" rx="3.125" fill="#EEC9FF" stroke="#8A8A8A" strokeWidth="2.08333"/>
          <rect x="34.3747" y="48.9583" width="16.6667" height="12.5" rx="3.125" fill="#B1FFE3" stroke="#8A8A8A" strokeWidth="2.08333"/>
          <rect x="17.7077" y="48.9583" width="12.5" height="12.5" rx="6.25" fill="#FFFB90" stroke="#8A8A8A" strokeWidth="2.08333"/>
          <path d="M33.333 79.1667H66.6663" stroke="#8A8A8A" strokeWidth="2.08333" strokeLinecap="round"/>
          <path d="M39.583 79.1667V68.75" stroke="#8A8A8A" strokeWidth="2.08333"/>
          <path d="M60.416 79.1667V68.75" stroke="#8A8A8A" strokeWidth="2.08333"/>
          <rect x="50.5199" y="31.7708" width="32.2917" height="1.04167" fill="black" stroke="#8A8A8A" strokeWidth="1.04167"/>
          <rect x="50.5199" y="38.0208" width="32.2917" height="1.04167" fill="black" stroke="#8A8A8A" strokeWidth="1.04167"/>
          <rect x="58.8529" y="48.4375" width="23.9583" height="1.04167" fill="black" stroke="#8A8A8A" strokeWidth="1.04167"/>
          <rect x="58.8529" y="54.6875" width="23.9583" height="1.04167" fill="black" stroke="#8A8A8A" strokeWidth="1.04167"/>
          <rect x="58.8529" y="60.9375" width="23.9583" height="1.04167" fill="black" stroke="#8A8A8A" strokeWidth="1.04167"/>
        </svg>
      ) : (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="11.4582" y="21.875" width="77.0833" height="45.8333" rx="3.125" fill="#EFEFEF" stroke="black" strokeWidth="2.08333"/>
          <rect x="17.7082" y="28.125" width="27.0833" height="16.6667" rx="3.125" fill="#EEC9FF" stroke="black" strokeWidth="2.08333"/>
          <rect x="34.3752" y="48.9583" width="16.6667" height="12.5" rx="3.125" fill="#B1FFE3" stroke="black" strokeWidth="2.08333"/>
          <rect x="17.7082" y="48.9583" width="12.5" height="12.5" rx="6.25" fill="#FFFB90" stroke="black" strokeWidth="2.08333"/>
          <path d="M33.3335 79.1667H66.6668" stroke="black" strokeWidth="2.08333" strokeLinecap="round"/>
          <path d="M39.5835 79.1667V68.75" stroke="black" strokeWidth="2.08333"/>
          <path d="M60.4165 79.1667V68.75" stroke="black" strokeWidth="2.08333"/>
          <rect x="50" y="31.25" width="33.3333" height="2.08333" fill="black"/>
          <rect x="50" y="37.5" width="33.3333" height="2.08333" fill="black"/>
          <rect x="58.3335" y="47.9167" width="25" height="2.08333" fill="black"/>
          <rect x="58.3335" y="54.1667" width="25" height="2.08333" fill="black"/>
          <rect x="58.3335" y="60.4167" width="25" height="2.08333" fill="black"/>
        </svg>
      )
    ) : (
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
  )
}

export default WebsitesFromScratchSvg
