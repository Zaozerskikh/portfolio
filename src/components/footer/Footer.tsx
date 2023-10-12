import './Footer.css'
import '../../assets/styles/animation_durations.css'
import '../../assets/styles/fonts.css'
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/ReduxStore";
import {ColorTheme} from "../../constants/ColorTheme";
import FooterLink from "./footer_link/FooterLink";
import ExternalLinks from "../../constants/ExternalLinks";
import {Lang} from "../../constants/Lang";
import CopyrightLink from "./copyright_link/CopyrightLink";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../constants/MediaQueries";

const Footer: React.FC = () => {
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)
  const currLang = useSelector((state: RootState) => state.lang.lang)
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
          {currLang === Lang.ENG ? '© 2023 Sergey Zaozerskikh' : '© 2023 Сергей Заозерских'}
        </div>
        <CopyrightLink/>
      </div>
    </div>
  )
}

export default Footer
