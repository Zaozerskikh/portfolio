import './Footer.css'
import '../../assets/styles/animation_durations.css'
import '../../assets/styles/fonts.css'
import React from "react";
import {useSelector} from "react-redux";
import {ColorTheme} from "../../constants/ColorTheme";
import FooterLink from "./footer_link/FooterLink";
import ExternalLinks from "../../constants/ExternalLinks";
import {Lang} from "../../constants/Lang";
import CopyrightLink from "./copyright_link/CopyrightLink";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../constants/MediaQueries";
import {RootStoreState} from "../../redux/ReduxStore";

const Footer: React.FC = () => {
  const currTheme = useSelector((state: RootStoreState) => state.colorTheme)
  const currLang = useSelector((state: RootStoreState) => state.lang)
  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})

  return(
    <div className={`footer-wrapper animation-02s-all ${currTheme === ColorTheme.DARK ? 'dark' : 'white'}`}>
      <div className="links">
        <FooterLink
          link={ExternalLinks.TELEGRAM}
          text={currLang === Lang.ENG ? 'telegram' : 'телеграм'}
          styleOnHover={'blue-text-hover'}
          styleOnClick={'blue-text-click'}
        />
        <FooterLink
          link={ExternalLinks.GITHUB}
          text={currLang === Lang.ENG ? 'github' : 'гитхаб'}
          styleOnHover={'grey-text-hover'}
          styleOnClick={'grey-text-click'}
        />
        <FooterLink
          link={`mailto:${ExternalLinks.EMAIL}`}
          text={ExternalLinks.EMAIL}
          styleOnHover={'violet-text-hover'}
          styleOnClick={'violet-text-click'}
        />
      </div>
      <div className="bottom-links">
        <div className={`description-text ${isDesktop && 'desktop'} ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}>
          {currLang === Lang.ENG
            ? `© ${new Date().getFullYear()} Sergey Zaozerskikh`
            : `© ${new Date().getFullYear()} Сергей Заозерских`
          }
        </div>
        <CopyrightLink/>
      </div>
    </div>
  )
}

export default Footer
