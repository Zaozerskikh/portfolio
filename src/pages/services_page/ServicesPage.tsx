import './ServicesPage.css'
import '../../assets/styles/animation_durations.css'
import '../../assets/styles/fonts.css'
import React, {useEffect, useState} from "react";
import {ColorTheme} from "../../constants/ColorTheme";
import {Lang} from "../../constants/Lang";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/ReduxStore";
import DefaultButton from "../../components/default_button/DefaultButton";
import {DefaultButtonColor} from "../../constants/DefaultButtonColor";
import {RoutePaths} from "../../constants/RoutePaths";
import ExternalLinks from "../../constants/ExternalLinks";
import {useNavigate} from "react-router-dom";
import BackendSvg from "./assets/BackendSvg";
import WebsitesFromScratchSvg from "./assets/WebsitesFromScratchSvg";
import WebsitesByDesignSvg from "./assets/WebsitesByDesignSvg";
import FullstackSvg from "./assets/FullstackSvg";
import MobileAppsByDesignSvg from "./assets/MobileAppsByDesignSvg";
import MobileAppsFromScratchSvg from "./assets/MobileAppsFromScratchSvg";
import ServiceDescription from "./service_description/ServiceDescription";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../constants/MediaQueries";

const ServicesPage: React.FC = () => {
  const currLang = useSelector((state: RootState) => state.lang.lang)
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)
  const navigate = useNavigate()

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
  }, [currTheme, currLang, isTouchable]);


  return(
    <div className="services-page-wrapper">
      <div
        className={`h1-text ${isDesktop && 'desktop'} ${isTablet && 'tablet'} animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
        dangerouslySetInnerHTML={{__html: `${currLang === Lang.ENG
            ? `Made with love for&nbsp;each button&ensp;;)`
            : `Делаю с любовью к&nbsp;каждой кнопке&ensp;;)`
        }`}}
      />
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
      <div className="buttons">
        <DefaultButton
          color={DefaultButtonColor.VIOLET}
          text={currLang === Lang.ENG ? 'Back to portfolio' : 'Вернуться к кейсам'}
          onClickAction={() => navigate(RoutePaths.HOME)}
        />
        <DefaultButton
          color={DefaultButtonColor.BLUE}
          text={currLang === Lang.ENG ? 'Message in Telegram' : 'Написать в телеграм'}
          onClickAction={() => window.open(ExternalLinks.TELEGRAM, '_blank')}
        />
      </div>
    </div>
  )
}


//@ts-ignore
export default ServicesPage
//@ts-ignore
