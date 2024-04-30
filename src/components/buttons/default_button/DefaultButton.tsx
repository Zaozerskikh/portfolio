import '../../../assets/styles/fonts.css'
import React from "react";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../../constants/MediaQueries";
import {ColorTheme} from "../../../constants/ColorTheme";
import useHoverAndClick from "../../../utils/hooks/UseHoverAndClickHook";
import withLink from "../../../utils/HOCs/WithLinkHOC";
import {useAppSelector} from "../../../redux/Hooks";
import {DefaultButtonProps} from "./DefaultButtonProps";
import {DefaultButtonIcon} from "./DefaultButtonIcon";
import styled, {css} from "styled-components";
import {DefaultButtonColor} from "./DefaultButtonColor";

const hoveredWhiteTheme = css`
  border: 1px solid #000;
  box-shadow: 4px 4px 0 0 #000;
  transform: translate(-4px, -4px);
`

const clickedWhiteTheme = css`
  border: 1px solid #000;
  box-shadow: 2px 2px 0 0 #000;
  transform: translate(-2px, -2px);
`

const hoveredDarkTheme = css`
  border: 1px solid #000;
  box-shadow: 4px 4px 0 0 var(--buttons-gray-default);
  transform: translate(-4px, -4px);
`

const clickedDarkTheme = css`
  border: 1px solid #000;
  box-shadow: 2px 2px 0 0 var(--buttons-gray-default);
  transform: translate(-2px, -2px);
`

const defaultWhite = css`
  background-color: var(--buttons-white-default, #FFF);
`

const hoveredWhite = css`
  background-color: var(--buttons-white-on-hover, #F4F4F4);
`

const clickedWhite = css`
  background-color: var(--buttons-white-on-click, #CBCBCB);
`

const defaultViolet = css`
  background-color: var(--buttons-violet-default, #EEC9FF);
`

const hoveredViolet = css`
  background-color: var(--buttons-violet-on-hover, #D886FF);
`

const clickedViolet = css`
  background-color: var(--buttons-violet-on-click, #C176E5);
`

const defaultGray = css`
  background-color: var(--buttons-gray-default, #EFEFEF);
`

const hoveredGray = css`
  background-color: var(--buttons-gray-on-hover, #DEDEDE);
`

const clickedGray = css`
  background-color: var(--buttons-gray-on-click, #CBCBCB);
`

const defaultMint = css`
  background-color: var(--buttons-mint-default, #B1FFE3);
`

const hoveredMint = css`
  background-color: var(--buttons-mint-on-hover, #82FFD2);
`

const clickedMint = css`
  background-color: var(--buttons-mint-on-click, #5CFFC5);
`

const defaultYellow = css`
  background-color: var(--buttons-yellow-default, #FFFB90);
`

const hoveredYellow = css`
  background-color: var(--buttons-yellow-on-hover, #FFF94D);
`

const clickedYellow = css`
  background-color: var(--buttons-yellow-on-click, #F1EC49);
`

const defaultOrange = css`
  background-color: var(--buttons-orange-default, #FFB178);
`

const hoveredOrange = css`
  background-color: var(--buttons-orange-on-hover, #FF9E57);
`

const clickedOrange = css`
  background-color: var(--buttons-orange-on-click, #FE8C39);
`

const defaultBlue = css`
  background-color: var(--buttons-blue-default, #81C7F8);
`

const hoveredBlue = css`
  background-color: var(--buttons-blue-on-hover, #55B5F9);
`

const clickedBlue = css`
  background-color: var(--buttons-blue-on-click, #47A2E2);
`

const ButtonWrapper = styled.button<{
  $hovered: boolean,
  $clicked: boolean,
  $touchable: boolean,
  $color: DefaultButtonColor,
  $colorTheme: ColorTheme
}>`
  // common styles
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 4px;
  box-sizing: border-box;
  margin: 0;
  transition: 0.2s ease-in-out;
  
  // color shared styles
  ${props => props?.$hovered && !props?.$touchable && 'cursor: pointer'};
  ${props => props?.$hovered && props?.$colorTheme === ColorTheme.DARK && hoveredDarkTheme}
  ${props => props?.$clicked && props?.$colorTheme === ColorTheme.DARK && clickedDarkTheme}
  ${props => props?.$hovered && props?.$colorTheme === ColorTheme.WHITE && hoveredWhiteTheme}
  ${props => props?.$clicked && props?.$colorTheme === ColorTheme.WHITE && clickedWhiteTheme}

  // color separated styles
  ${props => props?.$color === DefaultButtonColor.WHITE && (
    props?.$clicked ? clickedWhite : props?.$hovered ? hoveredWhite : defaultWhite
  )}

  ${props => props?.$color === DefaultButtonColor.VIOLET && (
    props?.$clicked ? clickedViolet : props?.$hovered ? hoveredViolet : defaultViolet
  )}

  ${props => props?.$color === DefaultButtonColor.GRAY && (
    props?.$clicked ? clickedGray : props?.$hovered ? hoveredGray : defaultGray
  )}

  ${props => props?.$color === DefaultButtonColor.MINT && (
    props?.$clicked ? clickedMint : props?.$hovered ? hoveredMint : defaultMint
  )}

  ${props => props?.$color === DefaultButtonColor.YELLOW && (
    props?.$clicked ? clickedYellow : props?.$hovered ? hoveredYellow : defaultYellow
  )}

  ${props => props?.$color === DefaultButtonColor.ORANGE && (
    props?.$clicked ? clickedOrange : props?.$hovered ? hoveredOrange : defaultOrange
  )}

  ${props => props?.$color === DefaultButtonColor.BLUE && (
    props?.$clicked ? clickedBlue : props?.$hovered ? hoveredBlue : defaultBlue
  )}
`

const ButtonChildrenWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 18px;
  align-items: center;
  justify-content: center;
  padding-top: 1px;
`

const DefaultButton: React.FC<DefaultButtonProps> = (props) => {
  const {
    color,
    text,
    onClickAction,
    buttonIcon,
    children
  } = props

  const currTheme = useAppSelector(state => state.colorTheme)
  const {isHovered, isClicked, ...eventHandlers}
    = useHoverAndClick({ touchEndDelay: 1000 })
  const isTouchable = useMediaQuery({ query: MediaQueries.TOUCHABLE });

  return(
    <ButtonWrapper
      $hovered={isHovered}
      $clicked={isClicked}
      $touchable={isTouchable}
      $color={color}
      $colorTheme={currTheme}
      onClick={onClickAction}
      {...eventHandlers}
    >
      <ButtonChildrenWrapper>
        {buttonIcon === DefaultButtonIcon.GOOGLE_PLAY && (
          <svg style={{ marginBottom: '2px'}} width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.41124 1.28249C4.01349 0.928659 4.80367 0.911252 5.58192 1.32742L20.2697 9.18052C21.3843 9.77635 21.4925 10.5931 21.4916 11.001C21.4916 11.4098 21.3834 12.2257 20.2697 12.8206L15.6286 15.302C15.6203 15.3066 15.6121 15.3112 15.6038 15.3158L5.58192 20.6737C5.18684 20.8845 4.78534 20.9835 4.41318 20.9835C4.05109 20.9835 3.711 20.8927 3.41217 20.7186L3.3984 20.7103C3.3929 20.7067 3.3865 20.703 3.381 20.6993L3.37642 20.6966C2.78058 20.3299 2.39465 19.6415 2.39465 18.7661V3.23592C2.39465 2.35592 2.78243 1.66566 3.37826 1.30266C3.38835 1.29533 3.39933 1.28891 3.41124 1.28249ZM4.04467 18.5222L10.8647 11.0001L4.04467 3.47793V18.5222ZM6.42709 18.3509L13.9043 14.3532L11.9784 12.2284L6.42709 18.3509ZM15.4049 8.44991L13.0922 11.0001L15.4049 13.5512L19.4914 11.3658C19.7481 11.2283 19.8416 11.0954 19.8416 10.9992C19.8416 10.9047 19.7481 10.7727 19.4914 10.6352L15.4049 8.44991ZM11.9784 9.77176L13.9043 7.64783L6.4289 3.65117L11.9784 9.77176Z" fill="#2C2C2C"/>
          </svg>
        )}
        {buttonIcon === DefaultButtonIcon.APP_STORE && (
          <svg style={{ marginBottom: '2px'}} width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7009 16.008C15.4143 16.008 15.1334 15.8641 14.9712 15.6015L9.75284 7.15048C9.50391 6.7474 9.62952 6.221 10.0315 5.97207C10.4323 5.72428 10.9609 5.8476 11.2099 6.25069L16.4282 14.7017C16.6772 15.1048 16.5516 15.6312 16.1496 15.8801C16.0103 15.9669 15.855 16.008 15.7009 16.008ZM9.13509 5.39542C8.84734 5.39542 8.56643 5.2504 8.40543 4.98777L6.13538 1.30865C5.88531 0.906711 6.00864 0.378023 6.41057 0.129094C6.81137 -0.120976 7.33892 0.00348752 7.59013 0.405428L9.86475 4.0914C10.1125 4.49448 9.98693 5.02089 9.58384 5.26867C9.44454 5.35546 9.28924 5.39542 9.13509 5.39542ZM2.56931 16.008C2.41515 16.008 2.25986 15.9669 2.11827 15.8801C1.71633 15.6312 1.59186 15.1036 1.84079 14.7006L2.54875 13.5575C2.79768 13.1556 3.32637 13.0311 3.72831 13.2801C4.13025 13.529 4.25471 14.0565 4.00579 14.4596L3.29782 15.6026C3.13568 15.8641 2.85478 16.008 2.56931 16.008Z" fill="black"/>
            <path d="M4.69199 12.5767C4.53783 12.5767 4.38254 12.5356 4.24095 12.4488C3.83901 12.1999 3.71454 11.6723 3.96347 11.2692L10.6777 0.406573C10.9278 0.0034913 11.4565 -0.119831 11.8561 0.127956C12.2592 0.376884 12.3837 0.904431 12.1347 1.30637L5.41936 12.1713C5.25836 12.4328 4.9786 12.5767 4.69199 12.5767Z" fill="black"/>
            <path d="M10.9049 12.5766H0.856406C0.38367 12.5766 0 12.1929 0 11.7202C0 11.2474 0.38367 10.8638 0.856406 10.8638H10.9049C11.3776 10.8638 11.7613 11.2474 11.7613 11.7202C11.7613 12.1929 11.3776 12.5766 10.9049 12.5766ZM17.4136 12.5766H13.5769C13.1042 12.5766 12.7205 12.1929 12.7205 11.7202C12.7205 11.2474 13.1042 10.8638 13.5769 10.8638H17.4136C17.8863 10.8638 18.27 11.2474 18.27 11.7202C18.27 12.1929 17.8863 12.5766 17.4136 12.5766Z" fill="black"/>
          </svg>
        )}
        {text && (
          <div className={`mobile-button-text dark`}>
            {text}
          </div>
        )}
        {children}
      </ButtonChildrenWrapper>
    </ButtonWrapper>
  )
}

export default DefaultButton

const ButtonWithLink = withLink(DefaultButton);
export {ButtonWithLink};
