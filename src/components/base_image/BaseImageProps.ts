import {CSSProp} from "styled-components"

export interface BaseImageProps {
  src: string;
  alt: string;
  additionalWrapperStyles?: CSSProp;
  additionalImageStyles?: CSSProp;
  onClick?: () => void;
}
