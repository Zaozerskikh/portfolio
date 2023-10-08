import './colorThemeSwitcher.css'
import './../../../assets/animation_durations.css'
import React from "react";
import {ColorTheme} from "../../../redux/color_theme_reducer/ColorTheme";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/ReduxStore";
import SelectedSun from "../assets/SelectedSun";
import InactiveSun from "../assets/InactiveSun";
import SelectedMoon from "../assets/SelectedMoon";
import InactiveMoon from "../assets/InactiveMoon";
import {toggleColorTheme} from "../../../redux/color_theme_reducer/ColorThemeReducer";

interface ColorThemeSwitcherProps {
  assignedTheme: ColorTheme
}

const ColorThemeSwitcher: React.FC<ColorThemeSwitcherProps> = ({ assignedTheme}) => {
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)
  const dispatch = useDispatch()

  return(
    <div
      className={`
        color-theme-switcher-wrapper 
        animation-02s-all
        ${currTheme === ColorTheme.WHITE ? 'white' : 'dark'}
        ${currTheme === assignedTheme && (currTheme === ColorTheme.DARK ? 'dark-selected' : 'white-selected')}
      `}
      onClick={() => dispatch(toggleColorTheme())}
    >
      {assignedTheme === ColorTheme.WHITE ? (
        currTheme === ColorTheme.WHITE ? (
          <SelectedSun/>
        ) : (
          <InactiveSun/>
        )
      ) : (
        currTheme === ColorTheme.DARK ? (
          <SelectedMoon/>
        ) : (
          <InactiveMoon/>
        )
      )}
    </div>
  )
}

export default ColorThemeSwitcher
