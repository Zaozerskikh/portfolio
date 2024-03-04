import './CopyrightLink.css'
import './../../../assets/styles/animation_durations.css'
import React from "react";
import ExternalLinks from "../../../constants/ExternalLinks";
import {ColorTheme} from "../../../constants/ColorTheme";
import {Lang} from "../../../constants/Lang";
import {useSelector} from "react-redux";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../../constants/MediaQueries";
import useHover from "../../../utils/hooks/UseHoverHook";
import {Link} from "react-router-dom";
import {RootStoreState} from "../../../redux/ReduxStore";

const CopyrightLink: React.FC = () => {
  const {isHovered, ...hoverHandlers} = useHover()
  const currTheme = useSelector((state: RootStoreState) => state.colorTheme)
  const currLang = useSelector((state: RootStoreState) => state.lang)
  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})

  return(
    <Link
      to={ExternalLinks.GLEB_KOSSOV_COPYRIGHT}
      style={{ textDecoration: 'none' }}
      target={'_blank'}
      className="copyright-link-wrapper"
      {...hoverHandlers}
    >
      <div
        className={`
          link-bracket ${isHovered && 'hovered'}
          description-text ${isDesktop && 'desktop'} animation-02s-all
          ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}
          ${isHovered && (currTheme === ColorTheme.DARK ? 'hovered-white' : 'hovered-dark')}
        `}
      >
        {'<'}
      </div>
      <div
        className={`
          description-text ${isDesktop && 'desktop'} animation-02s-all
          ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}
          ${isHovered && (currTheme === ColorTheme.DARK ? 'hovered-white' : 'hovered-dark')}
        `}
      >
        {currLang === Lang.ENG ? 'designed by Gleb Kossov' : 'задизайнил Глеб Коссов'}
      </div>
      <div
        className={`
          link-bracket ${isHovered && 'hovered'}
          description-text ${isDesktop && 'desktop'} animation-02s-all
          ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}
          ${isHovered && (currTheme === ColorTheme.DARK ? 'hovered-white' : 'hovered-dark')}
        `}
      >
        {'>'}
      </div>
    </Link>
  )
}

export default CopyrightLink
