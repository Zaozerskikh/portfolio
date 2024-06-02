import React, {useEffect, useState} from "react";
import {ImgLoaderProps} from "./ImgLoaderProps";
import styled, {CSSProp} from "styled-components";
import {ImgLoaderType} from "./ImgLoaderType";
import {LoaderSquareColor} from "./LoaderSquareColor";
import {loaderColorStates} from "./LoaderColorState";

const REFRESH_TIMEOUT_MS = 350
const SQUARE_SIZE_DESKTOP = 48
const SQUARE_SIZE_MOBILE = 32

const StyledLoaderWrapper = styled.div<{ $type: ImgLoaderType, $styles?: CSSProp }>`
  ${props => props?.$styles};
  display: grid;
  grid-template-columns: ${props => props?.$type === ImgLoaderType.DESKTOP 
          ? `${SQUARE_SIZE_DESKTOP}px ${SQUARE_SIZE_DESKTOP}px` 
          : `${SQUARE_SIZE_MOBILE}px ${SQUARE_SIZE_MOBILE}px`
  };
`

const StyledLoaderSquare = styled.div<{ $color: LoaderSquareColor }>`
  background-color: ${props => props?.$color === LoaderSquareColor.BLUE 
          ? 'var(--buttons-blue-default, #81C7F8)' 
          : props?.$color === LoaderSquareColor.VIOLET 
                  ? 'var(--buttons-violet-default, #EEC9FF)' 
                  : 'var(--gray-light, #EFEFEF)'
  };
  aspect-ratio: 1;
  width: 100%;
  display: flex;
`

const ImgLoader: React.FC<ImgLoaderProps> = ({ type, additionalStyles}) => {
  const [currStateIdx, setCurrStateIdx] = useState(0)

  useEffect(() => {
    const iId = setInterval(() =>
      setCurrStateIdx(prev => (prev + 1) % 8),
      REFRESH_TIMEOUT_MS
    )

    return () => clearInterval(iId)
  }, []);

  return(
    <StyledLoaderWrapper $type={type} $styles={additionalStyles}>
      <StyledLoaderSquare $color={loaderColorStates[currStateIdx]["1"]} />
      <StyledLoaderSquare $color={loaderColorStates[currStateIdx]["2"]} />
      <StyledLoaderSquare $color={loaderColorStates[currStateIdx]["3"]} />
      <StyledLoaderSquare $color={loaderColorStates[currStateIdx]["4"]} />
    </StyledLoaderWrapper>
  )
}

export default ImgLoader
