import './Header.css'
import './../../assets/fonts.css'
import React from "react";
import './../../assets/animation_durations.css'
import BurgerButton from "../burger_button/BurgerButton";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/ReduxStore";
import {ColorTheme} from "../../redux/color_theme_reducer/ColorTheme";
import {RoutePaths} from "../../routes/RoutePaths";
import {useNavigate} from "react-router-dom";

const Header: React.FC = () => {
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)
  // const currLang = useSelector((state: RootState) => state.lang.lang)
  const navigate = useNavigate()

  return(
    <div className={`header animation-02s-all ${currTheme === ColorTheme.DARK ? 'dark' : 'white'}`}>
      <div
        onClick={() => {
          window.scroll({top: 0})
          navigate(RoutePaths.HOME)
        }}
        className={`mobile-menu-text animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
      >
        Serg Zaozerskikh
      </div>
      <BurgerButton/>
    </div>
  )
}

export default Header
