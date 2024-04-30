import React, {useEffect, useState} from "react";
import {AnimatePresence, motion, MotionValue, Point, useMotionValueEvent, useTransform, wrap} from "framer-motion";
import styled from "styled-components";
import {ColorTheme} from "../../../constants/ColorTheme";
import {useAppSelector} from "../../../redux/Hooks";
import {FullscreenModalProps} from "./FullscreenModalProps";
import DefaultButton from "../../../components/buttons/default_button/DefaultButton";
import {DefaultButtonColor} from "../../../constants/DefaultButtonColor";
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../../constants/MediaQueries";
import useWindowParams from "../../../utils/hooks/UseWindowParamsHook";
import NavigationButton from "../../../components/buttons/navigation_button/NavigationButton";
import {NavigationButtonType} from "../../../components/buttons/navigation_button/NavigationButtonType";
import {createPortal} from "react-dom";

const StyledWrapper = styled(motion.div)<{
  $colorTheme: ColorTheme;
  $height: number;
  $width: number;
}>`
  min-width: ${props => props?.$width}px;
  min-height: ${props => props?.$height}px; 
  background-color: ${props => props?.$colorTheme === ColorTheme.DARK 
          ? 'var(--layers-dark-layer, rgba(0, 0, 0, 0.50))'
          : 'var(--layers-light-layer, rgba(255, 255, 255, 0.50))'
  }; 
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999999999;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const StyledButtonsContainer = styled.div<{
  $mobile: boolean,
  $desktop: boolean,
  $aspectRatio: number,
  $height: number,
  $bottom: number
}>`
  display: ${props => props?.$mobile ? 'flex' : 'grid'};
  ${props => props?.$mobile && 'flex-direction: column-reverse'};
  ${props => props?.$mobile && 'gap: 12px'};
  ${props => !props?.$mobile && 'grid-template-columns: 1fr 1fr'};
  ${props => !props?.$mobile && 'grid-column-gap: 12px'};
  ${props => props?.$mobile && 'left: 16px'};
  position: fixed;
  bottom: ${props => props?.$bottom}px;
  width: ${props => !props?.$desktop ? 'calc(100% - 32px)' : '100%'};
  padding-left: ${props => props?.$desktop ? 88 : 0}px;
  padding-right: ${props => props?.$desktop ? 88 : 0}px;
  box-sizing: border-box;
  max-width: ${props => Math.min((props?.$height - 50) * props?.$aspectRatio, 1440)}px;
`

const StyledNavigationButtonsContainer = styled.div<{ $mobile: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 6px;
`

const StyledImageCarouselWrapper = styled(motion.div)<{ $desktop: boolean, $aspect: number, $height: number }>`
  width: 100%;
  position: absolute;
  padding-left: ${props => props?.$desktop ? 88 : 16}px;
  padding-right: ${props => props?.$desktop ? 88 : 16}px;
  box-sizing: border-box;
  max-width: ${props => Math.min((props?.$height - 50) * props?.$aspect, 1440)}px;
`

const StyledImageContainer = styled.div`
  border-radius: 4px;
  overflow: hidden;
  aspect-ratio: 162 / 97;
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 162 / 97;
  pointer-events: none;
`

