import {ImageGridProps} from "./ImageGridProps";
import React, {useRef} from "react";
import styled, {CSSProp} from "styled-components";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../../constants/MediaQueries";
import BaseImage from "../../../components/base_image/BaseImage";

const StyledImageGrid = styled.div<{ $isMobile: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props?.$isMobile ? 4 : 12}px;
  max-width: 1264px;
`

const imageAdditionalStyle: CSSProp = {
  width: '100%',
  height: "auto",
  objectFit: 'cover',
  aspectRatio: '162 / 97',
  borderRadius: 4,
}

const containerAdditionalStyle: CSSProp = {
  width: '100%',
  height: "auto",
  aspectRatio: '162 / 97',
}

const ImageGrid: React.FC<ImageGridProps> = ({ pictures, onPictureClick }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery({ query: MediaQueries.NORMAL_MOBILE })
  const isTouchable = useMediaQuery({ query: MediaQueries.TOUCHABLE });

  return(
    <StyledImageGrid
      $isMobile={isMobile}
      ref={ref}
    >
      {pictures?.map((p, i) =>
        <BaseImage
          additionalImageStyles={{...imageAdditionalStyle, cursor: !isTouchable ? 'pointer' : undefined }}
          additionalWrapperStyles={containerAdditionalStyle}
          src={p}
          key={i}
          alt={'img'}
          onClick={() => {
            const grid = ref?.current?.getBoundingClientRect()
            if (grid) {
              onPictureClick(i, grid.y, grid.height)
            }
          }}
        />
      )}
    </StyledImageGrid>
  )
}

export default ImageGrid
