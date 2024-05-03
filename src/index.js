import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import reduxStore from "./redux/ReduxStore";
import {BrowserRouter as Router} from 'react-router-dom';
import './assets/custom_fonts/RG-StandardMedium-500.ttf'
import './assets/custom_fonts/CONSOLA.TTF'
import {HelmetProvider} from "react-helmet-async";
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n/config/i18n";
import {setupGA4} from "./ga4/GA4setup";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <I18nextProvider i18n={i18n}>
    <HelmetProvider>
      <Provider store={reduxStore}>
        <Router>
          <App />
        </Router>
      </Provider>
    </HelmetProvider>
  </I18nextProvider>
);

setupGA4()
