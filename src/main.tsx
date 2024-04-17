import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CountryContextProvider } from "./context/countryContext.tsx";

const helmetContext = {};
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <CountryContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CountryContextProvider>
    </HelmetProvider>
  </React.StrictMode>
);
