import './Footer.css'
import '../../../assets/styles/animation_durations.css'
import '../../../assets/styles/fonts.css'
import React from "react";
import {ColorTheme} from "../../../constants/ColorTheme";
import FooterLink from "./footer_link/FooterLink";
import ExternalLinks from "../../../constants/ExternalLinks";
import CopyrightLink from "./copyright_link/CopyrightLink";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../../constants/MediaQueries";
import {useTranslation} from "react-i18next";
import {useAppSelector} from "../../../redux/Hooks";

const Footer: React.FC = () => {
  const currTheme = useAppSelector(state=> state.colorTheme)
  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})
  const { t } = useTranslation()

  return(
    <footer className={`footer-wrapper animation-02s-all ${currTheme === ColorTheme.DARK ? 'dark' : 'white'}`}>
      <nav className="links">
        <FooterLink
          link={ExternalLinks.TELEGRAM}
          text={t('footer.tg')}
          styleOnHover={'blue-text-hover'}
          styleOnClick={'blue-text-click'}
        />
        <FooterLink
          link={ExternalLinks.GITHUB}
          text={t('footer.github')}
          styleOnHover={'grey-text-hover'}
          styleOnClick={'grey-text-click'}
        />
        <FooterLink
          link={`mailto:${ExternalLinks.EMAIL}`}
          text={ExternalLinks.EMAIL}
          styleOnHover={'violet-text-hover'}
          styleOnClick={'violet-text-click'}
        />
      </nav>
      <nav className="bottom-links">
        <time className={`description-text ${isDesktop && 'desktop'} ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}>
          {t('footer.copyright', { date: new Date().getFullYear() })}
        </time>
        <CopyrightLink/>
      </nav>
    </footer>
  )
}

export default Footer
