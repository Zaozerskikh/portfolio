import React from "react";
import ColorThemeSwitcher from "./color_theme_switcher/colorThemeSwitcher";
import {ColorTheme} from "../../../../constants/ColorTheme";
import {StyledPicker} from "../styles/PickerStyles";

const ColorThemePicker: React.FC = () => (
  <StyledPicker>
    <ColorThemeSwitcher assignedTheme={ColorTheme.WHITE}/>
    <ColorThemeSwitcher assignedTheme={ColorTheme.DARK}/>
  </StyledPicker>
)

export default ColorThemePicker
