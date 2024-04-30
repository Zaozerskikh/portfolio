import {DefaultButtonColor} from "./DefaultButtonColor";
import React from "react";
import {DefaultButtonIcon} from "./DefaultButtonIcon";

export interface DefaultButtonProps {
  color: DefaultButtonColor,
  text?: string,
  children?: React.ReactNode,
  onClickAction: () => void;
  buttonIcon?: DefaultButtonIcon;
}
