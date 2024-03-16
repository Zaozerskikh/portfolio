import React, {useState} from "react";
import './ServiceDescription.css'
import '../../../assets/styles/fonts.css'
import '../../../assets/styles/animation_durations.css'
import {ColorTheme} from "../../../constants/ColorTheme";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "../../../constants/MediaQueries";
import InclinedBoop from "../../about_page/avatar/InclinedBoop";
import {useAppSelector} from "../../../redux/Hooks";

interface ServiceDescriptionProps {
  boopTrigger: boolean;
  text: string;
  icon: React.ReactNode;
}

const ServiceDescription: React.FC<ServiceDescriptionProps> = ({ boopTrigger, text, icon}) => {
  const currTheme = useAppSelector(state => state.colorTheme)

  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})
  const isTouchable = useMediaQuery({ query: MediaQueries.TOUCHABLE });
  const isTablet = useMediaQuery({ query: MediaQueries.TABLET})
  const [hoverBoopTrigger, setHoverBoopTrigger] = useState(false)

  return(
    <div className={`service-description ${(isTablet || isDesktop) && 'desktop'}`}>
      <div className={`boop-container ${(isDesktop || isTablet) && 'desktop'}`}>
        <div
          className={`boop-wrapper ${isDesktop ? 'desktop' : 'mobile'} ${hoverBoopTrigger && 'hovered'}`}
          onMouseEnter={() => {
            if (!isTouchable) {
              setHoverBoopTrigger(true)
            }
          }}
          onMouseLeave={() => setHoverBoopTrigger(false)}
        >
          <InclinedBoop
            tension={400}
            friction={5}
            rotation={15}
            externalTrigger={boopTrigger}
            rotateOnClick={true}
            frictionOnClick={6}
            tensionOnClick={50}
          >
            {icon}
          </InclinedBoop >
        </div>
      </div>
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
