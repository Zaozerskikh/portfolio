import React, {useMemo} from "react";
import {Helmet} from "react-helmet-async";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {Lang} from "../../constants/Lang";
import {RootStoreState} from "../../redux/ReduxStore";

const MetaTagsManager: React.FC = () => {
  const location = useLocation()
  const currLang = useSelector((state: RootStoreState) => state.lang)

  const metaTags = useMemo<{ title: string, description: string }>(() => {
    // TODO - implement this for better SEO

    return { title: 'Serg Zaozerskikh', description: 'Zaozerskikh portfoli000 website' }
  }, [location?.pathname]);

  return(
    <Helmet>
      <html lang={currLang === Lang.RUS ? 'ru' : 'en'} />
      <title>{metaTags?.title}</title>
      <meta name="description" content={metaTags?.description} data-rh={true}/>
    </Helmet>
  )
}

export default MetaTagsManager