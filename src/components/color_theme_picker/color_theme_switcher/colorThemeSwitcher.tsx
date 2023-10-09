import './colorThemeSwitcher.css'
import './../../../assets/animation_durations.css'
import React, {useEffect, useState} from "react";
import {ColorTheme} from "../../../redux/color_theme_reducer/ColorTheme";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/ReduxStore";
import SelectedSun from "../assets/SelectedSun";
import InactiveSun from "../assets/InactiveSun";
import SelectedMoon from "../assets/SelectedMoon";
import InactiveMoon from "../assets/InactiveMoon";
import {toggleColorTheme} from "../../../redux/color_theme_reducer/ColorThemeReducer";
import Boop from "../../boop/Boop";
import SunRotator from "./sun_rotator/SunRotator";

interface ColorThemeSwitcherProps {
  assignedTheme: ColorTheme
}

const ColorThemeSwitcher: React.FC<ColorThemeSwitcherProps> = ({ assignedTheme}) => {
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)
  const dispatch = useDispatch()

  const [isBooped, setIsBooped] = useState(false)
  const [isRotated, setRotated] = useState(false)

  useEffect(() => {
    if (isBooped) {
      setTimeout(() => {
        setIsBooped(false)
      }, 200)
    }
  }, [isBooped]);

  useEffect(() => {
    if (isRotated) {
      setTimeout(() => {
        setRotated(false)
      }, 200)
    }
  }, [isRotated]);

  return(
    <div
      className={`
        color-theme-switcher-wrapper 
        animation-02s-all
        ${currTheme === ColorTheme.WHITE ? 'white' : 'dark'}
        ${currTheme === assignedTheme && (currTheme === ColorTheme.DARK ? 'dark-selected' : 'white-selected')}
      `}
      onClick={() => {
        setIsBooped(true)
        setRotated(true)
        dispatch(toggleColorTheme())
      }}
    >
      {assignedTheme === ColorTheme.WHITE ? (
        currTheme === ColorTheme.WHITE ? (
          <SunRotator trigger={isRotated}>
            <SelectedSun/>
          </SunRotator>
        ) : (
          <SunRotator trigger={isRotated}>
            <InactiveSun/>
          </SunRotator>
        )
      ) : (
        currTheme === ColorTheme.DARK ? (
          <Boop tension={400} friction={5} rotation={20} externalTrigger={isBooped}>
            <SelectedMoon/>
          </Boop>
        ) : (
          <Boop tension={400} friction={5} rotation={20} externalTrigger={isBooped}>
            <InactiveMoon/>
          </Boop>
        )
      )}
    </div>
  )
}

export default ColorThemeSwitcher
