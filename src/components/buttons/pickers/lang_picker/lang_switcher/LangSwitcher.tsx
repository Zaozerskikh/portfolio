import '../../../../../assets/styles/fonts.css'
import React from "react";
import {ColorTheme} from "../../../../../constants/ColorTheme";
import {useTranslation} from "react-i18next";
import {useAppSelector} from "../../../../../redux/Hooks";
import {LangSwitcherProps} from "./LangSwitcherProps";
import {StyledSwitcher} from "../../styles/SwitcherStyles";

const LangSwitcher: React.FC<LangSwitcherProps> = ({ lang, onClickAction}) => {
  const selectedColorTheme = useAppSelector(state => state.colorTheme)
  const { i18n } = useTranslation()

  return(
    <StyledSwitcher
      $colorTheme={selectedColorTheme}
      $picked={lang === i18n?.language}
      onClick={onClickAction}
    >
      <div className={`mobile-button-text ${selectedColorTheme === ColorTheme.DARK ? 'white' : 'dark'}`}>
        {lang === 'rus' ? 'Рус' : 'Eng'}
      </div>
    </StyledSwitcher>
  )
}

export default LangSwitcher
