import './ProjectDetailed.css'
import './../../assets/styles/fonts.css'
import './../../assets/styles/animation_durations.css'
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {RoutePaths} from "../../constants/RoutePaths";
import {ProjectInfo} from "../../types/ProjectInfo";
import {DefaultButtonColor} from "../../components/buttons/default_button/DefaultButtonColor";
import {Lang} from "../../constants/Lang";
import {ColorTheme} from "../../constants/ColorTheme";
import Tag from "../../components/tag/Tag";
import ExternalLinks from "../../constants/ExternalLinks";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../constants/MediaQueries";
import {ProjectArr} from "../../data/ProjectArr";
import {useTranslation} from "react-i18next";
import {useAppSelector} from "../../redux/Hooks";
import FullscreenModal from "./fullscreen_modal/FullscreenModal";
import ImageGrid from "./image_grid/ImageGrid";
import {DefaultButtonIcon} from "../../components/buttons/default_button/DefaultButtonIcon";
import ButtonWithLink from "../../components/buttons/default_button/ButtonWithLink";
import {FullscreenState} from "./fullscreen_modal/FullscreenModalProps";
import useFullscreenModalGA4 from "../../ga4/useFullscreenModalGA4";

const ProjectDetailedPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const currLang = i18n?.language as Lang
  const currTheme = useAppSelector(state => state.colorTheme)

  const { id } = useParams<{ id: string }>()
  const [project, setProject] = useState<ProjectInfo | undefined>(undefined)
  const navigate = useNavigate()

  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})
  const isTablet = useMediaQuery({ query: MediaQueries.TABLET})
  const isMobile = useMediaQuery({ query: MediaQueries.NORMAL_MOBILE })

  const [fullscreenState, setFullscreenState]
    = useState<FullscreenState>({ isOpened: false, initialIdx: 0, gridY: 0, gridHeight: 0 })
  useFullscreenModalGA4(fullscreenState.isOpened)

  useEffect(() => {
    if (!id) {
      navigate(RoutePaths.NOT_FOUND)
    }

    if (ProjectArr && id && ProjectArr?.length > 0) {
      const proj = ProjectArr.find(proj => proj.id === id)

      if (proj) {
        setProject(proj)
      } else {
        navigate(RoutePaths.NOT_FOUND)
      }
    }
  }, [id, navigate]);

  useEffect(() => {
    if (fullscreenState.isOpened) {
      document.body.classList.add('hidden');
    } else {
      document.body.classList.remove('hidden');
    }
  }, [fullscreenState]);

  return(
    <article className="project-detailed-wrapper">
      <FullscreenModal
        images={project?.detailedImageGrids?.flatMap(g => g.rows.flatMap(r => [r.im1, r.im2])) || []}
        fullscreenState={fullscreenState}
        onClose={() => setFullscreenState(prev => ({ ...prev, isOpened: false, initialIdx: fullscreenState?.initialIdx }))}
      />
      <div className="info-wrapper">
        <h1
          className={`
            h1-text ${isDesktop && 'desktop'} 
            ${isTablet && 'tablet'} 
            animation-02s-all 
            ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}
          `}
        >
          {project?.name}
        </h1>
        <div className="tags-wrapper">
          {project?.tags.map((tag, idx) => (
            <Tag type={tag} key={idx} />
          ))}
        </div>
        <p
          className={`
            main-text animation-02s-all maxwidth 
            ${isDesktop && 'desktop'} 
            ${isTablet && 'tablet'} 
            ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}
          `}
        >
          {(currLang === Lang.ENG ? project?.fullDescriptionENG : project?.fullDescriptionRUS) || ''}
        </p>
      </div>
      {(project?.appStoreLink || project?.googlePlayLink || project?.websiteLink) && (
        <nav className='btns-wrapper'>
          {project?.websiteLink && (
            <ButtonWithLink
              color={DefaultButtonColor.VIOLET}
              text={t('projectBtnsText.openWebsite')}
              to={project?.websiteLink}
              openAsBlank={true}
            />
          )}
          {project?.googlePlayLink && (
            <ButtonWithLink
              color={DefaultButtonColor.MINT}
              text={t('projectBtnsText.openGooglePlay')}
              buttonIcon={DefaultButtonIcon.GOOGLE_PLAY}
              to={project.googlePlayLink}
              openAsBlank={true}
            />
          )}
          {project?.appStoreLink && (
            <ButtonWithLink
              color={DefaultButtonColor.GRAY}
              text={t('projectBtnsText.openAppStore')}
              buttonIcon={DefaultButtonIcon.APP_STORE}
              to={project?.appStoreLink}
              openAsBlank={true}
            />
          )}
        </nav>
      )}
      <div className="images-wrapper">
        {project?.detailedImageGrids?.map((g, i) =>
          <ImageGrid
            pictures={g.rows.flatMap(r => [r.im1, r.im2]) || []}
            onPictureClick={(idx, gridY, gridHeight) =>
              setFullscreenState({ isOpened: true, initialIdx: idx, gridY: gridY, gridHeight: gridHeight })
            }
            key={i}
          />
        )}
        {project?.detailedSharedImages.map((image, idx) => (
            <img
              src={image}
              alt={idx.toString()}
              key={idx}
            />
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
      <nav className="buttons-wrapper">
        <ButtonWithLink
          color={DefaultButtonColor.BLUE}
          text={t('commonBtnsText.messageInTelegram')}
          to={ExternalLinks.TELEGRAM}
          openAsBlank={true}
        />
        <ButtonWithLink
          color={DefaultButtonColor.YELLOW}
          text={t('commonBtnsText.moreAboutServices')}
          to={RoutePaths.SERVICES}
        />
        <ButtonWithLink
          color={DefaultButtonColor.MINT}
          text={t('commonBtnsText.backToHome')}
          to={RoutePaths.HOME}
        />
      </nav>
    </article>
  )
}

export default ProjectDetailedPage
