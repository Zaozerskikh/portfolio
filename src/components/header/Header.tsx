import './Header.css'
import './../../assets/fonts.css'
import React from "react";
import BurgerButton from "../burger_button/BurgerButton";

const Header: React.FC = () => {
  return(
    <div className="header">
      <div className="mobile-menu-text">Serg Zaozerskikh</div>
      <BurgerButton/>
    </div>
  )
}

export default Header
