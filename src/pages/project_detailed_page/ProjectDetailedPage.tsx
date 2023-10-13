import './ProjectDetailed.css'
import './../../assets/styles/fonts.css'
import './../../assets/styles/animation_durations.css'
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/ReduxStore";
import {RoutePaths} from "../../constants/RoutePaths";
import {ProjectInfo} from "../../redux/projects_reducer/ProjectInfo";
import DefaultButton from "../../components/default_button/DefaultButton";
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
      <DefaultButton
        color={DefaultButtonColor.VIOLET}
        text={currLang === Lang.ENG ? 'Open website' : 'Открыть сайт'}
        onClickAction={() => window.open(project?.link, '_blank')}
      />
      <div className="images-wrapper">
        {(currTheme === ColorTheme.DARK ? project?.detailedDarkImages : project?.detailedWhiteImages)
          ?.map((image, idx) => (
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
