import {useEffect} from "react";
import {GA4_ENABLED} from "../env/EnvromentVariablesResolver";
import ReactGA from "react-ga4";

const useFullscreenModalGA4 = (isFullscreenOpened: boolean): void => {
  useEffect(() => {
    if (isFullscreenOpened && GA4_ENABLED) {
      ReactGA.event({
        category: 'FullscreenModal',
        action: 'fullscreen_modal_opened',
      });
    }
  }, [isFullscreenOpened]);
};

export default useFullscreenModalGA4;
