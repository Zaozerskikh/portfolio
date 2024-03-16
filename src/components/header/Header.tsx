import './Header.css'
import '../../assets/styles/fonts.css'
import React from "react";
import '../../assets/styles/animation_durations.css'
import BurgerButton from "../burger_button/BurgerButton";
import {ColorTheme} from "../../constants/ColorTheme";
import {RoutePaths} from "../../constants/RoutePaths";
import {useLocation} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../constants/MediaQueries";
import HeaderDesktopLink from "./header_desktop_link/HeaderDesktopLink";
import {DefaultButtonColor} from "../../constants/DefaultButtonColor";
import ExternalLinks from "../../constants/ExternalLinks";
import ColorThemeSwitcher from "../color_theme_picker/color_theme_switcher/colorThemeSwitcher";
import Logo from "./logo/Logo";
import {useTranslation} from "react-i18next";
import {toggleLang} from "../../i18n/config/i18n";
import {useAppSelector} from "../../redux/Hooks";

const Header: React.FC = () => {
  const currTheme = useAppSelector(state => state.colorTheme)
  const isTablet = useMediaQuery({ query: MediaQueries.TABLET})
  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})

  const location = useLocation()
  const { t } = useTranslation();

  return(
    <header className="header-wrapper">
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
            <nav className="header-links-wrapper">
              <HeaderDesktopLink
                text={t('header.projects')}
                color={DefaultButtonColor.VIOLET}
                isSelected={location.pathname === RoutePaths.HOME}
                link={RoutePaths.HOME}
              />
              <HeaderDesktopLink
                text={t('header.services')}
                color={DefaultButtonColor.YELLOW}
                isSelected={location.pathname === RoutePaths.SERVICES}
                link={RoutePaths.SERVICES}
              />
              <HeaderDesktopLink
                text={t('header.about')}
                color={DefaultButtonColor.ORANGE}
                isSelected={location.pathname === RoutePaths.ABOUT}
                link={RoutePaths.ABOUT}
              />
              <HeaderDesktopLink
                text={t('header.tg')}
                color={DefaultButtonColor.BLUE}
                isSelected={false}
                link={ExternalLinks.TELEGRAM}
                isExternal={true}
              />
              <HeaderDesktopLink
                text={t('header.github')}
                color={DefaultButtonColor.GRAY}
                isSelected={false}
                link={ExternalLinks.GITHUB}
                isExternal={true}
              />
              <HeaderDesktopLink
                text={t('header.email')}
                color={DefaultButtonColor.ORANGE}
                isSelected={false}
                link={`mailto:${ExternalLinks.EMAIL}`}
                isExternal={true}
              />
            </nav>
            <div className="header-left-section">
              <HeaderDesktopLink
                text={t('header.lang')}
                color={DefaultButtonColor.MINT}
                isSelected={false}
                link={''}
                asBtn={true}
                onClickAsBtn={toggleLang}
              />
              <ColorThemeSwitcher/>
            </div>
          </>
        ) : (
          <BurgerButton/>
        )}
      </div>
    </header>
  )
}

export default Header
