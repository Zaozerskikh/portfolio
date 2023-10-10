import './BurgerButton.css'
import '../../assets/styles/animation_durations.css'
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/ReduxStore";
import {toggleBurger} from "../../redux/burger_menu_reducer/BurgerMenuReducer";
import '../../assets/styles/fonts.css'
import {Lang} from "../../constants/Lang";
import {ColorTheme} from "../../constants/ColorTheme";

const BurgerButton: React.FC = () => {
  const isOpened = useSelector((state: RootState) => state.burgerMenu.isOpened)
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)
  const currLang = useSelector((state: RootState) => state.lang.lang)
  const dispatch = useDispatch()

  return(
    <div
      className="burger-btn-wrapper"
      onClick={() => dispatch(toggleBurger())}
    >
      <div className={`mobile-menu-text animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}>{'<'}</div>
      <div className={`mobile-menu-text-wrapper animation-02s-all ${!isOpened && 'hidden'}`}>
        <div className={`mobile-menu-text animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}>/</div>
      </div>
      <div className={`mobile-menu-text animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}>{currLang === Lang.ENG ? 'menu>' : 'меню>'}</div>
    </div>
  )
}

export default BurgerButton
