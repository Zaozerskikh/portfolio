import React from "react";
import './HomePage.css'
import '../../assets/styles/animation_durations.css'
import {ButtonWithLink} from "../../components/default_button/DefaultButton";
import {DefaultButtonColor} from "../../constants/DefaultButtonColor";
import ExternalLinks from "../../constants/ExternalLinks";
import {useSelector} from "react-redux";
import {Lang} from "../../constants/Lang";
import {RoutePaths} from "../../constants/RoutePaths";
import {ColorTheme} from "../../constants/ColorTheme";
import ProjectCard from "./project_card/ProjectCard";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../constants/MediaQueries";
import {MockProjectArr} from "../../mock_data/MockProjectArr";
import {RootStoreState} from "../../redux/ReduxStore";

const HomePage: React.FC = () => {
  const currLang = useSelector((state: RootStoreState) => state.lang)
  const currTheme = useSelector((state: RootStoreState) => state.colorTheme)
  const isTablet = useMediaQuery({ query: MediaQueries.TABLET})
  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})
  const isMobile = useMediaQuery({ query: MediaQueries.NORMAL_MOBILE})

  return(
    <div className={`homepage-wrapper ${isDesktop ? 'desktop' : isTablet ? 'tablet' : 'mobile'}`}>
      <h1
        className={`h1-text ${isDesktop && 'desktop'} ${isTablet && 'tablet'} animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
        dangerouslySetInnerHTML={{__html: `${currLang === Lang.ENG 
            ? `Developing ${isMobile ? '</br>' : ''} websites, ${isTablet || isDesktop ? '</br>' : ''} mobile ${isMobile ? '</br>' : ''} and web applications.`
            : `Разрабатываю ${isMobile ? '</br>' : ''} сайты, ${isTablet || isDesktop ? '</br>' : ''} мобильные ${isMobile ? '</br>' : ''} и веб-приложения.`}`
        }}
      />
      <div className={`projects-wrapper ${isDesktop ? 'desktop' : isTablet ? 'tablet' : 'mobile'}`}>
        {MockProjectArr.map((project, idx) => (
          <ProjectCard
            to={RoutePaths.PROJECT_DETAILED.replace(':id', project?.id)}
            key={idx}
            id={project.id}
            name={project.name}
            previewImage={project.previewImage}
            shortDescriptionRUS={project.shortDescriptionRUS}
            shortDescriptionENG={project.shortDescriptionENG}
            tags={project.tags}
          />
        ))}
      </div>
      <h1
        className={`
          h1-text animation-02s-all 
          ${isDesktop && 'desktop'} 
          ${isTablet && 'tablet'} 
          ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}
        `}
      >
        {currLang === Lang.ENG
          ? `I create products from\u00A0scratch or\u00A0based on&nbsp;a\u00A0ready design, as\u00A0well as\u00A0execute front-end and&nbsp;back-end development.`
          : `Создаю продукты с\u00A0нуля или по\u00A0готовому дизайну, берусь за\u00A0фронтенд и\u00A0бэкенд.`}
      </h1>
      <div className="buttons">
        <ButtonWithLink
          color={DefaultButtonColor.VIOLET}
          text={currLang === Lang.ENG ? 'More about services' : 'Подробнее об услугах'}
          to={RoutePaths.SERVICES}
        />
        <ButtonWithLink
          color={DefaultButtonColor.BLUE}
          text={currLang === Lang.ENG ? 'Message in Telegram' : 'Написать в телеграм'}
          to={ExternalLinks.TELEGRAM}
          openAsBlank={true}
        />
      </div>
    </div>
  )
}

export default HomePage
