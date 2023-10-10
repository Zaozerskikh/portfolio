import './LangSwitcher.css'
import '../../../assets/styles/animation_durations.css'
import '../../../assets/styles/fonts.css'
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/ReduxStore";
import {Lang} from "../../../constants/Lang";
import {ColorTheme} from "../../../constants/ColorTheme";

interface LangSwitcherProps {
  lang: Lang;
  onClickAction: () => void;
}
const LangSwitcher: React.FC<LangSwitcherProps> = ({ lang, onClickAction}) => {
  const selectedColorTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)
  const selectedLang = useSelector((state: RootState) => state.lang.lang)

  return(
    <div
      className={`lang-switcher-wrapper animation-02s-all
        ${selectedColorTheme === ColorTheme.DARK ? 'dark' : 'white'} 
        ${(lang === selectedLang) && (selectedColorTheme === ColorTheme.DARK ? 'dark-selected' : 'white-selected')}
      `}
      onClick={onClickAction}
    >
      <div className={`mobile-button-text ${selectedColorTheme === ColorTheme.DARK ? 'dark' : 'white'}`}>{lang}</div>
    </div>
  )
}

export default LangSwitcher
