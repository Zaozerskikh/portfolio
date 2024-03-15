import './ProjectCard.css'
import '../../../assets/styles/fonts.css'
import '../../../assets/styles/animation_durations.css'
import React from "react";
import {ColorTheme} from "../../../constants/ColorTheme";
import {useSelector} from "react-redux";
import Tag from "../../../components/tag/Tag";
import {ShortProjectInfo} from "../../../types/ProjectInfo";
import {Lang} from "../../../constants/Lang";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../../constants/MediaQueries";
import useHoverAndClick from "../../../utils/hooks/UseHoverAndClickHook";
import withLink from "../../../utils/HOCs/WithLinkHOC";
import {RootStoreState} from "../../../redux/ReduxStore";
import {useTranslation} from "react-i18next";

const ProjectCardWithoutLink: React.FC<ShortProjectInfo> = ({
  previewImage,
  name,
  shortDescriptionENG,
  shortDescriptionRUS,
  tags
}) => {
  const { i18n } = useTranslation()
  const currLang = i18n?.language as Lang
  const currTheme = useSelector((state: RootStoreState) => state.colorTheme)

  const isTablet = useMediaQuery({ query: MediaQueries.TABLET })
  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP })
  const {isHovered, isClicked, ...eventHandlers}
    = useHoverAndClick({ touchEndDelay: 1000 })

  return(
    <div
      className={`project-card-wrapper ${isHovered && 'hovered'} ${isClicked && 'clicked'} animation-02s-all`}
      {...eventHandlers}
    >
      <div className={`tags-wrapper ${isHovered && 'hovered'}  ${isClicked && 'clicked'} animation-02s-all`}>
        {tags.map((tag, idx) => (
          <Tag type={tag} key={idx}/>
        ))}
      </div>
      <div
        className={`
          project-img-preview-wrapper animation-02s-all
          ${currTheme === ColorTheme.DARK ? 'img-gray' : 'img-white'}
          ${isClicked && (currTheme === ColorTheme.DARK ? 'clicked-gray' : 'clicked-black')}
          ${isHovered && (currTheme === ColorTheme.DARK ? 'hovered-gray' : 'hovered-black')}
        `}
      >
        <img
          src={previewImage}
          alt="img"
          className={`
            project-img-preview ${isHovered && 'hovered'} 
            animation-02s-all
          `}
        />
      </div>
      <div className="project-info">
        <h2
          className={`
            h2-text animation-02s-all 
            ${isDesktop && 'desktop'} 
            ${isTablet && 'tablet'} 
            ${currTheme === ColorTheme.WHITE ? 'dark' : 'white'}
          `}
        >
          {name?.toLowerCase()}
        </h2>
        <div
          className={`
            description-text maxwidth animation-02s-all 
            ${isDesktop && 'desktop'} 
            ${isTablet && 'tablet'} 
            ${currTheme === ColorTheme.WHITE
              ? isHovered ? 'black' : 'dark'
              : isHovered ? 'white' : 'dark-theme-gray'
            }
          `}
        >
          {currLang === Lang.ENG ? shortDescriptionENG: shortDescriptionRUS}
        </div>
      </div>
    </div>
  )
}

const ProjectCard = withLink(ProjectCardWithoutLink)
export default ProjectCard