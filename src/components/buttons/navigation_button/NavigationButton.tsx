import DefaultButton from "../default_button/DefaultButton";
import {NavigationButtonProps} from "./NavigationButtonProps";
import React, {useMemo} from "react";
import {DefaultButtonColor} from "../default_button/DefaultButtonColor";
import {NavigationButtonType} from "./NavigationButtonType";

const NavigationButton: React.FC<NavigationButtonProps> = ({ type, onClickAction}) => {
  const resolvedIcon = useMemo(() => {
    return (
      type === NavigationButtonType.FORWARD ? (
        <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.4 2L25 11.6002M25 11.6002L15.4 21.2002M25 11.6002H1" stroke="#22272F" strokeWidth="2" strokeLinecap="square"/>
        </svg>
      ) : (
        <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6 21.2002L2 11.6M2 11.6L11.6 2.00001M2 11.6L26 11.6" stroke="#22272F" strokeWidth="2" strokeLinecap="square"/>
        </svg>
      )
    )
  }, [type]);

  return(
    <DefaultButton
      children={resolvedIcon}
      color={DefaultButtonColor.GRAY}
      onClickAction={onClickAction}
    />
  )
}

export default NavigationButton
