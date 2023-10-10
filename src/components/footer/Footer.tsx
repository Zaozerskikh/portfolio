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

const Footer: React.FC = () => {
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)
  const currLang = useSelector((state: RootState) => state.lang.lang)

  return(
    <div className={`footer-wrapper animation-02s-all ${currTheme === ColorTheme.DARK ? 'dark' : 'white'}`}>
      <div className="links">
        <FooterLink
          link={ExternalLinks.TELEGRAM}
          text={currLang === Lang.ENG ? 'telegram' : 'телеграм'}
        />
        <FooterLink
          link={ExternalLinks.GITHUB}
          text={currLang === Lang.ENG ? 'github' : 'гитхаб'}
        />
        <FooterLink
          link={`mailto:${ExternalLinks.EMAIL}`}
          text={ExternalLinks.EMAIL}
        />
      </div>
      <div className="bottom-links">
        <div className={`mobile-description-text ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}>
          {currLang === Lang.ENG ? '© 2023 Sergey Zaozerskikh' : '© 2023 Сергей Заозерских'}
        </div>
        <div
          onClick={() => window.open(ExternalLinks.GLEB_KOSSOV_COPYRIGHT, '_blank')}
          className={`mobile-description-text ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
        >
          {currLang === Lang.ENG ? 'designed by Gleb Kossov' : 'задизайнил Глеб Коссов'}
        </div>
      </div>
    </div>
  )
}

export default Footer