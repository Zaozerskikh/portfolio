import {useEffect} from "react";
import {useAppSelector} from "../redux/Hooks";
import ReactGA from "react-ga4";
import {GA4_ENABLED} from "../env/EnvromentVariablesResolver";

const useBurgerGA4 = (): void => {
  const isBurgerOpened = useAppSelector(state => state.burger.isOpened)

  useEffect(() => {
    if (isBurgerOpened && GA4_ENABLED) {
      ReactGA.event({
        category: 'BurgerMenu',
        action: 'burger_menu_opened',
      });
    }
  }, [isBurgerOpened]);
};

export default useBurgerGA4;
