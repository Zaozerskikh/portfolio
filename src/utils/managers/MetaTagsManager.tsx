import React, {useMemo} from "react";
import {Helmet} from "react-helmet-async";
import {useLocation} from "react-router-dom";
import {Lang} from "../../constants/Lang";
import {RoutePaths} from "../../constants/RoutePaths";
import {useTranslation} from "react-i18next";

const MetaTagsManager: React.FC = () => {
  const location = useLocation()
  const { i18n, t } = useTranslation()
  const currLang = i18n?.language as Lang

  const metaTags = useMemo<{ title: string, description: string }>(() => {
    switch (location?.pathname) {
      case RoutePaths.ABOUT:
        return {
          title: t("meta.about.title"),
          description: t("meta.about.description")
        }
      case RoutePaths.SERVICES:
        return {
          title: t("meta.services.title"),
          description: t("meta.services.description")
        }
    }

    return {
      title: t("meta.default.title"),
      description: t("meta.default.description")
    }
  }, [location?.pathname, t]);

  return(
    <Helmet>
      <html lang={currLang === Lang.RUS ? 'ru' : 'en'} />
      <title>{metaTags?.title}</title>
      <meta name="description" content={metaTags?.description} data-rh={true}/>
    </Helmet>
  )
}

export default MetaTagsManager
