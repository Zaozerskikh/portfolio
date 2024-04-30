import React, {useEffect} from "react";
import {RoutePaths} from "./constants/RoutePaths";
import {Navigate, useLocation, useRoutes} from "react-router-dom";
import HomePage from "./pages/home_page/HomePage";
import './assets/styles/colors.css'
import './index.css'
import './assets/styles/animation_durations.css'
import Header from "./components/structural/header/Header";
import Footer from "./components/structural/footer/Footer";
import {ColorTheme} from "./constants/ColorTheme";
import ServicesPage from "./pages/services_page/ServicesPage";
import NotFoundPage from "./pages/not_found_page/NotFoundPage";
import AboutPage from "./pages/about_page/AboutPage";
import ProjectDetailedPage from "./pages/project_detailed_page/ProjectDetailedPage";
import MetaTagsManager from "./utils/managers/MetaTagsManager";
import MetaThemeManager from "./utils/managers/MetaThemeManager";
import {useAppSelector} from "./redux/Hooks";
import MainWrapper from "./components/structural/main_wrapper/MainWrapper";
import styled from "styled-components";
import {AnimatePresence} from "framer-motion";

const StyledApp = styled.div<{ $colorTheme: ColorTheme }>`
  position: relative;
  background-color: ${props => props?.$colorTheme === ColorTheme.DARK 
          ? 'var(--dark-theme-bg, #1E1E1E)'
          : 'white'
  };
  transition: 0.2s background-color ease-in-out;
`

const App: React.FC = () => {
  const currTheme = useAppSelector(state => state.colorTheme)
  const location = useLocation()

  useEffect(() => {
    window.scroll({top: 0})
  }, [location]);

  const page = useRoutes([
    {
      path: "/",
      element: <Navigate to={RoutePaths.HOME} />
    },
    {
      path: RoutePaths.HOME,
      element: <HomePage />
    },
    {
      path: RoutePaths.PROJECT_DETAILED,
      element: <ProjectDetailedPage />
    },
    {
      path: RoutePaths.SERVICES,
      element: <ServicesPage />
    },
    {
      path: RoutePaths.ABOUT,
      element: <AboutPage />
    },
    {
      path: RoutePaths.NOT_FOUND,
      element: <NotFoundPage />
    },
    {
      path:'*',
      element: <NotFoundPage />
    }
  ]);

  return (
    <StyledApp $colorTheme={currTheme} id={'app'}>
      <Header/>
      <MetaThemeManager/>
      <MetaTagsManager/>
      <AnimatePresence mode={'wait'}>
        {React.cloneElement(
          <MainWrapper>
            {page}
          </MainWrapper>,
          { key: location.pathname }
        )}
      </AnimatePresence>
      <Footer/>
    </StyledApp>
  );
}

export default App;
