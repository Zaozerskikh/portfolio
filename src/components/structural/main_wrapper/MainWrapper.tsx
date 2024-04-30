import React, {PropsWithChildren, useRef, useState} from "react";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../../constants/MediaQueries";
import styled from "styled-components";
import {motion, useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import {useAppSelector} from "../../../redux/Hooks";
import useWindowParams from "../../../utils/hooks/UseWindowParamsHook";

const StyledMainWrapper = styled(motion.div)<{ $desktop: boolean, $tablet: boolean }>`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: -1px;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  margin-top: ${props => props?.$desktop ? 0 : 47}px;
  padding: ${props => props?.$desktop ? '17px 88px 129px' : '17px 16px 129px'};
  min-height: ${props => props?.$desktop ? 'calc(100vh - 478px)' : 'calc(100vh - 350px)'};
`

const MainWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const isTablet = useMediaQuery({ query: MediaQueries.TABLET})
  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})
  const isMobile = useMediaQuery({ query: MediaQueries.NORMAL_MOBILE})

  const { width } = useWindowParams()
  const burgerX = useAppSelector(state => state.burger.XPosition)
  const scale = useTransform(burgerX, [280, 0], [1, 0.975])

  const { scrollYProgress } = useScroll();
  const transformXPivot = (16 / width) * 100
  const [transformYPivot, setTransformYPivot] = useState(0)

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isDesktop) {
      setTransformYPivot((latest + 0.05) * 100)
    }
  })

  return(
    <StyledMainWrapper
      $desktop={isDesktop}
      $tablet={isTablet}
      ref={wrapperRef}
      initial={{ opacity: 0, y: isMobile ? 0 : 4 }}
      animate={{ opacity: 1, y: 0, transition: { duration: isMobile ? 0.1 : 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      style={{
        scale: !isDesktop ? scale : undefined,
        transformOrigin: !isDesktop ? `${transformXPivot}% ${transformYPivot}%` : undefined
      }}
    >
      {children}
    </StyledMainWrapper>
  )
}

export default MainWrapper
