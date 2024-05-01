import '../../../assets/styles/fonts.css'
import React from "react";
import {ColorTheme} from "../../../constants/ColorTheme";
import {RoutePaths} from "../../../constants/RoutePaths";
import {useLocation} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../../constants/MediaQueries";
import HeaderDesktopLink from "./header_desktop_link/HeaderDesktopLink";
import {DefaultButtonColor} from "../../buttons/default_button/DefaultButtonColor";
import ExternalLinks from "../../../constants/ExternalLinks";
import ColorThemeSwitcher from "../../buttons/pickers/color_theme_picker/color_theme_switcher/colorThemeSwitcher";
import Logo from "./logo/Logo";
import {useTranslation} from "react-i18next";
import {toggleLang} from "../../../i18n/config/i18n";
import {useAppSelector} from "../../../redux/Hooks";
import BurgerMenu from "../../burger_menu/BurgerMenu";
import styled from "styled-components";

const StyledHeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

const StyledHeader = styled.div<{
  $desktop: boolean,
  $colorTheme: ColorTheme
}>`
  transition: 0.2s ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  top: 0;
  z-index: 10;
  align-self: center;
  max-width: 1440px;

  height: ${props => props?.$desktop ? '74' : '48'}px;
  background-color: ${props => props?.$colorTheme === ColorTheme.WHITE 
          ? 'var(--main-white, #FFF)' 
          : 'var(--dark-theme-bg, #1E1E1E)'
  };
  position: ${props => props?.$desktop ? 'relative' : 'fixed'};
  padding: ${props => props?.$desktop ? '8px 88px' : '8px 16px'};
`

const HeaderLinksWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 14px;
`

const HeaderLeftSection = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 16px
`

const Header: React.FC = () => {
  const currTheme = useAppSelector(state => state.colorTheme)
  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})

  const location = useLocation()
  const { t } = useTranslation();

  return(
    <StyledHeaderWrapper>
      <StyledHeader
        $desktop={isDesktop}
        $colorTheme={currTheme}
      >
        <Logo/>
        {isDesktop ? (
          <>
            <HeaderLinksWrapper>
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
            </HeaderLinksWrapper>
            <HeaderLeftSection>
              <HeaderDesktopLink
                text={t('header.lang')}
                color={DefaultButtonColor.MINT}
                isSelected={false}
                link={''}
                asBtn={true}
                onClickAsBtn={toggleLang}
              />
              <ColorThemeSwitcher/>
            </HeaderLeftSection>
          </>
        ) : (
          <BurgerMenu/>
        )}
      </StyledHeader>
    </StyledHeaderWrapper>
  )
}

export default Header
