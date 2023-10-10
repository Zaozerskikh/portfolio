import './ProjectCard.css'
import '../../../assets/styles/fonts.css'
import '../../../assets/styles/animation_durations.css'
import React from "react";
import {ColorTheme} from "../../../constants/ColorTheme";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/ReduxStore";
import Tag from "../../../components/tag/Tag";
import {ShortProjectInfo} from "../../../redux/projects_reducer/ProjectInfo";
import {useNavigate} from "react-router-dom";
import {RoutePaths} from "../../../constants/RoutePaths";
import TextFormatterComponent from "../../../components/text_formatter/TextFormatterComponent";
import {Lang} from "../../../constants/Lang";

const ProjectCard: React.FC<ShortProjectInfo> = ({ previewDarkImage, previewWhiteImage, name, id,
                                              shortDescriptionENG, shortDescriptionRUS, tags}) => {
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)
  const currLang = useSelector((state: RootState) => state.lang.lang)
  const navigate = useNavigate()

  return(
    <div
      className="project-card-wrapper"
      onClick={() => navigate(RoutePaths.PROJECT_DETAILED.replace(':id', id))}
    >
      <div className="tags-wrapper">
        {tags.map((tag, idx) => (
          <Tag type={tag} key={idx}/>
        ))}
      </div>
      <img
        src={currTheme === ColorTheme.DARK ? previewDarkImage : previewWhiteImage}
        alt="img"
      />
      <div className="project-info">
        <div
          className={`mobile-h2-text animation-02s-all ${currTheme === ColorTheme.WHITE ? 'dark' : 'white'}`}
        >
          {name}
        </div>
        <TextFormatterComponent
          text={currLang === Lang.ENG ? shortDescriptionENG: shortDescriptionRUS}
          additionalStyles={`mobile-description-text maxwidth animation-02s-all ${currTheme === ColorTheme.WHITE ? 'dark' : 'white'}`}
          letterWidth={8.8}
        />
      </div>
    </div>
  )
}

export default ProjectCard
