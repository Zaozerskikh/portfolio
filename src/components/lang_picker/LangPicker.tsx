import './LangPicker.css'
import React from "react";
import {useDispatch} from "react-redux";
import {Lang} from "../../redux/lang_reducer/Lang";
import {setLang} from "../../redux/lang_reducer/LangReducer";
import LangSwitcher from "./lang_switcher/LangSwitcher";

const LangPicker: React.FC = () => {
  const dispatch = useDispatch()

  return(
    <div className="lang-picker">
      <LangSwitcher lang={Lang.RUS} onClickAction={() => dispatch(setLang(Lang.RUS))} />
      <LangSwitcher lang={Lang.ENG} onClickAction={() => dispatch(setLang(Lang.ENG))} />
    </div>
  )
}

export default LangPicker
