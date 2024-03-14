import './AboutPage.css'
import './../../assets/styles/fonts.css'
import './../../assets/styles/animation_durations.css'
import React from "react";
import {ButtonWithLink} from "../../components/default_button/DefaultButton";
import {useSelector} from "react-redux";
import {DefaultButtonColor} from "../../constants/DefaultButtonColor";
import {Lang} from "../../constants/Lang";
import {RoutePaths} from "../../constants/RoutePaths";
import ExternalLinks from "../../constants/ExternalLinks";
import {ColorTheme} from "../../constants/ColorTheme";
import DecorativeCodelines from "./DecorativeCodelines";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../constants/MediaQueries";
import Avatar from "./avatar/Avatar";
import {RootStoreState} from "../../redux/ReduxStore";

const AboutPage: React.FC = () => {
  const currLang = useSelector((state: RootStoreState) => state.lang)
  const currTheme = useSelector((state: RootStoreState) => state.colorTheme)

  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})
  const isTablet = useMediaQuery({ query: MediaQueries.TABLET})

  return(
    <div className={`about-page-wrapper ${isDesktop && 'desktop'}`}>
      <div className={`main-about-wrapper ${isDesktop && 'desktop'}`}>
        <article className={`text-block-wrapper ${isDesktop && 'desktop'}`}>
          <h1
            className={`h1-text ${isDesktop && 'desktop'} ${isTablet && 'tablet'} animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
          >
            {currLang === Lang.ENG ? 'Hello!' : 'Привет!'}
          </h1>
          <div className="text-wrapper">
            <p className={`main-text ${isDesktop && 'desktop'} ${isTablet && 'tablet'} animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}>
              {currLang === Lang.ENG
                ? 'I’m Sergey Zaozerskikh, a\u00A0fullstack developer. Every day I\u00A0write code that turns ideas into technological, beautiful and\u00A0modern digital solutions. My experience of\u00A0studying at\u00A0the Software Engineering Department of\u00A0the HSE helps me in\u00A0this, as well as the skills I’ve gained from developing a\u00A0lot of\u00A0websites and mobile applications alone or\u00A0as a\u00A0part of teams.'
                : 'Я Сергей Заозерских, фулстек-разработчик. Каждый день я\u00A0пишу код, который превращает смелые идеи и\u00A0задумки в\u00A0технологичные, красивые и\u00A0современные цифровые решения. В\u00A0этом мне помогает опыт обучения на\u00A0кафедре программной инженерии ВШЭ, а\u00A0ещё навыки, полученные при разработке множества разных сайтов и\u00A0мобильных приложений, созданных мною с\u00A0нуля или в\u00A0составе команд.'
              }
            </p>
            <p className={`mt13 ${isDesktop && 'desktop'} ${isTablet && 'tablet'} main-text animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}>
              {currLang === Lang.ENG
                ? 'I usually use React or\u00A0React Native for the frontend and Spring Boot for the server side, but I\u00A0am always ready to\u00A0use other technologies and tools as\u00A0well.'
                : 'Обычно я\u00A0использую React или React Native для фронтенда и\u00A0Spring Boot для серверной части, но всегда готов к\u00A0разным развитиям событий.'
              }
            </p>
          </div>
        </article>
        <div className={`avatar-and-code-wrapper ${isDesktop && 'desktop'}`}>
          <Avatar/>
          <figure className={`code-wrapper ${isDesktop && 'desktop'}`}>
            <DecorativeCodelines/>
          </figure>
        </div>
      </div>
      <nav className="buttons">
        <ButtonWithLink
          color={DefaultButtonColor.VIOLET}
          text={currLang === Lang.ENG ? 'Back to portfolio' : 'Вернуться к кейсам'}
          to={RoutePaths.HOME}
        />
        <ButtonWithLink
          color={DefaultButtonColor.BLUE}
          text={currLang === Lang.ENG ? 'Message in Telegram' : 'Написать в телеграм'}
          to={ExternalLinks.TELEGRAM}
          openAsBlank={true}
        />
      </nav>
    </div>
  )
}

export default AboutPage
