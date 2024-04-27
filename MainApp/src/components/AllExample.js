import React, { useState, lazy, Suspense } from "react";
import AngularMiniMicrofrontend from "./miniMf/MiniAngularMicrofrontend";

const MiniReactApp = lazy(() =>
  import("microfrontend/MiniReactApp").catch(() => ({
    default: () => <div>Ahoj</div>,
  }))
);

const AllExample = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>ASD</div>
      <AngularMiniMicrofrontend>asd</AngularMiniMicrofrontend>
      <MiniReactApp />
    </Suspense>
  );
};

export default AllExample;
