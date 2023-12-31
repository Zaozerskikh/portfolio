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
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../constants/MediaQueries";


const HomePage: React.FC = () => {
  const currLang = useSelector((state: RootState) => state.lang.lang)
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)
  const projectArr = useSelector((state: RootState) => state.projects.projects)
  const navigate = useNavigate()

  const isTablet = useMediaQuery({ query: MediaQueries.TABLET})
  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})
  const isMobile = useMediaQuery({ query: MediaQueries.NORMAL_MOBILE})

  return(
    <div className={`homepage-wrapper ${isDesktop ? 'desktop' : isTablet ? 'tablet' : 'mobile'}`}>
      <div
        className={`h1-text ${isDesktop && 'desktop'} ${isTablet && 'tablet'} animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
        dangerouslySetInnerHTML={{__html: `${currLang === Lang.ENG 
            ? `Developing ${isMobile ? '</br>' : ''} websites, ${isTablet || isDesktop ? '</br>' : ''} mobile ${isMobile ? '</br>' : ''} and web applications.`
            : `Разрабатываю ${isMobile ? '</br>' : ''} сайты, ${isTablet || isDesktop ? '</br>' : ''} мобильные ${isMobile ? '</br>' : ''} и веб-приложения.`}`
        }}
      />
      <div className={`projects-wrapper ${isDesktop ? 'desktop' : isTablet ? 'tablet' : 'mobile'}`}>
        {projectArr ? (
          projectArr.map((project, idx) => (
            <ProjectCard
              key={idx}
              id={project.id}
              name={project.name}
              previewImage={project.previewImage}
              shortDescriptionRUS={project.shortDescriptionRUS}
              shortDescriptionENG={project.shortDescriptionENG}
              tags={project.tags}
            />
          ))
        ) : (
          <>{/*TODO loader here*/}</>
        )}
      </div>
      <div
        className={`h1-text animation-02s-all ${isDesktop && 'desktop'} ${isTablet && 'tablet'} ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
        dangerouslySetInnerHTML={{__html: `${currLang === Lang.ENG
            ? `I create products from&nbsp;scratch or&nbsp;based on&nbsp;a&nbsp;ready design, as&nbsp;well as&nbsp;execute front&#8209;end and&nbsp;back&#8209;end development.`
            : `Создаю продукты с&nbsp;нуля или по&nbsp;готовому дизайну, берусь за&nbsp;фронтенд и&nbsp;бэкенд.`}`
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
