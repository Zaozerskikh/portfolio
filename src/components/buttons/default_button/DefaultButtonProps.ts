import {DefaultButtonColor} from "../../../constants/DefaultButtonColor";
import {ButtonIcon} from "./DefaultButton";
import React from "react";

export interface DefaultButtonProps {
  color: DefaultButtonColor,
  text?: string,
  children?: React.ReactNode,
  onClickAction: () => void;
  buttonIcon?: ButtonIcon;
}
