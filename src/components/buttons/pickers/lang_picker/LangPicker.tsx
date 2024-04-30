import React from "react";
import LangSwitcher from "./lang_switcher/LangSwitcher";
import {toggleLang} from "../../../../i18n/config/i18n";
import {StyledPicker} from "../styles/PickerStyles";

const LangPicker: React.FC = () => (
  <StyledPicker>
    <LangSwitcher lang={'rus'} onClickAction={toggleLang} />
    <LangSwitcher lang={'en'} onClickAction={toggleLang} />
  </StyledPicker>
)

export default LangPicker
