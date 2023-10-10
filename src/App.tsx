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
import {RootState} from "./redux/ReduxStore";
import {ColorTheme} from "./constants/ColorTheme";
import ServicesPage from "./pages/services_page/ServicesPage";
import NotFoundPage from "./pages/not_found_page/NotFoundPage";
import AboutPage from "./pages/about_page/AboutPage";
import DataFetcher from "./components/data_fetcher/dataFetcher";
import ProjectDetailedPage from "./pages/project_detailed_page/ProjectDetailedPage";

const App: React.FC = () => {
  const isBurgerOpened = useSelector((state: RootState) => state.burgerMenu.isOpened)
  const currTheme = useSelector((state: RootState) => state.colorTheme.colorTheme)
  const location = useLocation()

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
      <DataFetcher/>
      <Header/>
      <BurgerMenu/>
      <div className="main-content-wrapper">
        <Routes>
          <Route path="/" element={<Navigate to={RoutePaths.HOME} />} />
          <Route path="/zaozerskikh" element={<Navigate to={RoutePaths.HOME} />} />
          <Route path={RoutePaths.HOME} element={<HomePage />} />
          <Route path={RoutePaths.PROJECT_DETAILED} element={<ProjectDetailedPage />} />
          <Route path={RoutePaths.SERVICES} element={<ServicesPage />} />
          <Route path={RoutePaths.ABOUT} element={<AboutPage />} />
          <Route path={RoutePaths.NOT_FOUND} element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to={RoutePaths.NOT_FOUND} />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
