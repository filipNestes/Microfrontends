import React, { lazy, Suspense } from "react";
import "./main-app.scss";
import LayoutTemplateFallback from "./components/LayoutTemplateFallback";
import menuItems from "./layout/menuItems.jsx";
import Routes from "./layout/Routes.js";

const LayoutTemplate = lazy(() =>
  import("reactMf/LayoutTemplate").catch(() => ({
    default: LayoutTemplateFallback,
  }))
);

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="main-app">
        <div className="title">
          <div className="img" />
          <p>React Main Application</p>
        </div>
      </div>
      <LayoutTemplate menuItems={menuItems}>
        <Routes />
      </LayoutTemplate>
    </Suspense>
  );
}
