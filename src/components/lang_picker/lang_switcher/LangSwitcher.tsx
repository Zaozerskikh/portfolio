import './LangSwitcher.css'
import './../../../assets/animation_durations.css'
import './../../../assets/fonts.css'
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/ReduxStore";
import {Lang} from "../../../redux/lang_reducer/Lang";
import {ColorTheme} from "../../../redux/color_theme_reducer/ColorTheme";

interface LangSwitcherProps {
  lang: Lang;
  onClickAction: () => void;
}
const LangSwitcher: React.FC<LangSwitcherProps> = ({ lang, onClickAction}) => {
  const selectedColorTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)
  const selectedLang = useSelector((state: RootState) => state.lang.lang)

  useEffect(() => {
    console.log(selectedColorTheme)
  }, [selectedColorTheme]);

  useEffect(() => {
    console.log(selectedLang)
  }, [selectedLang]);

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
