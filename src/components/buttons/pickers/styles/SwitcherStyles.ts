import styled from "styled-components";
import {ColorTheme} from "../../../../constants/ColorTheme";

export const StyledSwitcher = styled.button<{
  $colorTheme: ColorTheme,
  $picked: boolean,
  $transparent?: boolean,
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  transition: 0.2s all ease-in-out;
  
  &:hover {
    cursor: pointer;
  }
  
  ${props => props?.$colorTheme === ColorTheme.DARK || props?.$transparent
    ? 'background: transparent'
    : 'background: var(--buttons-white-default, #FFF)'
  };

  ${props => props?.$picked && (props?.$colorTheme === ColorTheme.DARK
    ? 'border: 1px solid var(--main-white, #FFF)'
    : 'border: 1px solid var(--main-black, #000)'
  )};
`
