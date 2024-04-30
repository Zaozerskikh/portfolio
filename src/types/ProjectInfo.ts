import {TagType} from "./TagType";
import {ProjectType} from "./ProjectType";

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
  detailedImageGrids?: {
    rows: {
      im1: string;
      im2: string;
    }[]
  }[];
  websiteLink?: string;
  googlePlayLink?: string;
  appStoreLink?: string;
}
