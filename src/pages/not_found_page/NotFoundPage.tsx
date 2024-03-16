import './NotFoundPage.css'
import '../../assets/styles/fonts.css'
import '../../assets/styles/animation_durations.css'
import React from "react";
import NotFoundPageSvg from "./assets/NotFoundPageSvg";
import {DefaultButtonColor} from "../../constants/DefaultButtonColor";
import DefaultButton from "../../components/default_button/DefaultButton";
import {useNavigate} from "react-router-dom";
import {RoutePaths} from "../../constants/RoutePaths";
import {ColorTheme} from "../../constants/ColorTheme";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../constants/MediaQueries";
import {useTranslation} from "react-i18next";
import {useAppSelector} from "../../redux/Hooks";

const NotFoundPage: React.FC = () => {
  const currTheme = useAppSelector(state => state.colorTheme)
  const { t } = useTranslation()
  const navigate = useNavigate()

  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})
  const isTablet = useMediaQuery({ query: MediaQueries.TABLET})

  return(
    <div className="page-404-wrapper">
      <div className={`svg-and-text-wrapper ${isDesktop && 'desktop'}`}>
        <NotFoundPageSvg theme={currTheme}/>
        <div className="text-wrapper">
          <h1 className={`h1-text ${isDesktop && 'desktop'} ${isTablet && 'tablet'} animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}>
            404
          </h1>
          <div
            className={`
              main-text animation-02s-all
              ${isDesktop && 'mw616'} 
              ${isDesktop && 'desktop'} 
              ${isTablet && 'tablet'} 
              ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}
            `}
          >
            {t('notFoundPage.text')}
          </div>
        </div>
      </div>
      <DefaultButton
        color={DefaultButtonColor.MINT}
        text={t('commonBtnsText.backToHome')}
        onClickAction={() => navigate(RoutePaths.HOME)}
      />
    </div>
  )
}

export default NotFoundPage
