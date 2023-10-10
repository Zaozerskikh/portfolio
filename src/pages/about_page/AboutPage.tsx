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
import avatar from './avatar.png'
import DecorativeCodelines from "./DecorativeCodelines";

const AboutPage: React.FC = () => {
  const currLang = useSelector((state: RootState) => state.lang.lang)
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)
  const navigate = useNavigate()

  return(
    <div className="about-page-wrapper">
      <div className="main-about-wrapper">
        <div className="avatar-and-code-wrapper">
          <div className="avatar-wrapper">
            <img src={avatar} className="avatar" alt="avatar"/>
            <div className="avatar-shadow"/>
          </div>
          <div className="code-wrapper">
            <DecorativeCodelines/>
          </div>
        </div>
        <div
          className={`mobile-h1-text animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
        >
          {currLang === Lang.ENG ? 'Hello!' : 'Привет!'}
        </div>
        <div className="text-wrapper">
          <TextFormatterComponent
            text={`${currLang === Lang.ENG 
              ? 'I’m Sergey Zaozerskikh, a fullstack developer. Every day I write code that turns ideas into technological, beautiful and modern digital solutions.' 
              : 'Я Сергей Заозерских, фулстек-разработчик. Каждый день я пишу код, который превращает смелые идеи и задумки в технологичные, красивые и современные цифровые решения.'
            }`}
            additionalStyles={`mobile-main-text animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
            letterWidth={9.9}
          />
          <TextFormatterComponent
            text={`${currLang === Lang.ENG
              ? 'My experience of studying at the Software Engineering Department of the HSE helps me in this, as well as many different websites and mobile applications I’ve created from scratch on my own or as a part of teams.'
              : 'В этом мне помогает опыт обучения на кафедре программной инженерии ВШЭ, а ещё множество разных сайтов и мобильных приложений, созданных мною с нуля или в составе команд. '
            }`}
            additionalStyles={`mobile-main-text animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
            letterWidth={9.9}
          />
          <TextFormatterComponent
            text={`${currLang === Lang.ENG 
              ? 'I usually use React or React Native for the frontend and Spring Boot for the server side, but I am always ready to use other technologies and tools as well.' 
              : 'Обычно я использую React или React Native для фронтенда и Spring Boot для серверной части, но всегда готов к разным развитиям событий.'
            }`}
            additionalStyles={`mt13 mobile-main-text animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
            letterWidth={9.9}
          />
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
