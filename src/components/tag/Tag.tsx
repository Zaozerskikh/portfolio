import {TagType} from "../../constants/TagType";
import React from "react";
import './Tag.css'
import '../../assets/styles/fonts.css'

export interface TagProps {
  type: TagType;
}

const Tag: React.FC<TagProps> = ({ type}) => {
  return(
    <div className={`tag-wrapper ${type.toLowerCase().replaceAll(' ', '_')}`}>
      <div className="mobile-tag-text">{type}</div>
    </div>
  )
}

export default Tag
