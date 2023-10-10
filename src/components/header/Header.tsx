import './Header.css'
import '../../assets/styles/fonts.css'
import React from "react";
import '../../assets/styles/animation_durations.css'
import BurgerButton from "../burger_button/BurgerButton";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/ReduxStore";
import {ColorTheme} from "../../constants/ColorTheme";
import {RoutePaths} from "../../constants/RoutePaths";
import {useNavigate} from "react-router-dom";

const Header: React.FC = () => {
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)
  // const currLang = useSelector((state: RootState) => state.lang.lang)
  const navigate = useNavigate()

  return(
    <div className={`header animation-02s-all ${currTheme === ColorTheme.DARK ? 'dark' : 'white'}`}>
      <div
        onClick={() => navigate(RoutePaths.HOME)}
        className={`mobile-menu-text animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
      >
        Serg Zaozerskikh
      </div>
      <BurgerButton/>
    </div>
  )
}

export default Header
