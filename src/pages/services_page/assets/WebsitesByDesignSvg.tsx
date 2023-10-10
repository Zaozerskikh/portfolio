import React from "react";
import {ServiceIconAssetProps} from "./ServiceIconAssetProps";
import {ColorTheme} from "../../../constants/ColorTheme";

const WebsitesByDesignSvg: React.FC<ServiceIconAssetProps> = ({ colorTheme}) => {
  return(
    colorTheme === ColorTheme.DARK ? (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6.32611" y="10.5" width="35.3478" height="21" rx="1.5" fill="#2F2F2F" stroke="#8A8A8A"/>
        <path d="M24.3188 21.4785C24.3188 20.802 24.5876 20.1532 25.0659 19.6748C25.5443 19.1965 26.1931 18.9277 26.8696 18.9277C27.5461 18.9277 28.1949 19.1965 28.6732 19.6748C29.1516 20.1532 29.4203 20.802 29.4203 21.4785C29.4203 22.155 29.1516 22.8037 28.6732 23.2821C28.1949 23.7604 27.5461 24.0292 26.8696 24.0292C26.1931 24.0292 25.5443 23.7604 25.0659 23.2821C24.5876 22.8037 24.3188 22.155 24.3188 21.4785V21.4785Z" stroke="#8A8A8A" strokeWidth="0.982456"/>
        <path d="M19.2174 26.58C19.2174 25.9035 19.4861 25.2547 19.9645 24.7764C20.4429 24.298 21.0916 24.0293 21.7681 24.0293H24.3189V26.58C24.3189 27.2565 24.0501 27.9053 23.5718 28.3837C23.0934 28.862 22.4446 29.1307 21.7681 29.1307C21.0916 29.1307 20.4429 28.862 19.9645 28.3837C19.4861 27.9053 19.2174 27.2565 19.2174 26.58Z" fill="#B1FFE3" stroke="#8A8A8A" strokeWidth="0.982456"/>
        <path d="M24.3188 13.8262V18.9276H26.8696C27.5461 18.9276 28.1949 18.6589 28.6732 18.1805C29.1516 17.7022 29.4203 17.0534 29.4203 16.3769C29.4203 15.7004 29.1516 15.0516 28.6732 14.5733C28.1949 14.0949 27.5461 13.8262 26.8696 13.8262H24.3188Z" fill="#C176E6" stroke="#8A8A8A" strokeWidth="0.982456"/>
        <path d="M19.2174 16.3769C19.2174 17.0534 19.4861 17.7022 19.9645 18.1805C20.4429 18.6589 21.0916 18.9276 21.7681 18.9276H24.3189V13.8262H21.7681C21.0916 13.8262 20.4429 14.0949 19.9645 14.5733C19.4861 15.0516 19.2174 15.7004 19.2174 16.3769Z" fill="#F98B78" stroke="#8A8A8A" strokeWidth="0.982456"/>
        <path d="M19.2174 21.4785C19.2174 22.155 19.4861 22.8037 19.9645 23.2821C20.4429 23.7604 21.0916 24.0292 21.7681 24.0292H24.3189V18.9277H21.7681C21.0916 18.9277 20.4429 19.1965 19.9645 19.6748C19.4861 20.1532 19.2174 20.802 19.2174 21.4785Z" fill="#EEC9FF" stroke="#8A8A8A" strokeWidth="0.982456"/>
        <path d="M6.78261 31.0435L3.70711 34.119C3.07714 34.7489 3.52331 35.8261 4.41421 35.8261H43.5858C44.4767 35.8261 44.9229 34.7489 44.2929 34.119L41.2174 31.0435" stroke="#8A8A8A"/>
      </svg>
    ) : (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6.32611" y="10.5" width="35.3478" height="21" rx="1.5" fill="#EFEFEF" stroke="black"/>
        <path d="M24.3188 21.4785C24.3188 20.802 24.5876 20.1532 25.0659 19.6748C25.5443 19.1965 26.1931 18.9277 26.8696 18.9277C27.5461 18.9277 28.1949 19.1965 28.6732 19.6748C29.1516 20.1532 29.4203 20.802 29.4203 21.4785C29.4203 22.155 29.1516 22.8037 28.6732 23.2821C28.1949 23.7604 27.5461 24.0292 26.8696 24.0292C26.1931 24.0292 25.5443 23.7604 25.0659 23.2821C24.5876 22.8037 24.3188 22.155 24.3188 21.4785V21.4785Z" stroke="#1E1E1E" strokeWidth="0.982456"/>
        <path d="M19.2174 26.5798C19.2174 25.9033 19.4861 25.2545 19.9645 24.7761C20.4429 24.2978 21.0916 24.0291 21.7681 24.0291H24.3189V26.5798C24.3189 27.2563 24.0501 27.9051 23.5718 28.3834C23.0934 28.8618 22.4446 29.1305 21.7681 29.1305C21.0916 29.1305 20.4429 28.8618 19.9645 28.3834C19.4861 27.9051 19.2174 27.2563 19.2174 26.5798Z" fill="#B1FFE3" stroke="#1E1E1E" strokeWidth="0.982456"/>
        <path d="M24.3188 13.8262V18.9276H26.8696C27.5461 18.9276 28.1949 18.6589 28.6732 18.1805C29.1516 17.7022 29.4203 17.0534 29.4203 16.3769C29.4203 15.7004 29.1516 15.0516 28.6732 14.5733C28.1949 14.0949 27.5461 13.8262 26.8696 13.8262H24.3188Z" fill="#C176E6" stroke="#1E1E1E" strokeWidth="0.982456"/>
        <path d="M19.2174 16.3769C19.2174 17.0534 19.4861 17.7022 19.9645 18.1805C20.4429 18.6589 21.0916 18.9276 21.7681 18.9276H24.3189V13.8262H21.7681C21.0916 13.8262 20.4429 14.0949 19.9645 14.5733C19.4861 15.0516 19.2174 15.7004 19.2174 16.3769Z" fill="#F98B78" stroke="#1E1E1E" strokeWidth="0.982456"/>
        <path d="M19.2174 21.4785C19.2174 22.155 19.4861 22.8037 19.9645 23.2821C20.4429 23.7604 21.0916 24.0292 21.7681 24.0292H24.3189V18.9277H21.7681C21.0916 18.9277 20.4429 19.1965 19.9645 19.6748C19.4861 20.1532 19.2174 20.802 19.2174 21.4785Z" fill="#EEC9FF" stroke="#1E1E1E" strokeWidth="0.982456"/>
        <path d="M6.78261 31.0435L3.70711 34.119C3.07714 34.7489 3.52331 35.8261 4.41421 35.8261H43.5858C44.4767 35.8261 44.9229 34.7489 44.2929 34.119L41.2174 31.0435" stroke="black"/>
      </svg>
    )
  )
}

export default WebsitesByDesignSvg
