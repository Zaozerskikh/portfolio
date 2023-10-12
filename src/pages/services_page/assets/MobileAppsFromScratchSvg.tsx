import React from "react";
import {ServiceIconAssetProps} from "./ServiceIconAssetProps";
import {ColorTheme} from "../../../constants/ColorTheme";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../../constants/MediaQueries";

const MobileAppsFromScratchSvg: React.FC<ServiceIconAssetProps> = ({ colorTheme}) => {
  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})

  return(
    isDesktop ? (
      colorTheme === ColorTheme.DARK ? (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="28.1257" y="13.5417" width="43.75" height="72.9167" rx="3.125" fill="#2F2F2F" stroke="#8A8A8A" strokeWidth="2.08333"/>
          <rect x="34.3757" y="26.0417" width="31.25" height="22.9167" rx="3.125" fill="#EEC9FF" stroke="#8A8A8A" strokeWidth="2.08333"/>
          <rect x="34.3757" y="53.125" width="31.25" height="6.25" rx="3.125" fill="#81C7F8" stroke="#8A8A8A" strokeWidth="2.08333"/>
          <rect x="34.3757" y="63.5417" width="31.25" height="6.25" rx="3.125" fill="#FFFB90" stroke="#8A8A8A" strokeWidth="2.08333"/>
          <rect x="34.3757" y="73.9583" width="31.25" height="6.25" rx="3.125" fill="#B1FFE3" stroke="#8A8A8A" strokeWidth="2.08333"/>
          <rect x="44.7926" y="17.7083" width="10.4167" height="2.08333" rx="1.04167" fill="black" stroke="#8A8A8A" strokeWidth="2.08333"/>
        </svg>
      ) : (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="28.1252" y="13.5417" width="43.75" height="72.9167" rx="3.125" fill="#EFEFEF" stroke="black" strokeWidth="2.08333"/>
          <rect x="34.3752" y="26.0417" width="31.25" height="22.9167" rx="3.125" fill="#EEC9FF" stroke="black" strokeWidth="2.08333"/>
          <rect x="34.3752" y="53.125" width="31.25" height="6.25" rx="3.125" fill="#81C7F8" stroke="black" strokeWidth="2.08333"/>
          <rect x="34.3752" y="63.5417" width="31.25" height="6.25" rx="3.125" fill="#FFFB90" stroke="black" strokeWidth="2.08333"/>
          <rect x="34.3752" y="73.9583" width="31.25" height="6.25" rx="3.125" fill="#B1FFE3" stroke="black" strokeWidth="2.08333"/>
          <rect x="43.75" y="16.6667" width="12.5" height="4.16667" rx="2.08333" fill="black"/>
        </svg>
      )
    ) : (
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
  )
}

export default MobileAppsFromScratchSvg
