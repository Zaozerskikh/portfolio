import './AboutPage.css'
import './../../assets/styles/fonts.css'
import './../../assets/styles/animation_durations.css'
import React from "react";
import DefaultButton from "../../components/default_button/DefaultButton";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/ReduxStore";
import {DefaultButtonColor} from "../../constants/DefaultButtonColor";
import {Lang} from "../../constants/Lang";
import {useNavigate} from "react-router-dom";
import {RoutePaths} from "../../constants/RoutePaths";
import ExternalLinks from "../../constants/ExternalLinks";
import {ColorTheme} from "../../constants/ColorTheme";
import TextFormatterComponent from "../../components/text_formatter/TextFormatterComponent";
import DecorativeCodelines from "./DecorativeCodelines";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../constants/MediaQueries";
import Avatar from "./avatar/Avatar";

const AboutPage: React.FC = () => {
  const currLang = useSelector((state: RootState) => state.lang.lang)
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)

  const navigate = useNavigate()
  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})

  return(
    <div className={`about-page-wrapper ${isDesktop && 'desktop'}`}>
      <div className={`main-about-wrapper ${isDesktop && 'desktop'}`}>
        <div className={`text-block-wrapper ${isDesktop && 'desktop'}`}>
          <div
            className={`h1-text ${isDesktop && 'desktop'} animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
          >
            {currLang === Lang.ENG ? 'Hello!' : 'Привет!'}
          </div>
          <div className="text-wrapper">
            <TextFormatterComponent
              text={`${currLang === Lang.ENG
                ? 'I’m Sergey Zaozerskikh, a fullstack developer. Every day I write code that turns ideas into technological, beautiful and modern digital solutions.'
                : 'Я Сергей Заозерских, фулстек-разработчик. Каждый день я пишу код, который превращает смелые идеи и задумки в технологичные, красивые и современные цифровые решения.'
              }`}
              additionalStyles={`main-text ${isDesktop && 'desktop'} animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
              letterWidth={isDesktop ? 11 : 9.9}
            />
            <TextFormatterComponent
              text={`${currLang === Lang.ENG
                ? 'My experience of studying at the Software Engineering Department of the HSE helps me in this, as well as the skills I’ve gained from developing a lot of websites and mobile applications alone or as a part of teams.'
                : 'В этом мне помогает опыт обучения на кафедре программной инженерии ВШЭ, а ещё навыки, полученные при разработке множества разных сайтов и мобильных приложений, созданных мною с нуля или в составе команд. '
              }`}
              additionalStyles={`main-text ${isDesktop && 'desktop'} animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
              letterWidth={isDesktop ? 11 : 9.9}
            />
            <TextFormatterComponent
              text={`${currLang === Lang.ENG
                ? 'I usually use React or React Native for the frontend and Spring Boot for the server side, but I am always ready to use other technologies and tools as well.'
                : 'Обычно я использую React или React Native для фронтенда и Spring Boot для серверной части, но всегда готов к разным развитиям событий.'
              }`}
              additionalStyles={`mt13 ${isDesktop && 'desktop'} main-text animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
              letterWidth={isDesktop ? 12.1 : 9.9}
            />
          </div>
        </div>
        <div className={`avatar-and-code-wrapper ${isDesktop && 'desktop'}`}>
          <Avatar/>
          <div className={`code-wrapper ${isDesktop && 'desktop'}`}>
            <DecorativeCodelines/>
          </div>
        </div>
      </div>
      <div className="buttons">
        <DefaultButton
          color={DefaultButtonColor.VIOLET}
          text={currLang === Lang.ENG ? 'More about services' : 'Подробнее об услугах'}
          onClickAction={() => navigate(RoutePaths.SERVICES)}
        />
        <DefaultButton
          color={DefaultButtonColor.BLUE}
          text={currLang === Lang.ENG ? 'Text me in telegram' : 'Написать в телеграм'}
          onClickAction={() => window.open(ExternalLinks.TELEGRAM, '_blank')}
        />
      </div>
    </div>
  )
}

export default AboutPage
