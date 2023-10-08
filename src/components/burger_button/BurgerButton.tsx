import './BurgerButton.css'
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/ReduxStore";
import {toggleBurger} from "../../redux/burger_menu_reducer/BurgerMenuReducer";
import './../../assets/fonts.css'

const BurgerButton: React.FC = () => {
  const isOpened = useSelector((state: RootState) => state.burgerMenu.isOpened)
  const dispatch = useDispatch()

  return(
    <div
      className="burger-btn-wrapper"
      onClick={() => dispatch(toggleBurger())}
    >
      <div className="mobile-menu-text">{'<'}</div>
      <div className={`mobile-menu-text-wrapper ${!isOpened && 'hidden'}`}>
        <div className={"mobile-menu-text"}>/</div>
      </div>
      <div className="mobile-menu-text">{'menu>'}</div>
    </div>
  )
}

export default BurgerButton
