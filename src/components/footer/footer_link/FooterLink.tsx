import './FooterLink.css'
import '../../../assets/styles/animation_durations.css'
import '../../../assets/styles/fonts.css'
import React from "react";
import {useSelector} from "react-redux";
import {ColorTheme} from "../../../constants/ColorTheme";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../../constants/MediaQueries";
import useHoverAndClick from "../../../utils/hooks/UseHoverAndClickHook";
import {Link} from "react-router-dom";
import {RootStoreState} from "../../../redux/ReduxStore";

interface FooterLinkProps {
  link: string,
  text: string,
  styleOnHover: string;
  styleOnClick: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ link, text, styleOnHover, styleOnClick }) => {
  const {isHovered, isClicked, ...eventHandlers} = useHoverAndClick()
  const currTheme = useSelector((state: RootStoreState) => state.colorTheme);
  const isTablet = useMediaQuery({ query: MediaQueries.TABLET})
  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})

  return(
    <Link
      to={link}
      style={{ textDecoration: 'none' }}
      target={'_blank'}
      className={`
        h2-text footer-link ${isDesktop && 'desktop'} ${isTablet && 'tablet'} animation-02s-all noselect
        ${!isHovered && !isClicked && (currTheme === ColorTheme.WHITE ? 'white' : 'dark')}
        ${isHovered && styleOnHover} ${isClicked && styleOnClick}
      `}
      {...eventHandlers}
    >
      {text}
    </Link>
  )
}

export default FooterLink
