import './ProjectDetailed.css'
import './../../assets/styles/fonts.css'
import './../../assets/styles/animation_durations.css'
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/ReduxStore";
import {RoutePaths} from "../../constants/RoutePaths";
import {ProjectInfo} from "../../redux/projects_reducer/ProjectInfo";
import DefaultButton, {ButtonIcon} from "../../components/default_button/DefaultButton";
import {DefaultButtonColor} from "../../constants/DefaultButtonColor";
import {Lang} from "../../constants/Lang";
import {ColorTheme} from "../../constants/ColorTheme";
import Tag from "../../components/tag/Tag";
import ExternalLinks from "../../constants/ExternalLinks";
import TextFormatterComponent from "../../components/text_formatter/TextFormatterComponent";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../constants/MediaQueries";


const ProjectDetailedPage: React.FC = () => {
  const currLang = useSelector((state: RootState) => state.lang.lang)
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)
  const projectArr = useSelector((state: RootState) => state.projects.projects)

  const { id } = useParams<{ id: string }>()
  const [project, setProject] = useState<ProjectInfo | undefined>(undefined)
  const navigate = useNavigate()

  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})
  const isTablet = useMediaQuery({ query: MediaQueries.TABLET})
  const isMobile = useMediaQuery({ query: MediaQueries.NORMAL_MOBILE })

  useEffect(() => {
    if (!id) {
      navigate(RoutePaths.NOT_FOUND)
    }

    if (projectArr && id && projectArr?.length > 0) {
      const proj = projectArr.find(proj => proj.id === id)

      if (proj) {
        setProject(proj)
      } else {
        navigate(RoutePaths.NOT_FOUND)
      }
    }
  }, [id, projectArr, navigate]);

  return(
    <div className="project-detailed-wrapper">
      <div className="info-wrapper">
        <div
          className={`h1-text ${isDesktop && 'desktop'} ${isTablet && 'tablet'} animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
        >
          {project?.name}
        </div>
        <div className="tags-wrapper">
          {project?.tags.map((tag, idx) => (
            <Tag type={tag} key={idx} />
          ))}
        </div>
        <TextFormatterComponent
          text={(currLang === Lang.ENG ? project?.fullDescriptionENG : project?.fullDescriptionRUS) || 'h'}
          additionalStyles={`main-text ${isDesktop && 'desktop'} ${isTablet && 'tablet'} animation-02s-all maxwidth ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
          letterWidth={(isDesktop || isTablet) ? 11 : 9.9}
        />
      </div>
      <div className='btns-wrapper'>
        {project?.websiteLink && (
          <DefaultButton
            color={DefaultButtonColor.VIOLET}
            text={currLang === Lang.ENG ? 'Open website' : 'Открыть cайт'}
            onClickAction={() => window.open(project?.websiteLink, '_blank')}
          />
        )}
        {project?.googlePlayLink && (
          <DefaultButton
            color={DefaultButtonColor.MINT}
            text={currLang === Lang.ENG ? 'Open in Google Play' : 'Скачать в Google Play'}
            buttonIcon={ButtonIcon.GOOGLE_PLAY}
            onClickAction={() => window.open(project?.googlePlayLink, '_blank')}
          />
        )}
        {project?.appStoreLink && (
          <DefaultButton
            color={DefaultButtonColor.GRAY}
            text={currLang === Lang.ENG ? 'Open in App Store' : 'Скачать в App Store'}
            buttonIcon={ButtonIcon.APP_STORE}
            onClickAction={() => window.open(project?.appStoreLink, '_blank')}
          />
        )}
      </div>
      <div className="images-wrapper">
        {project?.detailedSharedImages.map((image, idx) => (
            <img src={image} alt={idx.toString()} key={idx}/>
          ))
        }
        {isMobile && project?.detailedMobileImages?.map((image, idx) => (
            <img src={image} alt={idx.toString()} key={idx}/>
          ))
        }
        {isDesktop && project?.detailedDesktopImages?.map((image, idx) => (
           <img src={image} alt={idx.toString()} key={idx}/>
          ))
        }
      </div>
      <div className="buttons-wrapper">
        <DefaultButton
          color={DefaultButtonColor.BLUE}
          text={currLang === Lang.ENG ? 'Text me in Telegram' : 'Написать в телеграм'}
          onClickAction={() => window.open(ExternalLinks.TELEGRAM, '_blank')}
        />
        <DefaultButton
          color={DefaultButtonColor.YELLOW}
          text={currLang === Lang.ENG ? 'More about services' : 'Подробнее об услугах'}
          onClickAction={() => navigate(RoutePaths.SERVICES)}
        />
        <DefaultButton
          color={DefaultButtonColor.MINT}
          text={currLang === Lang.ENG ? 'Back to homepage' : 'На главную'}
          onClickAction={() => navigate(RoutePaths.HOME)}
        />
      </div>
    </div>
  )
}

export default ProjectDetailedPage
