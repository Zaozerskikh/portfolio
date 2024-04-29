import {NavigationButtonType} from "./NavigationButtonType";

export interface NavigationButtonProps {
  onClickAction: () => void;
  type: NavigationButtonType;
}