const StyledCarouselItemWrapper = styled(motion.div)<{ $mobile: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
`

const currItemVariants = {
  enter: (custom : { initialScale: number, direction: number, imageWidth: number }) => {
    return {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: custom?.initialScale
    }
  },

  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },

  exit: (custom : { initialScale: number, direction: number, imageWidth: number }) => {
    return {
      zIndex: 0,
      x: custom.direction < 0 ? custom.imageWidth: -custom.imageWidth,
      opacity: 0,
      scale: 0.9
    };
  }
};

const swipeConfidenceThreshold = 3000;

const FullscreenModal: React.FC<FullscreenModalProps> = (props) => {
  const isMobile = useMediaQuery({ query: MediaQueries.NORMAL_MOBILE})
  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})
  const currTheme = useAppSelector(state => state.colorTheme)
  const { width, height } = useWindowParams()
  const { t } = useTranslation()

  const root = document.getElementById('app')
  const [hasDragged, setHasDragged] = useState(false)
  const {fullscreenState, onClose, images, aspectRatio} = props
  const resolvedPadding = isDesktop ? 88 : 16
  const resolvedAspectRatio = aspectRatio || 162 / 97

  const [isReady, setIsReady] = useState(false)
  const [[page, direction], setPage]
    = useState([fullscreenState?.initialIdx, 0]);
  const imageIndex = wrap(0, images.length, page);

  const imageWidth = Math.min(1264, width - resolvedPadding * 2)
  const currItemPosition = new MotionValue<number>()
  const nextItemScale = useTransform(currItemPosition, [0, -imageWidth], [0.6, 0.9])
  const nextItemOpacity = useTransform(currItemPosition, [0, -imageWidth], [0, 1])
  const prevItemScale = useTransform(currItemPosition, [0, imageWidth], [0.6, 0.9])
  const prevItemOpacity = useTransform(currItemPosition, [0, imageWidth], [0, 1])

  const [nextScale, setNextScale] = useState(0.9)
  const [prevScale, setPrevScale] = useState(0.9)

  useMotionValueEvent(prevItemScale, "change", (latest) => {
    if (latest as number) {
      setPrevScale(latest)
    }
  })

  useMotionValueEvent(nextItemScale, "change", (latest) => {
    if (latest as number) {
      setNextScale(latest)
    }
  })

  useEffect(() => {
    setPage([fullscreenState?.initialIdx, 0])
  }, [fullscreenState?.initialIdx]);

  useEffect(() => {
    if (fullscreenState?.isOpened) {
      setTimeout(() => setIsReady(true))
    } else {
      setIsReady(false)
      setHasDragged(false)
    }
  }, [fullscreenState]);

  useEffect(() => {
    const handleResize = () => {
      onClose()
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleDragEnd = (_: any, info: { offset: Point, velocity: Point }) => {
    const offsetX = info.offset.x
    const swipe = Math.abs(offsetX) * info.velocity.x;

    if (swipe < -swipeConfidenceThreshold || offsetX < -imageWidth / 3) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold || offsetX > imageWidth / 3) {
      paginate(-1);
    }
  }

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const resolveButtonsBottom = () => {
    if (isMobile) {
      return 16
    }

    const imageHeight = Math.min(
      (height - 50) * resolvedAspectRatio,
      Math.min(1264, width - resolvedPadding * 2) / resolvedAspectRatio
    )

    return (height - imageHeight) / 2 - 16
  }

  return (
    root && (
      createPortal(
        <AnimatePresence>
          {fullscreenState?.isOpened && isReady && (
            <StyledWrapper
              $height={height}
              $width={width}
              $colorTheme={currTheme}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={handleClose}
            >
              <StyledCarouselItemWrapper
                $mobile={isMobile}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                onClick={handleClose}
                style={{ y: -50 }}
              >
                <AnimatePresence initial={false} custom={{ initialScale: 0.9, direction: direction, imageWidth: imageWidth }}>
                  {/*current image*/}
                  <StyledImageCarouselWrapper
                    $desktop={isDesktop}
                    $aspect={resolvedAspectRatio}
                    $height={height}
                    key={page}

                    custom={{ initialScale: direction > 0 ? nextScale : prevScale, direction: direction, mageWidth: imageWidth }}
                    variants={currItemVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.4 }
                    }}

                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={handleDragEnd}
                    onDragStart={() => setHasDragged(true)}
                    style={{ x: currItemPosition }}
                    onClick={handleClose}
                  >
                    <StyledImageContainer>
                      <StyledImage src={images[imageIndex]}/>
                    </StyledImageContainer>
                  </StyledImageCarouselWrapper>

                  {/*next image*/}
                  <StyledImageCarouselWrapper
                    $desktop={isDesktop}
                    $aspect={resolvedAspectRatio}
                    $height={height}
                    key={'next'}
                    style={{ opacity: nextItemOpacity, scale: hasDragged ? nextItemScale : 0.8 }}
                  >
                    <StyledImageContainer>
                      <StyledImage src={images[wrap(0, images.length, imageIndex + 1)]}/>
                    </StyledImageContainer>
                  </StyledImageCarouselWrapper>

                  {/*prev image*/}
                  <StyledImageCarouselWrapper
                    $desktop={isDesktop}
                    $aspect={resolvedAspectRatio}
                    $height={height}
                    key={'prev'}
                    style={{ opacity: prevItemOpacity, scale: hasDragged ? prevItemScale : 0.8 }}
                  >
                    <StyledImageContainer>
                      <StyledImage src={images[wrap(0, images.length, imageIndex - 1)]}/>
                    </StyledImageContainer>
                  </StyledImageCarouselWrapper>
                </AnimatePresence>

              </StyledCarouselItemWrapper>
              <StyledButtonsContainer
                $mobile={isMobile}
                $desktop={isDesktop}
                $height={height}
                $aspectRatio={resolvedAspectRatio}
                $bottom={resolveButtonsBottom()}
              >
                <DefaultButton
                  color={DefaultButtonColor.BLUE}
                  text={t('projectBtnsText.closeBtn')}
                  onClickAction={onClose}
                />
                <StyledNavigationButtonsContainer $mobile={isMobile}>
                  <NavigationButton
                    type={NavigationButtonType.BACK}
                    onClickAction={() => paginate(1)}
                  />
                  <NavigationButton
                    type={NavigationButtonType.FORWARD}
                    onClickAction={() => paginate(-1)}
                  />
                </StyledNavigationButtonsContainer>
              </StyledButtonsContainer>
            </StyledWrapper>
          )}
        </AnimatePresence>,
        root
      )
    )
  )
}

export default FullscreenModal
