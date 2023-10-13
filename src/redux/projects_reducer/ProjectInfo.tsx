import {TagType} from "../../constants/TagType";
import {ProjectType} from "../../constants/ProjectType";

export interface ShortProjectInfo {
  id: string;
  name: string;
  previewWhiteImage: string;
  previewDarkImage: string;
  shortDescriptionRUS: string;
  shortDescriptionENG: string;
  tags: TagType[]
}

export interface ProjectInfo extends ShortProjectInfo {
  projectType: ProjectType;
  fullDescriptionRUS: string;
  fullDescriptionENG: string;
  detailedWhiteImages: string[];
  detailedDarkImages: string[];
  link: string;
}
