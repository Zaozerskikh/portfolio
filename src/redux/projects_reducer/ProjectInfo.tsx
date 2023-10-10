import {TagType} from "../../constants/TagType";

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
  fullDescriptionRUS: string;
  fullDescriptionENG: string;
  detailedWhiteImages: string[];
  detailedDarkImages: string[];
  link: string;
}
