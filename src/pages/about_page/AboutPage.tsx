import './AboutPage.css'
import './../../assets/styles/fonts.css'
import './../../assets/styles/animation_durations.css'
import React from "react";
import {ButtonWithLink} from "../../components/buttons/default_button/DefaultButton";
import {DefaultButtonColor} from "../../constants/DefaultButtonColor";
import {RoutePaths} from "../../constants/RoutePaths";
import ExternalLinks from "../../constants/ExternalLinks";
import {ColorTheme} from "../../constants/ColorTheme";
import DecorativeCodelines from "./DecorativeCodelines";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../constants/MediaQueries";
import Avatar from "./avatar/Avatar";
import {useTranslation} from "react-i18next";
import {useAppSelector} from "../../redux/Hooks";

const AboutPage: React.FC = () => {
  const currTheme = useAppSelector(state => state.colorTheme)
  const { t } = useTranslation()

  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})
  const isTablet = useMediaQuery({ query: MediaQueries.TABLET})

  return(
    <div className={`about-page-wrapper ${isDesktop && 'desktop'}`}>
      <div className={`main-about-wrapper ${isDesktop && 'desktop'}`}>
        <article className={`text-block-wrapper ${isDesktop && 'desktop'}`}>
          <h1
            className={`h1-text ${isDesktop && 'desktop'} ${isTablet && 'tablet'} animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
          >
            {t('aboutPage.header')}
          </h1>
          <div className="text-wrapper">
            <p className={`main-text ${isDesktop && 'desktop'} ${isTablet && 'tablet'} animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}>
              {t('aboutPage.mainText1')}
            </p>
            <p className={`mt13 ${isDesktop && 'desktop'} ${isTablet && 'tablet'} main-text animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}>
              {t('aboutPage.mainText2')}
            </p>
          </div>
        </article>
        <div className={`avatar-and-code-wrapper ${isDesktop && 'desktop'}`}>
          <Avatar/>
          <figure className={`code-wrapper ${isDesktop && 'desktop'}`}>
            <DecorativeCodelines/>
          </figure>
        </div>
      </div>
      <nav className="buttons">
        <ButtonWithLink
          color={DefaultButtonColor.VIOLET}
          text={t('commonBtnsText.backToCases')}
          to={RoutePaths.HOME}
        />
        <ButtonWithLink
          color={DefaultButtonColor.BLUE}
          text={t('commonBtnsText.messageInTelegram')}
          to={ExternalLinks.TELEGRAM}
          openAsBlank={true}
        />
      </nav>
    </div>
  )
}

export default AboutPage
