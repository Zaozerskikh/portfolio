import '../../../../assets/styles/fonts.css'
import React, {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../../../constants/MediaQueries";
import {RoutePaths} from "../../../../constants/RoutePaths";
import {ColorTheme} from "../../../../constants/ColorTheme";
import {Link, useLocation} from "react-router-dom";
import {useAppSelector} from "../../../../redux/Hooks";
import useLogoAnimation from "./UseLogoAnimation";
import useHoverAndClick from "../../../../utils/hooks/UseHoverAndClickHook";
import {motion} from 'framer-motion';
import styled from "styled-components";

const StyledLogoWrapper = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  position: relative;
  transition: 0.2s all ease-in-out;
`

const StyledDigit = styled.div< {
  $letterShift: number,
  $letterWidth: number,
  $letterColor: string,
  $letterFixed: boolean;
}>`
  position: absolute;
  top: ${props => props?.$letterFixed ? '-100px': undefined};
  left: ${props => props?.$letterWidth * props?.$letterShift}px;
  color: ${props => props?.$letterColor};
`

const LOGO_DESKTOP_LETTER_WIDTH = 9.9
const LOGO_MOBILE_LETTER_WIDTH = 8.8
const LOGO_INITIAL_ANIMATION_TIMEOUT = 400
const LOGO_NORMAL_COMPLETED_ANIMATION_DELAY = 500
const LOGO_EXTENDED_COMPLETED_ANIMATION_DELAY = 1500
const LOGO_SEED_THRESHOLD = 0.8

const Logo: React.FC = () => {
  const currTheme = useAppSelector(state => state.colorTheme)
  const isDesktop = useMediaQuery({query: MediaQueries.DESKTOP})
  const isTouchable = useMediaQuery({query: MediaQueries.TOUCHABLE})
  const location = useLocation()
  const resolvedLetterWidth = isDesktop ? LOGO_DESKTOP_LETTER_WIDTH : LOGO_MOBILE_LETTER_WIDTH

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {isHovered, isClicked, ...eventHandlers} = useHoverAndClick()
  const [isAnimated, setIsAnimated] = useState(false)
  const [isReadyForIn, setIsReadyForIn] = useState(true)
  const [isReadyForOut, setIsReadyForOut] = useState(false)
  const [isReadyForInitialAnimation, setIsReadyForInitialAnimation] = useState(false)

  const scope = useLogoAnimation(isAnimated)

  useEffect(() => {
    const initialTimeout = setTimeout(
      () => setIsReadyForInitialAnimation(true),
      LOGO_INITIAL_ANIMATION_TIMEOUT
    )
    return () => clearTimeout(initialTimeout)
  }, []);

  useEffect(() => {
    if (isReadyForIn) {
      if (isHovered) {
        setIsAnimated(true)
      }
    }
  }, [isReadyForIn, isHovered]);

  useEffect(() => {
    if (isReadyForOut && !isHovered) {
      setIsAnimated(false)
    }
  }, [isReadyForOut, isHovered]);

  useEffect(() => {
    let tIn: NodeJS.Timeout | null;
    let tOut: NodeJS.Timeout | null;

    if (!isAnimated) {
      tIn = setTimeout(() => setIsReadyForIn(true), LOGO_NORMAL_COMPLETED_ANIMATION_DELAY)
    } else {
      setIsReadyForIn(false)
      setIsReadyForOut(false)

      tOut = setTimeout(() => {
        setIsReadyForOut(true)
      }, isTouchable ? LOGO_EXTENDED_COMPLETED_ANIMATION_DELAY : LOGO_NORMAL_COMPLETED_ANIMATION_DELAY)
    }

    return () => {
      if (tIn) {
        clearTimeout(tIn)
      }

      if (tOut) {
        clearTimeout(tOut)
      }
    }
  }, [isAnimated]);


  useEffect(() => {
    const seed = Math.random()
    if (seed > LOGO_SEED_THRESHOLD && isTouchable && isReadyForInitialAnimation && isReadyForIn && !isHovered) {
      setIsAnimated(true)
    }
  }, [location, isTouchable]);

  return(
    <StyledLogoWrapper
      to={RoutePaths.HOME}
      {...eventHandlers}
      ref={scope}
      className={`mobile-menu-text ${isDesktop && 'desktop'} ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
    >
      <StyledDigit
        className={`digit`}
        $letterWidth={resolvedLetterWidth}
        $letterShift={1}
        $letterColor={'var(--buttons-violet-on-click)'}
        $letterFixed={!isReadyForInitialAnimation}
      >
        3
      </StyledDigit>
      <StyledDigit
        className={`digit`}
        $letterWidth={resolvedLetterWidth}
        $letterShift={7}
        $letterColor={'var(--buttons-orange-on-click)'}
        $letterFixed={!isReadyForInitialAnimation}
      >
        0
      </StyledDigit>
      <StyledDigit
        className={`digit`}
        $letterWidth={resolvedLetterWidth}
        $letterShift={9}
        $letterColor={'var(--buttons-violet-on-click)'}
        $letterFixed={!isReadyForInitialAnimation}
      >
        3
      </StyledDigit>
      <StyledDigit
        className={`digit`}
        $letterWidth={resolvedLetterWidth}
        $letterShift={13}
        $letterColor={'var(--buttons-mint-on-click)'}
        $letterFixed={!isReadyForInitialAnimation}
      >
        1
      </StyledDigit>
      S
      <motion.div className={`digit-letter`}>
        e
      </motion.div>
      rg Za
      <motion.div className={`digit-letter`}>
        o
      </motion.div>
      z
      <motion.div className={`digit-letter`}>
        e
      </motion.div>
      rsk
      <motion.div className={`digit-letter`}>
        i
      </motion.div>
      kh
    </StyledLogoWrapper>
  )
}

export default Logo;
