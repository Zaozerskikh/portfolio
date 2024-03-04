import './NotFoundPage.css'
import '../../assets/styles/fonts.css'
import '../../assets/styles/animation_durations.css'
import React from "react";
import NotFoundPageSvg from "./assets/NotFoundPageSvg";
import {useSelector} from "react-redux";
import {DefaultButtonColor} from "../../constants/DefaultButtonColor";
import {Lang} from "../../constants/Lang";
import DefaultButton from "../../components/default_button/DefaultButton";
import {useNavigate} from "react-router-dom";
import {RoutePaths} from "../../constants/RoutePaths";
import {ColorTheme} from "../../constants/ColorTheme";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../constants/MediaQueries";
import {RootStoreState} from "../../redux/ReduxStore";

const NotFoundPage: React.FC = () => {
  const currTheme = useSelector((state: RootStoreState) => state.colorTheme)
  const currLang = useSelector((state: RootStoreState) => state.lang)
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
            {currLang === Lang.ENG
              ? 'It means that the page is\u00A0out of\u00A0date or\u00A0has been deleted, or\u00A0there is\u00A0an\u00A0error in\u00A0the link. But it\u00A0doesn’t matter, because all my\u00A0projects are still available on\u00A0the main page :)'
              : 'Это значит, что страница устарела и\u00A0была удалена, либо в\u00A0ссылке ошибка. Но это не важно, потому что все мои проекты доступны на\u00A0главной странице :)'
            }
          </div>
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
