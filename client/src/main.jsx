import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { Provider } from "react-redux";
import store from "./redux/store/store";

import idioma_es from "./translations/es/global.json";
import idioma_en from "./translations/en/global.json";

i18next.init({
  interpolation: { escapeValue: false }, // Sirve para que no se escape el html en los textos de los json
  lng: "es", // Idioma por defecto
  resources: {
    es: {
      global: idioma_es,
    },
    en: {
      global: idioma_en,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);
