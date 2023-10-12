import React, {useState} from "react";
import './ServiceDescription.css'
import '../../../assets/styles/fonts.css'
import '../../../assets/styles/animation_durations.css'
import Boop from "../../../components/boop/Boop";
import {ColorTheme} from "../../../constants/ColorTheme";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/ReduxStore";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../../constants/MediaQueries";

interface ServiceDescriptionProps {
  boopTrigger: boolean;
  text: string;
  icon: React.ReactNode;
}
const ServiceDescription: React.FC<ServiceDescriptionProps> = ({ boopTrigger, text, icon}) => {
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)

  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})
  const isTouchable = useMediaQuery({ query: MediaQueries.TOUCHABLE });
  const isTablet = useMediaQuery({ query: MediaQueries.TABLET})
  const [hoverBoopTrigger, setHoverBoopTrigger] = useState(false)

  return(
    <div className={`service-description ${(isTablet || isDesktop) && 'desktop'}`}>
      <Boop tension={400} friction={5} rotation={10} externalTrigger={boopTrigger || (hoverBoopTrigger && !isTouchable)}>
        <div
          className="icon-wrapper"
          onMouseEnter={() => {
            if (!isTouchable) {
              setHoverBoopTrigger(true)
              setTimeout(() => setHoverBoopTrigger(false), 1000)
            }
          }}
        >
          {icon}
        </div>
      </Boop>
      <div className="text-wrapper">
        <div
          className={`main-text ${isDesktop && 'desktop'} ${(isTablet || isDesktop) && 'centered'} animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
          dangerouslySetInnerHTML={{ __html: text}}
        />
      </div>
    </div>
  )
}

export default ServiceDescription
