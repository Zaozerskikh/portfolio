import './BurgerButton.css'
import '../../assets/styles/animation_durations.css'
import React from "react";
import {toggleBurger} from "../../redux/BurgerMenuReducer";
import '../../assets/styles/fonts.css'
import {ColorTheme} from "../../constants/ColorTheme";
import {useTranslation} from "react-i18next";
import {useAppDispatch, useAppSelector} from "../../redux/Hooks";

const BurgerButton: React.FC = () => {
  const isOpened = useAppSelector(state => state.burger.isOpened)
  const currTheme = useAppSelector(state => state.colorTheme)
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  return(
    <button
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
        {t('header.burgerButton')}{'>'}
      </div>
    </button>
  )
}

export default BurgerButton
