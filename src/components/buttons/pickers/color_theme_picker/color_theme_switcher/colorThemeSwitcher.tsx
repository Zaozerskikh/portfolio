import React, {useEffect, useState} from "react";
import {ColorTheme} from "../../../../../constants/ColorTheme";
import SunIcon from "../assets/SunIcon";
import MoonIcon from "../assets/MoonIcon";
import Boop from "../../../../boop/Boop";
import SunRotator from "./sun_rotator/SunRotator";
import useHover from "../../../../../utils/hooks/UseHoverHook";
import {toggleTheme} from "../../../../../redux/ColorThemeReducer";
import {useAppDispatch, useAppSelector} from "../../../../../redux/Hooks";
import {StyledSwitcher} from "../../styles/SwitcherStyles";
import {ColorThemeSwitcherProps} from "./ColorThemeSwitcherProps";

const ColorThemeSwitcher: React.FC<ColorThemeSwitcherProps> = ({ assignedTheme}) => {
  const currTheme = useAppSelector(state => state.colorTheme)
  const dispatch = useAppDispatch()

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
    <StyledSwitcher
      $colorTheme={currTheme}
      $picked={currTheme === assignedTheme}
      $transparent={assignedTheme === undefined}
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
    </StyledSwitcher>
  )
}

export default ColorThemeSwitcher
