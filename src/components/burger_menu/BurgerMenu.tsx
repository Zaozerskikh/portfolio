import React, {useEffect} from "react";
import {DefaultButtonColor} from "../buttons/default_button/DefaultButtonColor";
import LangPicker from "../buttons/pickers/lang_picker/LangPicker";
import {useLocation} from "react-router-dom";
import {setBurgerXPosition, setIsBurgerShown, toggleBurger} from "../../redux/BurgerMenuReducer";
import ColorThemePicker from "../buttons/pickers/color_theme_picker/ColorThemePicker";
import {ColorTheme} from "../../constants/ColorTheme";
import {RoutePaths} from "../../constants/RoutePaths";
import ExternalLinks from "../../constants/ExternalLinks";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../constants/MediaQueries";
import {useTranslation} from "react-i18next";
import {useAppDispatch, useAppSelector} from "../../redux/Hooks";
import {AnimatePresence, motion, useMotionValue, useMotionValueEvent, useTransform} from 'framer-motion';
import useWindowParams from "../../utils/hooks/UseWindowParamsHook";
import styled from "styled-components";
import ButtonWithLink from "../buttons/default_button/ButtonWithLink";
import useBurgerGA4 from "../../ga4/UseBurgerGA4";

const BurgerBackdrop = styled(motion.div)<{ $colorTheme: ColorTheme, $opened: boolean }>`
  position: fixed;
  top: 47px;
  z-index: 9 !important;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  height: calc(100% - 47px);
  right: 0;
  pointer-events: ${props => props?.$opened ? undefined : 'none'};
  background-color: ${props => props?.$colorTheme === ColorTheme.DARK 
          ? 'var(--layers-dark-layer, rgba(0, 0, 0, 0.50))' 
          : 'var(--layers-light-layer, rgba(255, 255, 255, 0.50))'
  };
  transition: 0.2s background-color ease-in-out;
`

const BurgerStaticContainer = styled(motion.div)<{ $opened: boolean, $height: number }>`
  width: 280px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 10;
  pointer-events: ${props => props?.$opened ? undefined : 'none'};
  height: ${props => props?.$height - 47}px;
`

const BurgerDrawer = styled(motion.div)<{ $colorTheme: ColorTheme, $height: number }>`
  width: 280px;
  background-color: ${props => props?.$colorTheme === ColorTheme.DARK
          ? 'var(--dark-theme-burger, #252525)'
          : 'var(--gray-ultralight, #F5F5F5)'
  };
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
  z-index: 10;
  height: ${props => props?.$height - 47}px;
  transition: 0.2s background-color ease-in-out;
`

const SwitchersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 12px;
`

const ButtonsContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`

const BurgerBtnWrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`

const BurgerMenu: React.FC = () => {
  useBurgerGA4()
  const isBurgerOpened = useAppSelector(state => state.burger.isOpened)
  const currTheme = useAppSelector(state => state.colorTheme)
  const isMobile = useMediaQuery({ query: MediaQueries.NORMAL_MOBILE})

  const { t } = useTranslation()
  const location = useLocation()
  const dispatch = useAppDispatch()
  const { height } = useWindowParams()

  const burgerXPosition = useMotionValue(280)
  const blurringDivOpacity = useTransform(burgerXPosition, [0, 280], [1, 0]);
  const buttonSlashOpacity = useTransform(burgerXPosition, [0, 280], [1, 0]);
  const buttonSlashMaxWidth = useTransform(burgerXPosition, [0, 280], [10, 0]);

  // TODO - must be a better way to do it
  useMotionValueEvent(burgerXPosition, "change", () => {
    dispatch(setBurgerXPosition(burgerXPosition))
  })

  useEffect(() => {
    dispatch(setIsBurgerShown(false))
  }, [dispatch, location, isMobile, height]);

  useEffect(() => {
    if (isBurgerOpened) {
      document.body.classList.add('hidden');
    } else {
      document.body.classList.remove('hidden');
    }
  }, [isBurgerOpened]);


  return(
    <>
      <BurgerBtnWrapper onClick={() => dispatch(toggleBurger())}>
        <div className={`onhover mobile-menu-text animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}>
          {'<'}
        </div>
        <motion.div style={{ maxWidth: buttonSlashMaxWidth, opacity: buttonSlashOpacity }}>
          <div className={`mobile-menu-text animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}>
            /
          </div>
        </motion.div>
        <div className={`mobile-menu-text animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}>
          {t('header.burgerButton')}{'>'}
        </div>
      </BurgerBtnWrapper>
      <BurgerBackdrop
        $colorTheme={currTheme}
        $opened={isBurgerOpened}
        style={{ opacity: blurringDivOpacity }}
        onTouchEnd={e => {
          e.preventDefault()
          dispatch(setIsBurgerShown(false))
        }}
      />
      <BurgerStaticContainer
        $opened={isBurgerOpened}
        $height={height}
      >
        <AnimatePresence>
          {isBurgerOpened && (
            <BurgerDrawer
              $height={height}
              $colorTheme={currTheme}

              style={{ x: burgerXPosition }}
              exit={{ x: 280 }}
              initial={{ x : 280 }}
              animate={{ x: 0 }}
              transition={{ type: "tween", duration: 0.15 }}

              drag='x'
              dragSnapToOrigin={true}
              dragElastic={{ left: 0, right: 1 }}
              dragConstraints={{ left: 0, right: 100 }}
              onDragEnd={(_, { offset }) => {
                if (offset.x > 100) {
                  dispatch(setIsBurgerShown(false))
                }
              }}
            >
              <SwitchersContainer>
                <ColorThemePicker/>
                <LangPicker/>
              </SwitchersContainer>
              <ButtonsContainer>
                <ButtonWithLink
                  color={DefaultButtonColor.MINT}
                  text={t('burger.projects')}
                  to={RoutePaths.HOME}
                />
                <ButtonWithLink
                  color={DefaultButtonColor.YELLOW}
                  text={t('burger.services')}
                  to={RoutePaths.SERVICES}
                />
                <ButtonWithLink
                  color={DefaultButtonColor.ORANGE}
                  text={t('burger.about')}
                  to={RoutePaths.ABOUT}
                />
                <ButtonWithLink
                  color={DefaultButtonColor.BLUE}
                  text={t('burger.tg')}
                  to={ExternalLinks.TELEGRAM}
                  openAsBlank={true}
                />
                <ButtonWithLink
                  color={DefaultButtonColor.WHITE}
                  text={t('burger.github')}
                  to={ExternalLinks.GITHUB}
                  openAsBlank={true}
                />
                <ButtonWithLink
                  color={DefaultButtonColor.VIOLET}
                  text={t('burger.email')}
                  to={`mailto:${ExternalLinks.EMAIL}`}
                  openAsBlank={true}
                />
              </ButtonsContainer>
            </BurgerDrawer>
          )}
        </AnimatePresence>
      </BurgerStaticContainer>
    </>
  )
}

export default BurgerMenu
