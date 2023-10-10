import './ColorThemePicker.css'
import React from "react";
import ColorThemeSwitcher from "./color_theme_switcher/colorThemeSwitcher";
import {ColorTheme} from "../../constants/ColorTheme";

const ColorThemePicker: React.FC = () => {

  return(
    <div className="color-theme-picker-wrapper">
      <ColorThemeSwitcher assignedTheme={ColorTheme.WHITE}/>
      <ColorThemeSwitcher assignedTheme={ColorTheme.DARK}/>
    </div>
  )
}

export default ColorThemePicker
