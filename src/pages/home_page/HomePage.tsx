import React from "react";
import './HomePage.css'
import '../../assets/styles/animation_durations.css'
import DefaultButton from "../../components/default_button/DefaultButton";
import {DefaultButtonColor} from "../../constants/DefaultButtonColor";
import ExternalLinks from "../../constants/ExternalLinks";
import {RootState} from "../../redux/ReduxStore";
import {useSelector} from "react-redux";
import {Lang} from "../../constants/Lang";
import {useNavigate} from "react-router-dom";
import {RoutePaths} from "../../constants/RoutePaths";
import {ColorTheme} from "../../constants/ColorTheme";
import ProjectCard from "./project_card/ProjectCard";


const HomePage: React.FC = () => {
  const currLang = useSelector((state: RootState) => state.lang.lang)
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)
  const projectArr = useSelector((state: RootState) => state.projects.projects)
  const navigate = useNavigate()

  return(
    <div className="homepage-wrapper">
      <div
        className={`mobile-h1-text animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
        dangerouslySetInnerHTML={{__html: `${currLang === Lang.ENG 
            ? 'Developing</br> websites, mobile</br> and web applications.' 
            : 'Разрабатываю</br> сайты, мобильные</br> и веб-приложения.'}`
        }}
      />
      <div className="projects-wrapper">
        {projectArr ? (
          projectArr.map((project, idx) => (
            <ProjectCard
              key={idx}
              id={project.id}
              name={project.name}
              previewWhiteImage={project.previewWhiteImage}
              previewDarkImage={project.previewDarkImage}
              shortDescriptionRUS={project.shortDescriptionRUS}
              shortDescriptionENG={project.shortDescriptionENG}
              tags={project.tags}
            />
          ))
        ) : (
          <></>
        )}
      </div>
      <div
        className={`mobile-h1-text animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
        dangerouslySetInnerHTML={{__html: `${currLang === Lang.ENG
            ? 'I create products </br> from scratch </br> or based on a ready </br> design, as well as </br> execute front-end </br> and back-end development.'
            : 'Создаю продукты</br> с нуля</br> или по готовому дизайну, берусь </br>за фронтенд </br>и бэкенд.'}`
        }}
      />
      <div className="buttons">
        <DefaultButton
          color={DefaultButtonColor.VIOLET}
          text={currLang === Lang.ENG ? 'More about services' : 'Подробнее об услугах'}
          onClickAction={() => navigate(RoutePaths.SERVICES)}
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

// @ts-ignore
export default HomePage
// @ts-ignore
