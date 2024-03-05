import React, {useEffect} from "react";
import {RoutePaths} from "./constants/RoutePaths";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import HomePage from "./pages/home_page/HomePage";
import './assets/styles/colors.css'
import './index.css'
import './App.css'
import './assets/styles/animation_durations.css'
import Header from "./components/header/Header";
import BurgerMenu from "./components/burger_menu/BurgerMenu";
import Footer from "./components/footer/Footer";
import {useSelector} from "react-redux";
import {ColorTheme} from "./constants/ColorTheme";
import ServicesPage from "./pages/services_page/ServicesPage";
import NotFoundPage from "./pages/not_found_page/NotFoundPage";
import AboutPage from "./pages/about_page/AboutPage";
import ProjectDetailedPage from "./pages/project_detailed_page/ProjectDetailedPage";
import {useMediaQuery} from "react-responsive";
import {MediaQueries} from "./constants/MediaQueries";
import MetaTagsManager from "./utils/managers/MetaTagsManager";
import MetaThemeManager from "./utils/managers/MetaThemeManager";
import {RootStoreState} from "./redux/ReduxStore";

const App: React.FC = () => {
  const isBurgerOpened = useSelector((state: RootStoreState) => state.burger.isOpened)
  const currTheme = useSelector((state: RootStoreState) => state.colorTheme)
  const location = useLocation()

  const isTablet = useMediaQuery({ query: MediaQueries.TABLET})
  const isDesktop = useMediaQuery({ query: MediaQueries.DESKTOP})

  useEffect(() => {
    window.scroll({top: 0})
  }, [location]);

  useEffect(() => {
    if (isBurgerOpened) {
      document.body.classList.add('hidden');
    } else {
      document.body.classList.remove('hidden');
    }
  }, [isBurgerOpened]);

  return (
    <div className={`app ${currTheme === ColorTheme.DARK ? 'dark' : 'white'} animation-02s-all`}>
      <Header/>
      <BurgerMenu/>
      <MetaThemeManager/>
      <MetaTagsManager/>
      <div className={`main-content-wrapper animation-02s-all ${isDesktop ? 'desktop' : isTablet ? 'tablet' : 'mobile'}`}>
        <Routes>
          <Route path="/" element={<Navigate to={RoutePaths.HOME} />} />
          <Route path={RoutePaths.HOME} element={<HomePage />} />
          <Route path={RoutePaths.PROJECT_DETAILED} element={<ProjectDetailedPage />} />
          <Route path={RoutePaths.SERVICES} element={<ServicesPage />} />
          <Route path={RoutePaths.ABOUT} element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
