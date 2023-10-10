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

const NotFoundPage: React.FC = () => {
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)
  const currLang = useSelector((state: RootState) => state.lang.lang)
  const navigate = useNavigate()

  return(
    <div className="page-404-wrapper">
      <NotFoundPageSvg theme={currTheme}/>
      <div className="text-wrapper">
        <div className={`mobile-h1-text animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}>
          404
        </div>
        <div
          className={`mobile-main-text animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
          dangerouslySetInnerHTML={{ __html: `${currLang === Lang.ENG ? (
              'It means that the page has been deleted, or there is an error </br>in the link. But it doesn’t </br>matter, because all my projects </br> are available on the main page :)'
            ) : (
              'Это значит, что страница устарела </br>и была удалена, либо в ссылке ошибка. Но это не важно, потому что все мои проекты доступны </br> на главной странице :)'
            )}`}}
        />
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
