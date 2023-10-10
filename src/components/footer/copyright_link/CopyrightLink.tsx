import './CopyrightLink.css'
import './../../../assets/styles/animation_durations.css'
import React, {useState} from "react";
import ExternalLinks from "../../../constants/ExternalLinks";
import {ColorTheme} from "../../../constants/ColorTheme";
import {Lang} from "../../../constants/Lang";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/ReduxStore";
import {useMediaQuery} from "react-responsive";

const CopyrightLink: React.FC = () => {
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)
  const currLang = useSelector((state: RootState) => state.lang.lang)

  const [isHovered, setHovered] = useState(false)
  const isTouchable = useMediaQuery({ query: '(pointer: coarse)' });

  return(
    <div
      onClick={() => window.open(ExternalLinks.GLEB_KOSSOV_COPYRIGHT, '_blank')}
      className={`
        mobile-description-text animation-02s-all
        ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}
        ${isHovered && (currTheme === ColorTheme.DARK ? 'hovered-white' : 'hovered-dark')}
      `}
      onMouseEnter={() => {
        if (!isTouchable) {
          setHovered(true)
        }
      }}
      onMouseLeave={() => {
        if (!isTouchable) {
          setHovered(false)
        }
      }}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      onTouchCancel={() => setHovered(false)}
    >
      {currLang === Lang.ENG ? 'designed by Gleb Kossov' : 'задизайнил Глеб Коссов'}
    </div>
  )
}

export default CopyrightLink
