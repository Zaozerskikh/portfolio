import './ServicesPage.css'
import '../../assets/styles/animation_durations.css'
import '../../assets/styles/fonts.css'
import React, {useEffect, useState} from "react";
import {ColorTheme} from "../../constants/ColorTheme";
import {Lang} from "../../constants/Lang";
import {ButtonWithLink} from "../../components/buttons/default_button/DefaultButton";
import {DefaultButtonColor} from "../../constants/DefaultButtonColor";
import {RoutePaths} from "../../constants/RoutePaths";
import ExternalLinks from "../../constants/ExternalLinks";
import BackendSvg from "./assets/BackendSvg";
import WebsitesFromScratchSvg from "./assets/WebsitesFromScratchSvg";
import WebsitesByDesignSvg from "./assets/WebsitesByDesignSvg";
import FullstackSvg from "./assets/FullstackSvg";
import MobileAppsByDesignSvg from "./assets/MobileAppsByDesignSvg";
import MobileAppsFromScratchSvg from "./assets/MobileAppsFromScratchSvg";
import ServiceDescription from "./service_description/ServiceDescription";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../constants/MediaQueries";
import {useTranslation} from "react-i18next";
import {useAppSelector} from "../../redux/Hooks";

const ServicesPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const currLang = i18n?.language as Lang
  const currTheme = useAppSelector(state => state.colorTheme)

  const [boopWFS, setBoopWFS] = useState(false)
  const [boopWBD, setBoopWBD] = useState(false)
  const [boopAFS, setBoopAFS] = useState(false)
  const [boopABD, setBoopABD] = useState(false)
  const [boopB, setBoopB] = useState(false)
  const [boopF, setBoopF] = useState(false)

  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})
  const isMobile = useMediaQuery({ query: MediaQueries.NORMAL_MOBILE})
  const isTablet = useMediaQuery({ query: MediaQueries.TABLET})
  const isTouchable = useMediaQuery({ query: MediaQueries.TOUCHABLE });

  useEffect(() => {
    if (isTouchable) {
      setTimeout(() => {
        setBoopWFS(true)
        setTimeout(() => {
          setBoopWFS(false)
        }, 1000)
      }, 2000)
      setTimeout(() => {
        setBoopWBD(true)
        setTimeout(() => {
          setBoopWBD(false)
        }, 1000)
      }, 2500)
      setTimeout(() => {
        setBoopAFS(true)
        setTimeout(() => {
          setBoopAFS(false)
        }, 1000)
      }, 3000)
      setTimeout(() => {
        setBoopABD(true)
        setTimeout(() => {
          setBoopABD(false)
        }, 1000)
      }, 3500)
      setTimeout(() => {
        setBoopB(true)
        setTimeout(() => {
          setBoopB(false)
        }, 1000)
      }, 4000)
      setTimeout(() => {
        setBoopF(true)
        setTimeout(() => {
          setBoopF(false)
        }, 1000)
      }, 4500)
    }
  }, [currTheme, isTouchable]);


  return(
    <div className="services-page-wrapper">
      <h1
        className={`
          h1-text animation-02s-all 
          ${isDesktop && 'desktop'} 
          ${isTablet && 'tablet'}
          ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}
        `}
      >
        {t('servicesPage.header')}
      </h1>
      <div className={`services ${(isTablet || isDesktop) && 'desktop'}`}>
        <ServiceDescription
          boopTrigger={boopWFS}
          text={currLang === Lang.ENG ? 'Websites from scratch' : `Веб-сайты ${isTablet ? '<br>' : ''} с нуля`}
          icon={<WebsitesFromScratchSvg colorTheme={currTheme}/>}
        />
        <ServiceDescription
          boopTrigger={boopWBD}
          text={currLang === Lang.ENG ? 'Websites based</br>on ready-made design' : 'Веб-сайты </br>по готовому дизайну'}
          icon={<WebsitesByDesignSvg colorTheme={currTheme} />}
        />
        <ServiceDescription
          boopTrigger={boopAFS}
          text={currLang === Lang.ENG ? 'Mobile apps for iOS</br>and Android from scratch' : 'Мобильные приложения</br>для iOS и Android с нуля'}
          icon={<MobileAppsFromScratchSvg colorTheme={currTheme} />}
        />
        <ServiceDescription
          boopTrigger={boopABD}
          text={currLang === Lang.ENG ? 'Mobile apps for iOS</br>and Android by design' : `Мобильные приложения ${(isTablet || isDesktop) ? '</br>' : ''} для ${isMobile ? '</br>' : ''}iOS и Android по дизайну`}
          icon={<MobileAppsByDesignSvg colorTheme={currTheme} />}
        />
        <ServiceDescription
          boopTrigger={boopB}
          text={currLang === Lang.ENG ? 'Back-end based</br>on tech specification' : 'Бэкенд по тех. заданию'}
          icon={<BackendSvg colorTheme={currTheme}/>}
        />
        <ServiceDescription
          boopTrigger={boopF}
          text={currLang === Lang.ENG ? 'Fullstack and anything else' : 'Фулстек и все что угодно'}
          icon={<FullstackSvg colorTheme={currTheme} />}
        />
      </div>
      <nav className="buttons">
        <ButtonWithLink
          color={DefaultButtonColor.VIOLET}
          text={t('commonBtnsText.backToCases')}
          to={RoutePaths.HOME}
        />
        <ButtonWithLink
          color={DefaultButtonColor.BLUE}
          text={t('commonBtnsText.messageInTelegram')}
          to={ExternalLinks.TELEGRAM}
          openAsBlank={true}
        />
      </nav>
    </div>
  )
}


//@ts-ignore
export default ServicesPage
//@ts-ignore
