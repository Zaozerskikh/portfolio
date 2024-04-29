import React, {useEffect, useState} from "react";
import {AnimatePresence, motion, Point, wrap} from "framer-motion";
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

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    };
  },

  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },

  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    };
  }
};

const swipeConfidenceThreshold = 10000;

const FullscreenModal: React.FC<FullscreenModalProps> = (props) => {
  const root = document.getElementById('app')
  const {fullscreenState, onClose, images, aspectRatio} = props
  const resolvedAspectRatio = aspectRatio || 162 / 97
  const { width, height } = useWindowParams()
  const isMobile = useMediaQuery({ query: MediaQueries.NORMAL_MOBILE})
  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})
  const currTheme = useAppSelector(state => state.colorTheme)
  const { t } = useTranslation()
  const [[page, direction], setPage]
    = useState([fullscreenState.initialIdx, 0]);
  const imageIndex = wrap(0, images.length, page);

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
    const swipe = Math.abs(info.offset.x) * info.velocity.x;
    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
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

    const padding = isDesktop ? 88 : 16
    const imageHeight = Math.min(
      (height - 50) * resolvedAspectRatio,
      Math.min(1264, width - padding * 2) / resolvedAspectRatio
    )

    return (height - imageHeight) / 2 - 16
  }

  return (
    root && (
      createPortal(
        <AnimatePresence>
          {fullscreenState?.isOpened && (
            <StyledWrapper
              $height={height}
              $width={width}
              $colorTheme={currTheme}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
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
                <AnimatePresence initial={false} custom={direction}>
                  <StyledImageCarouselWrapper
                    $desktop={isDesktop}
                    $aspect={resolvedAspectRatio}
                    $height={height}
                    key={page}

                    custom={direction}
                    variants={variants}
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
                    onClick={handleClose}
                  >
                    <StyledImageContainer>
                      <StyledImage src={images[imageIndex]}/>
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
