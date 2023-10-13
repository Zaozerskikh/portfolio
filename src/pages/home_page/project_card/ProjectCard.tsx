import './ProjectCard.css'
import '../../../assets/styles/fonts.css'
import '../../../assets/styles/animation_durations.css'
import React, {useState} from "react";
import {ColorTheme} from "../../../constants/ColorTheme";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/ReduxStore";
import Tag from "../../../components/tag/Tag";
import {ShortProjectInfo} from "../../../redux/projects_reducer/ProjectInfo";
import {useNavigate} from "react-router-dom";
import {RoutePaths} from "../../../constants/RoutePaths";
import TextFormatterComponent from "../../../components/text_formatter/TextFormatterComponent";
import {Lang} from "../../../constants/Lang";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../../constants/MediaQueries";

const ProjectCard: React.FC<ShortProjectInfo> = ({ previewDarkImage, previewWhiteImage, name, id,
                                              shortDescriptionENG, shortDescriptionRUS, tags}) => {
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)
  const currLang = useSelector((state: RootState) => state.lang.lang)
  const navigate = useNavigate()

  const [isHovered, setHovered] = useState(false);
  const isTablet = useMediaQuery({ query: MediaQueries.TABLET})
  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})
  const isTouchable = useMediaQuery({ query: MediaQueries.TOUCHABLE });

  return(
    <div
      className={`project-card-wrapper ${isHovered && 'hovered'} animation-02s-all`}
      onClick={() => navigate(RoutePaths.PROJECT_DETAILED.replace(':id', id))}
      onMouseEnter={() => {
        if (!isTouchable) {
          setHovered(true)
        }
      }}
      onMouseLeave={() => {
        if (!isTouchable) {
          setHovered(false)
        }
      }}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      onTouchCancel={() => setHovered(false)}
      onMouseDown={() => {
        if (!isTouchable) {
        }
      }}
      onMouseUp={() => {
        if (!isTouchable) {
        }
      }}
    >
      <div className={`tags-wrapper ${isHovered && 'hovered'} animation-02s-all`}>
        {tags.map((tag, idx) => (
          <Tag type={tag} key={idx}/>
        ))}
      </div>
      <div className={`project-img-preview-wrapper ${isHovered && (currTheme === ColorTheme.DARK ? 'hovered-gray' : 'hovered-black')} animation-02s-all`}>
        <img
          src={currTheme === ColorTheme.DARK ? previewDarkImage : previewWhiteImage}
          alt="img"
          className={`
          project-img-preview ${isHovered && 'hovered'} 
          animation-02s-all
        `}
        />
      </div>
      <div className="project-info">
        <div
          className={`h2-text animation-02s-all ${isDesktop && 'desktop'} ${isTablet && 'tablet'} ${currTheme === ColorTheme.WHITE ? 'dark' : 'white'}`}
        >
          {name}
        </div>
        <TextFormatterComponent
          text={currLang === Lang.ENG ? shortDescriptionENG: shortDescriptionRUS}
          additionalStyles={`description-text ${isDesktop && 'desktop'} ${isTablet && 'tablet'}maxwidth animation-02s-all ${currTheme === ColorTheme.WHITE ? isHovered ? 'black' : 'dark' : isHovered ? 'white' : 'dark-theme-gray'}`}
          letterWidth={(isDesktop || isTablet) ? 9.9 : 8.8}
        />
      </div>
    </div>
  )
}

export default ProjectCard
