import React from "react";
import './ServiceDescription.css'
import '../../../assets/styles/fonts.css'
import '../../../assets/styles/animation_durations.css'
import Boop from "../../../components/boop/Boop";
import {ColorTheme} from "../../../constants/ColorTheme";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/ReduxStore";

interface ServiceDescriptionProps {
  boopTrigger: boolean;
  text: string;
  icon: React.ReactNode;
}
const ServiceDescription: React.FC<ServiceDescriptionProps> = ({ boopTrigger, text, icon}) => {
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)

  return(
    <div className="service-description">
      <Boop tension={400} friction={5} rotation={10} externalTrigger={boopTrigger}>
        {icon}
      </Boop>
      <div className="text-wrapper">
        <div
          className={`mobile-main-text animation-02s-all ${currTheme === ColorTheme.DARK ? 'white' : 'dark'}`}
          dangerouslySetInnerHTML={{ __html: text}}
        />
      </div>
    </div>
  )
}

export default ServiceDescription
