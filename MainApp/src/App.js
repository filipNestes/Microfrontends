import React, { lazy, Suspense } from "react";
import { GlobalProvider } from "./components/GlobalContext";
import LayoutTemplateFallback from "./components/LayoutTemplateFallback";
import "./main-app.scss";
import menuItems from "./layout/menuItems.jsx";
import Routes from "./layout/Routes.js";

const LayoutTemplate = lazy(() =>
  import("microfrontend/LayoutTemplate").catch(() => ({
    default: LayoutTemplateFallback,
  }))
);

export default function App() {
  return (
    <GlobalProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="main-app">
          <div className="title">
            <div className="img" />
            <p>Main Aplikácia v Reacte</p>
          </div>
        </div>
        <LayoutTemplate menuItems={menuItems}>
          <Routes />
        </LayoutTemplate>
      </Suspense>
    </GlobalProvider>
  );
}
