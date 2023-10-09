import './LangPicker.css'
import React from "react";
import {useDispatch} from "react-redux";
import {Lang} from "../../redux/lang_reducer/Lang";
import {toggleLang} from "../../redux/lang_reducer/LangReducer";
import LangSwitcher from "./lang_switcher/LangSwitcher";

const LangPicker: React.FC = () => {
  const dispatch = useDispatch()

  return(
    <div className="lang-picker">
      <LangSwitcher lang={Lang.RUS} onClickAction={() => dispatch(toggleLang())} />
      <LangSwitcher lang={Lang.ENG} onClickAction={() => dispatch(toggleLang())} />
    </div>
  )
}

export default LangPicker
