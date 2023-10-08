import React from "react";
import {RoutePaths} from "./routes/RoutePaths";
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home_page/HomePage";
import './assets/colors.css'
import Header from "./components/header/Header";

const App: React.FC = () => {
  return (
    <div className="default">
      <Header/>
      <Routes>
        <Route path="/" element={<Navigate to={RoutePaths.HOME} />} />
        <Route path="/zaozerskikh" element={<Navigate to={RoutePaths.HOME} />} />
        <Route path={RoutePaths.HOME} element={<HomePage/>} />
        <Route path="*" element={<Navigate to={RoutePaths.NOT_FOUND} />} />
      </Routes>
    </div>
  );
}

export default App;
