import './BurgerButton.css'
import '../../assets/styles/animation_durations.css'
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleBurger} from "../../redux/BurgerMenuReducer";
import '../../assets/styles/fonts.css'
import {Lang} from "../../constants/Lang";
import {ColorTheme} from "../../constants/ColorTheme";
import {RootStoreState} from "../../redux/ReduxStore";

const BurgerButton: React.FC = () => {
  const isOpened = useSelector((state: RootStoreState) => state.burger.isOpened)
  const currTheme = useSelector((state: RootStoreState) => state.colorTheme)
  const currLang = useSelector((state: RootStoreState) => state.lang)
  const dispatch = useDispatch()

  return(
    <div
      className="burger-btn-wrapper"
      onClick={() => dispatch(toggleBurger())}
    >
      <div className={`onhover mobile-menu-text animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}>
        {'<'}
      </div>
      <div className={`mobile-menu-text-wrapper animation-02s-all ${!isOpened && 'hidden'}`}>
        <div className={`mobile-menu-text animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}>
          /
        </div>
      </div>
      <div className={`mobile-menu-text animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}>
        {currLang === Lang.ENG ? 'menu>' : 'меню>'}
      </div>
    </div>
  )
}

export default BurgerButton
