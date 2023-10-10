import './FooterLink.css'
import '../../../assets/styles/animation_durations.css'
import '../../../assets/styles/fonts.css'
import React, {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/ReduxStore";
import {ColorTheme} from "../../../constants/ColorTheme";
import {useMediaQuery} from "react-responsive";

interface FooterLinkProps {
  link: string,
  text: string,
  styleOnHover ? : string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ link, text, styleOnHover }) => {
  const [isHovered, setHovered] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme);
  const isTouchable = useMediaQuery({ query: '(pointer: coarse)' });

  return(
    <div
      className={`
        mobile-h2-text animation-02s-all noselect
        ${currTheme === ColorTheme.WHITE ? 'dark' : 'white'}
        ${isHovered && styleOnHover}
      `}
      onClick={() => window.open(link, '_blank')}
      onMouseEnter={() => {
        if (!isTouchable) {
          setHovered(true)
        }
      }}
      onMouseLeave={() => {
        if (!isTouchable) {
          setHovered(false)
          setClicked(false)
        }
      }}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      onTouchCancel={() => setHovered(false)}
      onMouseDown={() => {
        if (!isTouchable) {
          setClicked(true)
        }
      }}
      onMouseUp={() => {
        if (!isTouchable) {
          setClicked(false)
        }
      }}
    >
      {text}
    </div>
  )
}

export default FooterLink
