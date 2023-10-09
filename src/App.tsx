import React, {useEffect} from "react";
import {RoutePaths} from "./routes/RoutePaths";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import HomePage from "./pages/home_page/HomePage";
import './assets/colors.css'
import './index.css'
import './App.css'
import './assets/animation_durations.css'
import Header from "./components/header/Header";
import BurgerMenu from "./components/burger_menu/BurgerMenu";
import Footer from "./components/footer/Footer";
import {useSelector} from "react-redux";
import {RootState} from "./redux/ReduxStore";
import {ColorTheme} from "./redux/color_theme_reducer/ColorTheme";
import ServicesPage from "./pages/services_page/ServicesPage";

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
      <Header/>
      <BurgerMenu/>
      <div className="main-content-wrapper">
        <Routes>
          <Route path="/" element={<Navigate to={RoutePaths.HOME} />} />
          <Route path="/zaozerskikh" element={<Navigate to={RoutePaths.HOME} />} />
          <Route path={RoutePaths.HOME} element={<HomePage/>} />
          <Route path={RoutePaths.SERVICES} element={<ServicesPage />} />
          <Route path="*" element={<Navigate to={RoutePaths.NOT_FOUND} />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
