import './LangPicker.css'
import React from "react";
import LangSwitcher from "./lang_switcher/LangSwitcher";
import {toggleLang} from "../../i18n/config/i18n";

const LangPicker: React.FC = () => {
  return(
    <div className="lang-picker">
      <LangSwitcher lang={'rus'} onClickAction={toggleLang} />
      <LangSwitcher lang={'en'} onClickAction={toggleLang} />
    </div>
  )
}

export default LangPicker
