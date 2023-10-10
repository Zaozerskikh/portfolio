import React from "react";
import {ColorTheme} from "../../../constants/ColorTheme";

interface NotFoundPageSvgProps {
  theme: ColorTheme
}
const NotFoundPageSvg: React.FC<NotFoundPageSvgProps> = ({ theme}) => {
  return(
    theme === ColorTheme.DARK ? (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="11.4583" y="21.8752" width="77.0833" height="45.8333" rx="3.125" fill="#2F2F2F" stroke="#8A8A8A" strokeWidth="2.08333"/>
        <path d="M37.5 33.3335L62.5 58.3335M37.5 58.3335L62.5 33.3335" stroke="#FFB178" strokeWidth="2.08333"/>
        <path d="M33.3333 79.1665H66.6667" stroke="#8A8A8A" strokeWidth="2.08333" strokeLinecap="round"/>
        <path d="M39.5833 79.1667V68.75" stroke="#8A8A8A" strokeWidth="2.08333"/>
        <path d="M60.4167 79.1667V68.75" stroke="#8A8A8A" strokeWidth="2.08333"/>
      </svg>
    ) : (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="11.4583" y="21.8749" width="77.0833" height="45.8333" rx="3.125" fill="#EFEFEF" stroke="black" strokeWidth="2.08333"/>
        <path d="M37.5 33.3333L62.5 58.3333M37.5 58.3333L62.5 33.3333" stroke="#FFB178" strokeWidth="2.08333"/>
        <path d="M33.3333 79.1667H66.6667" stroke="black" strokeWidth="2.08333" strokeLinecap="round"/>
        <path d="M39.5833 79.1667V68.75" stroke="black" strokeWidth="2.08333"/>
        <path d="M60.4167 79.1667V68.75" stroke="black" strokeWidth="2.08333"/>
      </svg>
    )
  )
}

export default NotFoundPageSvg
