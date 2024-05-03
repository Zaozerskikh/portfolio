import {GA4_ENABLED} from "../env/EnvromentVariablesResolver";
import ReactGA from "react-ga4";
import {firebaseConfig} from "./FirebaseConfig";

export const setupGA4 = () => {
  if (GA4_ENABLED) {
    ReactGA.initialize(firebaseConfig.measurementId, {
      gaOptions: {
        debug_mode: false,
      },
      gtagOptions: {
        debug_mode: false,
      },
    });
  }
}
