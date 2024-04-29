import {ImageGridProps} from "./ImageGridProps";
import React from "react";
import styled from "styled-components";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../../constants/MediaQueries";

const StyledImageGrid = styled.div<{ $isMobile: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props?.$isMobile ? 4 : 12}px;
  max-width: 1264px;
`

const StyledImage = styled.img<{ $touchable: boolean }>`
  height: auto;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 162 / 97;
  border-radius: 4px;
  &:hover {
    ${props => !props?.$touchable && 'cursor: pointer'};
  }
`

const ImageGrid: React.FC<ImageGridProps> = ({ pictures, onPictureClick}) => {
  const isMobile = useMediaQuery({ query: MediaQueries.NORMAL_MOBILE })
  const isTouchable = useMediaQuery({ query: MediaQueries.TOUCHABLE });

  return(
    <StyledImageGrid $isMobile={isMobile}>
      {pictures?.map((p, i) =>
        <StyledImage
          $touchable={isTouchable}
          src={p}
          key={i}
          alt={'img'}
          onClick={() => onPictureClick(i)}
        />
      )}
    </StyledImageGrid>
  )
}

export default ImageGrid
