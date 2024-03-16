import React, {useEffect} from "react";
import {ColorTheme} from "../../constants/ColorTheme";
import {useAppSelector} from "../../redux/Hooks";

const MetaThemeManager: React.FC = () => {
  const currTheme = useAppSelector(state => state.colorTheme)

  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name=theme-color]');
    const targetThemeValue = currTheme === ColorTheme.DARK ? '#1E1E1E' : 'white'

    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', targetThemeValue);
    } else {
      const newMetaTag = document.createElement('meta');
      newMetaTag.setAttribute('name', 'theme-color');
      newMetaTag.setAttribute('content', targetThemeValue);
      document.head.appendChild(newMetaTag);
    }

    if (currTheme === ColorTheme.DARK) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [currTheme]);

  return <></>
}

export default MetaThemeManager