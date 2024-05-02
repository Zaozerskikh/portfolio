import {stagger, useAnimate} from "framer-motion";
import {useEffect} from "react";

const stagedDigits = stagger(0.1, { startDelay: 0 });

const useLogoAnimation = (isDigitsVisible: boolean) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".digit-letter",
      isDigitsVisible
        ? { opacity: 0 }
        : { opacity: 1 },
      {
        duration: 0.2,
        delay: stagedDigits,
      }
    );

    animate(
      ".digit",
      isDigitsVisible
        ? { y: 0 }
        : { y: -100 },
      {
        duration: 0.2,
        delay: stagedDigits,
      },
    );
  }, [isDigitsVisible]);

  return scope;
}

export default useLogoAnimation
