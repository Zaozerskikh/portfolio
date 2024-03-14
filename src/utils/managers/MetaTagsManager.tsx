import React, {useMemo} from "react";
import {Helmet} from "react-helmet-async";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {Lang} from "../../constants/Lang";
import {RootStoreState} from "../../redux/ReduxStore";
import {RoutePaths} from "../../constants/RoutePaths";

const MetaTagsManager: React.FC = () => {
  const location = useLocation()
  const currLang = useSelector((state: RootStoreState) => state.lang)

  const metaTags = useMemo<{ title: string, description: string }>(() => {
    switch (location?.pathname) {
      case RoutePaths.ABOUT:
        return currLang === Lang.RUS
          ? { title: 'Обо мне — Сергей Заозерских', description: 'Обо мне — Сергей Заозерских' }
          : { title: 'About — Serg Zaozerskikh', description: 'About — Serg Zaozerskikh' }
      case RoutePaths.SERVICES:
        return currLang === Lang.RUS
          ? { title: 'Услуги — Сергей Заозерских', description: 'Услуги — Сергей Заозерских' }
          : { title: 'Services — Serg Zaozerskikh', description: 'Services — Serg Zaozerskikh' }
    }

    return currLang === Lang.RUS
      ? { title: 'Сергей Заозерских - проекты', description: 'Сергей Заозерских - проекты' }
      : { title: 'Serg Zaozerskikh - projects', description: 'Serg Zaozerskikh - projects' }
  }, [location?.pathname, currLang]);

  return(
    <Helmet>
      <html lang={currLang === Lang.RUS ? 'ru' : 'en'} />
      <title>{metaTags?.title}</title>
      <meta name="description" content={metaTags?.description} data-rh={true}/>
    </Helmet>
  )
}

export default MetaTagsManager