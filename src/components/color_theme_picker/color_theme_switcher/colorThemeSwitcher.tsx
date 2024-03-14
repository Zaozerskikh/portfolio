import './colorThemeSwitcher.css'
import '../../../assets/styles/animation_durations.css'
import React, {useEffect, useState} from "react";
import {ColorTheme} from "../../../constants/ColorTheme";
import {useDispatch, useSelector} from "react-redux";
import SunIcon from "../assets/SunIcon";
import MoonIcon from "../assets/MoonIcon";
import Boop from "../../boop/Boop";
import SunRotator from "./sun_rotator/SunRotator";
import useHover from "../../../utils/hooks/UseHoverHook";
import {RootStoreState} from "../../../redux/ReduxStore";
import {toggleTheme} from "../../../redux/ColorThemeReducer";

interface ColorThemeSwitcherProps {
  assignedTheme ? : ColorTheme
}

const ColorThemeSwitcher: React.FC<ColorThemeSwitcherProps> = ({ assignedTheme}) => {
  const currTheme = useSelector((state: RootStoreState) => state.colorTheme)
  const dispatch = useDispatch()

  const [isBooped, setIsBooped] = useState(false)
  const [isRotated, setRotated] = useState(false)
  const {isHovered, ...hoverHandlers} = useHover()

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
    <button
      className={`
        color-theme-switcher-wrapper 
        animation-02s-all
        ${assignedTheme ? (currTheme === ColorTheme.WHITE ? 'white' : 'dark') : 'transparent'}
        ${currTheme === assignedTheme && (currTheme === ColorTheme.DARK ? 'dark-selected' : 'white-selected')}
      `}
      onClick={() => {
        setIsBooped(true)
        setRotated(true)
        dispatch(toggleTheme())
      }}
      {...hoverHandlers}
    >
      {assignedTheme ? (
        assignedTheme === ColorTheme.WHITE ? (
          <SunRotator trigger={isRotated}>
            <SunIcon isActive={currTheme === ColorTheme.WHITE}/>
          </SunRotator>
        ) : (
          <Boop tension={400} friction={5} rotation={20} externalTrigger={isBooped}>
            <MoonIcon isActive={currTheme === ColorTheme.DARK}/>
          </Boop>
        )
      ) : (
        currTheme === ColorTheme.WHITE ? (
          <SunRotator trigger={isRotated}>
            <SunIcon isHovered={isHovered} />
          </SunRotator>
        ) : (
          <Boop tension={400} friction={5} rotation={20} externalTrigger={isBooped}>
            <MoonIcon isHovered={isHovered} />
          </Boop>
        )
      )}
    </button>
  )
}

export default ColorThemeSwitcher
