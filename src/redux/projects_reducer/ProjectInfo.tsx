import {TagType} from "../../constants/TagType";
import {ProjectType} from "../../constants/ProjectType";

export interface ShortProjectInfo {
  id: string;
  name: string;
  previewImage: string;
  shortDescriptionRUS: string;
  shortDescriptionENG: string;
  tags: TagType[]
}

export interface ProjectInfo extends ShortProjectInfo {
  projectType: ProjectType;
  fullDescriptionRUS: string;
  fullDescriptionENG: string;
  detailedSharedImages: string[];
  detailedMobileImages?: string[];
  detailedDesktopImages?: string[]
  link: string;
}
