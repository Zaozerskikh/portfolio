import './FooterLink.css'
import '../../../assets/styles/animation_durations.css'
import '../../../assets/styles/fonts.css'
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/ReduxStore";
import {ColorTheme} from "../../../constants/ColorTheme";

interface FooterLinkProps {
  link: string,
  text: string
}

const FooterLink: React.FC<FooterLinkProps> = ({ link, text }) => {
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)

  return(
    <div
      className={`mobile-h2-text animation-02s-all ${currTheme === ColorTheme.WHITE ? 'dark' : 'white'}`}
      onClick={() => window.open(link, '_blank')}
    >
      {text}
    </div>
  )
}

export default FooterLink
