import React, {useState} from "react";
import {BaseImageProps} from "./BaseImageProps";
import styled, {CSSProp, StyledObject} from "styled-components";
import ImgLoader from "./img_loader/ImgLoader";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../constants/MediaQueries";
import {ImgLoaderType} from "./img_loader/ImgLoaderType";

const BaseImageWrapper = styled.div<{ $styles: CSSProp }>`
  position: relative;
  ${props => props?.$styles};
  width: 100%;
`

const BaseImg = styled.img<{ $styles?: CSSProp }>`
  position: absolute;
  ${props => props?.$styles};
  width: 100%;
`

const loaderStyles: CSSProp = {
  position: "absolute",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}

const BaseImage: React.FC<BaseImageProps> = (props) => {
  const {
    src,
    alt,
    additionalImageStyles,
    additionalWrapperStyles,
    onClick
  } = props

  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})
  const [isLoaded, setIsLoaded] = useState(false)

  return(
    <BaseImageWrapper
      $styles={additionalWrapperStyles}
      onClick={onClick}
    >
      <ImgLoader
        type={isDesktop ? ImgLoaderType.DESKTOP : ImgLoaderType.MOBILE }
        additionalStyles={{
          ...loaderStyles,
          opacity: isLoaded ? 0 : 1
        }}
      />
      <BaseImg
        $styles={{
          ...additionalImageStyles as StyledObject,
          opacity: isLoaded ? 1 : 0
        }}
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
      />
    </BaseImageWrapper>
  )
}

export default BaseImage
