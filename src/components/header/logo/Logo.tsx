import './Logo.css'
import './../../../assets/styles/fonts.css'
import './../../../assets/styles/animation_durations.css'
import React, {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../../constants/MediaQueries";
import {RoutePaths} from "../../../constants/RoutePaths";
import {ColorTheme} from "../../../constants/ColorTheme";
import {Link, useLocation} from "react-router-dom";
import {useAppSelector} from "../../../redux/Hooks";

const Logo: React.FC = () => {
  const currTheme = useAppSelector(state => state.colorTheme)
  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})
  const isTouchable = useMediaQuery({query: MediaQueries.TOUCHABLE})
  const location = useLocation()

  const [readyToAnimate, setReadyToAnimate] = useState(true)
  const [isAnimated, setAnimated] = useState(false)
  const [is1Animated, set1Animated] = useState(false)
  const [is2Animated, set2Animated] = useState(false)
  const [is3Animated, set3Animated] = useState(false)
  const [is4Animated, set4Animated] = useState(false)

  useEffect(() => {
    const seed = Math.random()
    if (isTouchable && readyToAnimate && seed > 0.8) {
      setTimeout(() => {
        if (readyToAnimate) {
          setAnimated(true)
          setTimeout(() => {
            setAnimated(false)
          }, 1000)
        }
      }, 1000)
    }
  }, [location, isTouchable]);

  useEffect(() => {
    if (isAnimated) {
      setReadyToAnimate(false)
      setTimeout(() => {
        set1Animated(true)
      }, 100);
      setTimeout(() => {
        set2Animated(true)
      }, 200);
      setTimeout(() => {
        set3Animated(true)
      }, 300);
      setTimeout(() => {
        set4Animated(true)
      }, 400)
    } else {
      setTimeout(() => {
        setTimeout(() => {
          set1Animated(false)
        }, 100);
        setTimeout(() => {
          set2Animated(false)
        }, 200);
        setTimeout(() => {
          set3Animated(false)
        }, 300);
        setTimeout(() => {
          set4Animated(false)
        }, 400)
        setTimeout(() => {
          setReadyToAnimate(true)
        }, 400)
      }, !isTouchable ? 0 : 3000)
    }
  }, [isAnimated, isTouchable]);

  return(
    <Link
      style={{ textDecoration: "none" }}
      to={RoutePaths.HOME}
      onMouseEnter={() => {
        if (!isTouchable) {
          if (readyToAnimate) {
            setAnimated(true)
          }
        }
      }}
      onMouseLeave={() => {
        if (!isTouchable) {
          setAnimated(false)
        }
      }}
      onTouchStart={() => {
        if (readyToAnimate) {
          setAnimated(true)
        }
      }}
      onTouchEnd={() => setAnimated(false)}
      onTouchCancel={() => setAnimated(false)}
      className={`logo-wrapper logo mobile-menu-text ${isDesktop && 'desktop'} animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
    >
      <div
        className={`animated-part ${is1Animated && 'active'} animation-02s-all violet`}
        style={{left: `${isDesktop ? 9.9 : 8.8}px`}}
      >
        3
      </div>
      <div
        className={`animated-part ${is2Animated && 'active'} animation-02s-all orange`}
        style={{left: `${isDesktop ? 9.9 * 7 : 8.8 * 7}px`}}
      >
        0
      </div>
      <div
        className={`animated-part ${is3Animated && 'active'} animation-02s-all violet`}
        style={{left: `${isDesktop ? 9.9 * 9 : 8.8 * 9}px`}}
      >
        3
      </div>
      <div
        className={`animated-part ${is4Animated && 'active'} animation-02s-all mint`}
        style={{left: `${isDesktop ? 9.9 * 13 : 8.8 * 13}px`}}
      >
        1
      </div>
      S
      <div className={`animation-02s-opacity ${is1Animated ? 'invisible' : 'visible'}`}>
        e
      </div>
      rg Za
      <div className={`animation-02s-opacity ${is2Animated ? 'invisible' : 'visible'}`}>
        o
      </div>
      z
      <div className={`animation-02s-opacity ${is3Animated ? 'invisible' : 'visible'}`}>
        e
      </div>
      rsk
      <div className={`animation-02s-opacity ${is4Animated ? 'invisible' : 'visible'}`}>
        i
      </div>
      kh
    </Link>
  )
}

export default Logo;
