import './Header.css'
import '../../assets/styles/fonts.css'
import React from "react";
import '../../assets/styles/animation_durations.css'
import BurgerButton from "../burger_button/BurgerButton";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/ReduxStore";
import {ColorTheme} from "../../constants/ColorTheme";
import {RoutePaths} from "../../constants/RoutePaths";
import {useLocation, useNavigate} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../constants/MediaQueries";
import HeaderDesktopLink from "./header_desktop_link/HeaderDesktopLink";
import {DefaultButtonColor} from "../../constants/DefaultButtonColor";
import {Lang} from "../../constants/Lang";
import ExternalLinks from "../../constants/ExternalLinks";
import {toggleLang} from "../../redux/lang_reducer/LangReducer";
import ColorThemeSwitcher from "../color_theme_picker/color_theme_switcher/colorThemeSwitcher";
import Logo from "./logo/Logo";

const Header: React.FC = () => {
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)
  const currLang = useSelector((state: RootState) => state.lang.lang)

  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isTablet = useMediaQuery({ query: MediaQueries.TABLET})
  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})

  return(
    <div className="header-wrapper">
      <div
        className={`
          header animation-02s-all
          ${isDesktop ? 'desktop' : isTablet ? 'tablet' : 'mobile'} 
          ${currTheme === ColorTheme.DARK ? 'dark' : 'white'}
        `}
      >
        <Logo/>
        {isDesktop ? (
          <>
            <div className="header-links-wrapper">
              <HeaderDesktopLink
                text={currLang === Lang.ENG ? 'projects' : 'проекты'}
                color={DefaultButtonColor.VIOLET}
                isSelected={location.pathname === RoutePaths.HOME}
                onClickAction={() => navigate(RoutePaths.HOME)}
              />
              <HeaderDesktopLink
                text={currLang === Lang.ENG ? 'services' : 'услуги'}
                color={DefaultButtonColor.YELLOW}
                isSelected={location.pathname === RoutePaths.SERVICES}
                onClickAction={() => navigate(RoutePaths.SERVICES)}
              />
              <HeaderDesktopLink
                text={currLang === Lang.ENG ? 'about' : 'обо мне'}
                color={DefaultButtonColor.ORANGE}
                isSelected={location.pathname === RoutePaths.ABOUT}
                onClickAction={() => navigate(RoutePaths.ABOUT)}
              />
              <HeaderDesktopLink
                text={currLang === Lang.ENG ? 'telegram' : 'телеграм'}
                color={DefaultButtonColor.BLUE}
                isSelected={false}
                onClickAction={() => window.open(ExternalLinks.TELEGRAM, '_blank')}
              />
              <HeaderDesktopLink
                text={currLang === Lang.ENG ? 'github' : 'гитхаб'}
                color={DefaultButtonColor.GRAY}
                isSelected={false}
                onClickAction={() => window.open(ExternalLinks.GITHUB, '_blank')}
              />
              <HeaderDesktopLink
                text={currLang === Lang.ENG ? 'email' : 'эл. почта'}
                color={DefaultButtonColor.ORANGE}
                isSelected={false}
                onClickAction={() => window.open(`mailto:${ExternalLinks.EMAIL}`, '_blank')}
              />
            </div>
            <div className="header-left-section">
              <HeaderDesktopLink
                text={currLang === Lang.ENG ? 'Eng' : 'Рус'}
                color={DefaultButtonColor.MINT}
                isSelected={false}
                onClickAction={() => dispatch(toggleLang())}
              />
              <ColorThemeSwitcher/>
            </div>
          </>
        ) : (
          <BurgerButton/>
        )}
      </div>
    </div>
  )
}

export default Header
