import './ServicesPage.css'
import './../../assets/animation_durations.css'
import './../../assets/fonts.css'
import React, {useEffect, useState} from "react";
import {ColorTheme} from "../../redux/color_theme_reducer/ColorTheme";
import {Lang} from "../../redux/lang_reducer/Lang";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/ReduxStore";
import DefaultButton from "../../components/default_button/DefaultButton";
import {DefaultButtonColor} from "../../components/default_button/DefaultButtonColor";
import {RoutePaths} from "../../routes/RoutePaths";
import ExternalLinks from "../../routes/ExternalLinks";
import {useNavigate} from "react-router-dom";
import BackendSvg from "./assets/BackendSvg";
import WebsitesFromScratchSvg from "./assets/WebsitesFromScratchSvg";
import WebsitesByDesignSvg from "./assets/WebsitesByDesignSvg";
import FullstackSvg from "./assets/FullstackSvg";
import MobileAppsByDesignSvg from "./assets/MobileAppsByDesignSvg";
import MobileAppsFromScratchSvg from "./assets/MobileAppsFromScratchSvg";
import ServiceDescription from "./service_description/ServiceDescription";

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

  useEffect(() => {
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
  }, [currTheme, currLang]);


  return(
    <div className="services-page-wrapper">
      <div
        className={`mobile-h1-text animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
        dangerouslySetInnerHTML={{__html: `${currLang === Lang.ENG
            ? 'Made with love</br>for each button ;)'
            : 'Делаю с любовью</br>к каждой кнопке ;)'}`
        }}
      />
      <div className="services">
        <ServiceDescription
          boopTrigger={boopWFS}
          text={currLang === Lang.ENG ? 'Websites from scratch' : 'Веб-сайты с нуля'}
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
          text={currLang === Lang.ENG ? 'Mobile apps for iOS</br>and Android by design' : 'Мобильные приложения для</br>iOS и Android по дизайну'}
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
