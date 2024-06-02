import {ImgLoaderType} from "./ImgLoaderType";
import {CSSProp} from "styled-components";

export interface ImgLoaderProps {
  type: ImgLoaderType;
  additionalStyles?: CSSProp;
}
