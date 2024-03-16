import './LangSwitcher.css'
import '../../../assets/styles/animation_durations.css'
import '../../../assets/styles/fonts.css'
import React from "react";
import {ColorTheme} from "../../../constants/ColorTheme";
import {useTranslation} from "react-i18next";
import {useAppSelector} from "../../../redux/Hooks";

interface LangSwitcherProps {
  lang: string;
  onClickAction: () => void;
}
const LangSwitcher: React.FC<LangSwitcherProps> = ({ lang, onClickAction}) => {
  const selectedColorTheme = useAppSelector(state => state.colorTheme)
  const { i18n } = useTranslation()

  return(
    <button
      className={`lang-switcher-wrapper animation-02s-all
        ${selectedColorTheme === ColorTheme.DARK ? 'dark' : 'white'} 
        ${(lang === i18n?.language) && (selectedColorTheme === ColorTheme.DARK ? 'dark-selected' : 'white-selected')}
      `}
      onClick={onClickAction}
    >
      <div className={`mobile-button-text ${selectedColorTheme === ColorTheme.DARK ? 'white' : 'dark'}`}>
        {lang === 'rus' ? 'Рус' : 'Eng'}
      </div>
    </button>
  )
}

export default LangSwitcher
