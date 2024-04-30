import React, { useState, lazy, Suspense } from "react";
import AngularMiniMicrofrontend from "./MiniAngularMicrofrontend";
import VueMiniMicrofrontend from "./MiniVueMicrofrontend";
import SvelteMiniMicrofrontend from "./MiniSvelteMicrofrontend";
import "./allExample.scss";

const MiniReactApp = lazy(() =>
  import("microfrontend/MiniReactApp").catch(() => ({
    default: () => <div>Ahoj</div>,
  }))
);

const MiniAppInput = lazy(() =>
  import("microfrontend/MiniAppInput").catch(() => ({
    default: () => <div>Ahoj</div>,
  }))
);

const AllExample = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="all-examples-title">All frameworks together</div>
      <MiniAppInput></MiniAppInput>
      <div className="all-examples-containers">
        <AngularMiniMicrofrontend>asd</AngularMiniMicrofrontend>
        <VueMiniMicrofrontend></VueMiniMicrofrontend>
        <SvelteMiniMicrofrontend></SvelteMiniMicrofrontend>
        <MiniReactApp></MiniReactApp>
      </div>
    </Suspense>
  );
};

export default AllExample;
