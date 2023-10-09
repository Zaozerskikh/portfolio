import React from "react";
import {ServiceIconAssetProps} from "./ServiceIconAssetProps";
import {ColorTheme} from "../../../redux/color_theme_reducer/ColorTheme";

const FullstackSvg: React.FC<ServiceIconAssetProps> = ({ colorTheme }) => {
  return(
    colorTheme === ColorTheme.DARK ? (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 17C7.5 11.7533 11.7533 7.5 17 7.5H31C36.2467 7.5 40.5 11.7533 40.5 17V39C40.5 39.8284 39.8284 40.5 39 40.5H17C11.7533 40.5 7.5 36.2467 7.5 31V17Z" fill="#2F2F2F" stroke="#8A8A8A"/>
        <rect width="25.5" height="25.5" transform="translate(11.25 11.25)" fill="#2F2F2F"/>
        <path d="M15.5 26.125C15.5 30.9545 19.2188 34.625 24 34.625C28.7812 34.625 32.5 30.9545 32.5 26.125C32.5 17.4318 24 13.375 24 13.375C24 17.625 25.0625 24 21.875 24C19.75 24 19.2188 21.875 19.2188 18.1562C19.2188 18.1562 15.5 21.2955 15.5 26.125Z" fill="#FFB178"/>
        <path d="M15.5 26.125C15.5 30.9545 19.2188 34.625 24 34.625C28.7812 34.625 32.5 30.9545 32.5 26.125C32.5 17.4318 24 13.375 24 13.375C24 17.625 25.0625 24 21.875 24C19.75 24 19.2188 21.875 19.2188 18.1562C19.2188 18.1562 15.5 21.2955 15.5 26.125Z" stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) : (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 17C7.5 11.7533 11.7533 7.5 17 7.5H31C36.2467 7.5 40.5 11.7533 40.5 17V39C40.5 39.8284 39.8284 40.5 39 40.5H17C11.7533 40.5 7.5 36.2467 7.5 31V17Z" fill="#EFEFEF" stroke="black"/>
        <path d="M15.5 26.125C15.5 30.9545 19.2188 34.625 24 34.625C28.7812 34.625 32.5 30.9545 32.5 26.125C32.5 17.4318 24 13.375 24 13.375C24 17.625 25.0625 24 21.875 24C19.75 24 19.2188 21.875 19.2188 18.1562C19.2188 18.1562 15.5 21.2955 15.5 26.125Z" fill="#FFB178"/>
        <path d="M15.5 26.125C15.5 30.9545 19.2188 34.625 24 34.625C28.7812 34.625 32.5 30.9545 32.5 26.125C32.5 17.4318 24 13.375 24 13.375C24 17.625 25.0625 24 21.875 24C19.75 24 19.2188 21.875 19.2188 18.1562C19.2188 18.1562 15.5 21.2955 15.5 26.125Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  )
}

export default FullstackSvg
