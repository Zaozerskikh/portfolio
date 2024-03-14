import './BurgerMenu.css'
import '../../assets/styles/animation_durations.css'
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ButtonWithLink} from "../default_button/DefaultButton";
import {DefaultButtonColor} from "../../constants/DefaultButtonColor";
import LangPicker from "../lang_picker/LangPicker";
import {useLocation} from "react-router-dom";
import {setIsBurgerShown} from "../../redux/BurgerMenuReducer";
import ColorThemePicker from "../color_theme_picker/ColorThemePicker";
import {ColorTheme} from "../../constants/ColorTheme";
import {Lang} from "../../constants/Lang";
import {RoutePaths} from "../../constants/RoutePaths";
import ExternalLinks from "../../constants/ExternalLinks";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../constants/MediaQueries";
import {useDrag} from "@use-gesture/react";
import {animated} from "react-spring";
import {ReactDOMAttributes} from "@use-gesture/react/dist/declarations/src/types";
import {RootStoreState} from "../../redux/ReduxStore";


const BurgerMenu: React.FC = () => {
  const isBurgerOpened = useSelector((state: RootStoreState) => state.burger.isOpened)
  const currTheme = useSelector((state: RootStoreState) => state.colorTheme)
  const currLang = useSelector((state: RootStoreState) => state.lang)
  const isMobile = useMediaQuery({ query: MediaQueries.NORMAL_MOBILE})

  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setIsBurgerShown(false))
  }, [dispatch, location, isMobile]);

  const bind = useDrag(({ movement: [mx] }) => {
    if (mx > 8) {
      dispatch(setIsBurgerShown(false))
    }
  }) as unknown as (...args: any[]) => ReactDOMAttributes;

  return(
    <>
      <div
        className={`blurring_div ${isBurgerOpened && 'opened'} ${currTheme === ColorTheme.DARK ? 'dark' : 'white'}`}
        onTouchEnd={e => {
          e.preventDefault()
          dispatch(setIsBurgerShown(false))
        }}
      />
      <animated.div {...bind()}>
        <div className={`burger_menu animation-02s-all ${isBurgerOpened && 'opened'} ${currTheme === ColorTheme.DARK ? 'dark' : 'white'}`}>
          <div className="switchers">
            <ColorThemePicker/>
            <LangPicker/>
          </div>
          <nav className="buttons">
            <ButtonWithLink
              color={DefaultButtonColor.MINT}
              text={currLang === Lang.ENG ? 'Projects' : 'Проекты'}
              to={RoutePaths.HOME}
            />
            <ButtonWithLink
              color={DefaultButtonColor.YELLOW}
              text={currLang === Lang.ENG ? 'Services' : 'Услуги'}
              to={RoutePaths.SERVICES}
            />
            <ButtonWithLink
              color={DefaultButtonColor.ORANGE}
              text={currLang === Lang.ENG ? 'About' : 'Обо мне'}
              to={RoutePaths.ABOUT}
            />
            <ButtonWithLink
              color={DefaultButtonColor.BLUE}
              text={currLang === Lang.ENG ? 'Telegram' : 'Телеграм'}
              to={ExternalLinks.TELEGRAM}
              openAsBlank={true}
            />
            <ButtonWithLink
              color={DefaultButtonColor.WHITE}
              text={currLang === Lang.ENG ? 'Github' : 'Гитхаб'}
              to={ExternalLinks.GITHUB}
              openAsBlank={true}
            />
            <ButtonWithLink
              color={DefaultButtonColor.VIOLET}
              text={currLang === Lang.ENG ? 'E-mail' : 'Эл. Почта'}
              to={`mailto:${ExternalLinks.EMAIL}`}
              openAsBlank={true}
            />
          </nav>
        </div>
      </animated.div>
    </>
  )
}

export default BurgerMenu
