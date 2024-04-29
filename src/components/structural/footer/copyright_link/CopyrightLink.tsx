import './CopyrightLink.css'
import '../../../../assets/styles/animation_durations.css'
import React from "react";
import ExternalLinks from "../../../../constants/ExternalLinks";
import {ColorTheme} from "../../../../constants/ColorTheme";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../../../constants/MediaQueries";
import useHover from "../../../../utils/hooks/UseHoverHook";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useAppSelector} from "../../../../redux/Hooks";

const CopyrightLink: React.FC = () => {
  const {isHovered, ...hoverHandlers} = useHover()
  const currTheme = useAppSelector(state => state.colorTheme)
  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})
  const { t } = useTranslation()

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
        {t('footer.designerCredits')}
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
