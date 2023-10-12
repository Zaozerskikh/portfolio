import React from "react";
import {ColorTheme} from "../../../constants/ColorTheme";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../../constants/MediaQueries";

interface NotFoundPageSvgProps {
  theme: ColorTheme
}
const NotFoundPageSvg: React.FC<NotFoundPageSvgProps> = ({ theme}) => {
  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})

  return(
    isDesktop ? (
      theme === ColorTheme.DARK ? (
        <svg width="168" height="168" viewBox="0 0 168 168" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="19.25" y="36.75" width="129.5" height="77" rx="5.25" fill="#2F2F2F" stroke="#8A8A8A" strokeWidth="3.5"/>
          <path d="M63 56L105 98M63 98L105 56" stroke="#FFB178" strokeWidth="3.5"/>
          <path d="M56 133H112" stroke="#8A8A8A" strokeWidth="3.5" strokeLinecap="round"/>
          <path d="M66.5 133V115.5" stroke="#8A8A8A" strokeWidth="3.5"/>
          <path d="M101.5 133V115.5" stroke="#8A8A8A" strokeWidth="3.5"/>
        </svg>
      ) : (
        <svg width="168" height="168" viewBox="0 0 168 168" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="19.25" y="36.75" width="129.5" height="77" rx="5.25" fill="#EFEFEF" stroke="black" strokeWidth="3.5"/>
          <path d="M63 56L105 98M63 98L105 56" stroke="#FFB178" strokeWidth="3.5"/>
          <path d="M56 133H112" stroke="black" strokeWidth="3.5" strokeLinecap="round"/>
          <path d="M66.5 133V115.5" stroke="black" strokeWidth="3.5"/>
          <path d="M101.5 133V115.5" stroke="black" strokeWidth="3.5"/>
        </svg>
      )
    ) : (
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
  )
}

export default NotFoundPageSvg
