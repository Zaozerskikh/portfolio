import './LangSwitcher.css'
import '../../../assets/styles/animation_durations.css'
import '../../../assets/styles/fonts.css'
import React from "react";
import {useSelector} from "react-redux";
import {Lang} from "../../../constants/Lang";
import {ColorTheme} from "../../../constants/ColorTheme";
import {RootStoreState} from "../../../redux/ReduxStore";

interface LangSwitcherProps {
  lang: Lang;
  onClickAction: () => void;
}
const LangSwitcher: React.FC<LangSwitcherProps> = ({ lang, onClickAction}) => {
  const selectedColorTheme = useSelector((state: RootStoreState) => state.colorTheme)
  const selectedLang = useSelector((state: RootStoreState) => state.lang)

  return(
    <button
      className={`lang-switcher-wrapper animation-02s-all
        ${selectedColorTheme === ColorTheme.DARK ? 'dark' : 'white'} 
        ${(lang === selectedLang) && (selectedColorTheme === ColorTheme.DARK ? 'dark-selected' : 'white-selected')}
      `}
      onClick={onClickAction}
    >
      <div className={`mobile-button-text ${selectedColorTheme === ColorTheme.DARK ? 'white' : 'dark'}`}>
        {lang}
      </div>
    </button>
  )
}

export default LangSwitcher
