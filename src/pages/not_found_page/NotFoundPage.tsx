import './NotFoundPage.css'
import '../../assets/styles/fonts.css'
import '../../assets/styles/animation_durations.css'
import React from "react";
import NotFoundPageSvg from "./assets/NotFoundPageSvg";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/ReduxStore";
import {DefaultButtonColor} from "../../constants/DefaultButtonColor";
import {Lang} from "../../constants/Lang";
import DefaultButton from "../../components/default_button/DefaultButton";
import {useNavigate} from "react-router-dom";
import {RoutePaths} from "../../constants/RoutePaths";
import {ColorTheme} from "../../constants/ColorTheme";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../constants/MediaQueries";
import TextFormatterComponent from "../../components/text_formatter/TextFormatterComponent";

const NotFoundPage: React.FC = () => {
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)
  const currLang = useSelector((state: RootState) => state.lang.lang)
  const navigate = useNavigate()

  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})
  const isTablet = useMediaQuery({ query: MediaQueries.TABLET})

  return(
    <div className="page-404-wrapper">
      <div className={`svg-and-text-wrapper ${isDesktop && 'desktop'}`}>
        <NotFoundPageSvg theme={currTheme}/>
        <div className="text-wrapper">
          <div className={`h1-text ${isDesktop && 'desktop'} ${isTablet && 'tablet'} animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}>
            404
          </div>
          <TextFormatterComponent
            text={`${currLang === Lang.ENG ? (
              'It means that the page is out of date or has been deleted, or there is an error in the link. But it doesn’t matter, because all my projects are still available on the main page :)'
            ) : (
              'Это значит, что страница устарела и была удалена, либо в ссылке ошибка. Но это не важно, потому что все мои проекты доступны на главной странице :)'
            )}`}
            additionalStyles={`${isDesktop && 'mw616'} main-text ${isDesktop && 'desktop'} ${isTablet && 'tablet'} animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
            letterWidth={(isDesktop || isTablet) ? 11 : 9.9}
          />
        </div>
      </div>
      <DefaultButton
        color={DefaultButtonColor.MINT}
        text={currLang === Lang.ENG ? 'Open homepage' : 'На главную '}
        onClickAction={() => navigate(RoutePaths.HOME)}
      />
    </div>
  )
}

export default NotFoundPage
