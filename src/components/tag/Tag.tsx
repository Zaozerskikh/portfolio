import {TagType} from "../../constants/TagType";
import React from "react";
import './Tag.css'
import '../../assets/styles/fonts.css'
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../constants/MediaQueries";

export interface TagProps {
  type: TagType;
}

const Tag: React.FC<TagProps> = ({ type}) => {
  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})

  return(
    <div className={`tag-wrapper ${isDesktop && 'desktop'} ${type.toLowerCase().replaceAll(' ', '_')}`}>
      <div className="mobile-tag-text">{type}</div>
    </div>
  )
}

export default Tag
