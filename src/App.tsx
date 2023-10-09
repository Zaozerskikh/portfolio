import React, {useEffect} from "react";
import {RoutePaths} from "./routes/RoutePaths";
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home_page/HomePage";
import './assets/colors.css'
import './index.css'
import './App.css'
import Header from "./components/header/Header";
import BurgerMenu from "./components/burger_menu/BurgerMenu";
import Footer from "./components/footer/Footer";
import {useSelector} from "react-redux";
import {RootState} from "./redux/ReduxStore";

const App: React.FC = () => {
  const isBurgerOpened = useSelector((state: RootState) => state.burgerMenu.isOpened)

  useEffect(() => {
    if (isBurgerOpened) {
      document.body.classList.add('hidden');
    } else {
      document.body.classList.remove('hidden');
    }
  }, [isBurgerOpened]);

  return (
    <div className="app">
      <Header/>
      <BurgerMenu/>
      <div className="main-content-wrapper">
        <Routes>
          <Route path="/" element={<Navigate to={RoutePaths.HOME} />} />
          <Route path="/zaozerskikh" element={<Navigate to={RoutePaths.HOME} />} />
          <Route path={RoutePaths.HOME} element={<HomePage/>} />
          <Route path="*" element={<Navigate to={RoutePaths.NOT_FOUND} />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
