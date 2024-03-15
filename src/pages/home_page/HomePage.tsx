import React from "react";
import './HomePage.css'
import '../../assets/styles/animation_durations.css'
import {ButtonWithLink} from "../../components/default_button/DefaultButton";
import {DefaultButtonColor} from "../../constants/DefaultButtonColor";
import ExternalLinks from "../../constants/ExternalLinks";
import {useSelector} from "react-redux";
import {RoutePaths} from "../../constants/RoutePaths";
import {ColorTheme} from "../../constants/ColorTheme";
import ProjectCard from "./project_card/ProjectCard";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../constants/MediaQueries";
import {MockProjectArr} from "../../mock_data/MockProjectArr";
import {RootStoreState} from "../../redux/ReduxStore";
import {useTranslation} from "react-i18next";

const HomePage: React.FC = () => {
  const currTheme = useSelector((state: RootStoreState) => state.colorTheme)
  const isTablet = useMediaQuery({ query: MediaQueries.TABLET})
  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})
  const isMobile = useMediaQuery({ query: MediaQueries.NORMAL_MOBILE})
  const { t } = useTranslation()

  return(
    <div className={`homepage-wrapper ${isDesktop ? 'desktop' : isTablet ? 'tablet' : 'mobile'}`}>
      <h1
        className={`h1-text ${isDesktop && 'desktop'} ${isTablet && 'tablet'} animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
        dangerouslySetInnerHTML={{__html: `
          ${t('homePage.header',
            {
              sep1: `${isMobile ? '</br>' : ' '}`,
              sep2: `${isTablet || isDesktop ? '</br>' : ' '}`,
              sep3: `${isMobile ? '</br>' : ' '}`
            }
          )}
        `}}
      />
      <section className={`projects-wrapper ${isDesktop ? 'desktop' : isTablet ? 'tablet' : 'mobile'}`}>
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
      </section>
      <h1
        className={`
          h1-text animation-02s-all 
          ${isDesktop && 'desktop'} 
          ${isTablet && 'tablet'} 
          ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}
        `}
      >
        {t('homePage.bottomPhrase')}
      </h1>
      <div className="buttons">
        <ButtonWithLink
          color={DefaultButtonColor.VIOLET}
          text={t('commonBtnsText.moreAboutServices')}
          to={RoutePaths.SERVICES}
        />
        <ButtonWithLink
          color={DefaultButtonColor.BLUE}
          text={t('commonBtnsText.messageInTelegram')}
          to={ExternalLinks.TELEGRAM}
          openAsBlank={true}
        />
      </div>
    </div>
  )
}

export default HomePage
