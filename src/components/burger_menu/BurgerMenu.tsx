import './BurgerMenu.css'
import '../../assets/styles/animation_durations.css'
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/ReduxStore";
import DefaultButton from "../default_button/DefaultButton";
import {DefaultButtonColor} from "../../constants/DefaultButtonColor";
import LangPicker from "../lang_picker/LangPicker";
import {useLocation, useNavigate} from "react-router-dom";
import {setIsBurgerShown} from "../../redux/burger_menu_reducer/BurgerMenuReducer";
import ColorThemePicker from "../color_theme_picker/ColorThemePicker";
import {ColorTheme} from "../../constants/ColorTheme";
import {Lang} from "../../constants/Lang";
import {RoutePaths} from "../../constants/RoutePaths";
import ExternalLinks from "../../constants/ExternalLinks";

const BurgerMenu: React.FC = () => {
  const isBurgerOpened = useSelector((state: RootState) => state.burgerMenu.isOpened)
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)
  const currLang = useSelector((state: RootState) => state.lang.lang)

  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setIsBurgerShown(false))
  }, [dispatch, location]);

  return(
    <>
      <div className={`blurring_div ${isBurgerOpened && 'opened'} ${currTheme === ColorTheme.DARK ? 'dark' : 'white'}`}/>
      <div className={`burger_menu animation-02s-all ${isBurgerOpened && 'opened'} ${currTheme === ColorTheme.DARK ? 'dark' : 'white'}`}>
        <div className="switchers">
          <ColorThemePicker/>
          <LangPicker/>
        </div>
        <div className="buttons">
          <DefaultButton
            color={DefaultButtonColor.MINT}
            text={currLang === Lang.ENG ? 'Projects' : 'Проекты'}
            onClickAction={() => navigate(RoutePaths.HOME)}
          />
          <DefaultButton
            color={DefaultButtonColor.YELLOW}
            text={currLang === Lang.ENG ? 'Services' : 'Услуги'}
            onClickAction={() => navigate(RoutePaths.SERVICES)}
          />
          <DefaultButton
            color={DefaultButtonColor.ORANGE}
            text={currLang === Lang.ENG ? 'About' : 'Обо мне'}
            onClickAction={() => navigate(RoutePaths.ABOUT)}
          />
          <DefaultButton
            color={DefaultButtonColor.BLUE}
            text={currLang === Lang.ENG ? 'Telegram' : 'Телеграм'}
            onClickAction={() => window.open(ExternalLinks.TELEGRAM, '_blank')}
          />
          <DefaultButton
            color={DefaultButtonColor.WHITE}
            text={currLang === Lang.ENG ? 'Github' : 'Гитхаб'}
            onClickAction={() => window.open(ExternalLinks.GITHUB, '_blank')}
          />
          <DefaultButton
            color={DefaultButtonColor.VIOLET}
            text={currLang === Lang.ENG ? 'Email' : 'Эл. Почта'}
            onClickAction={() => window.open(`mailto:${ExternalLinks.EMAIL}`, '_blank')}
          />
        </div>
      </div>
    </>
  )
}

export default BurgerMenu
