import React, { useCallback, useEffect, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import MainContent from "../components/reactPart/MainContent.jsx";
import AngularMicrofrontend from "../components/AngularMicrofrontend.js";
import SvelteMicrofrontend from "../components/SvelteMicrofrontend.js";
import VueMicrofrontend from "../components/VueMicrofrontend.js";
import AllExample from "../components/miniMf/AllExample.js";
import NpmPackagePage from "../components/NpmContent.js";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route
          path="/react"
          render={useCallback(
            (props) => (
              <MainContent></MainContent>
            ),
            []
          )}
        />
        <Route
          path="/angular"
          render={useCallback(
            (props) => (
              <Suspense fallback={<div>Loading Microfrontend...</div>}>
                <AngularMicrofrontend></AngularMicrofrontend>
              </Suspense>
            ),
            []
          )}
        />
        <Route
          path="/vue"
          render={useCallback(
            (props) => (
              <VueMicrofrontend></VueMicrofrontend>
            ),
            []
          )}
        />
        <Route
          path="/svelte"
          render={useCallback(
            (props) => (
              <SvelteMicrofrontend></SvelteMicrofrontend>
            ),
            []
          )}
        />
        <Route
          path="/all"
          render={useCallback(
            (props) => (
              <AllExample></AllExample>
            ),
            []
          )}
        />
        <Route
          path="/npm"
          render={useCallback(
            (props) => (
              <NpmPackagePage></NpmPackagePage>
            ),
            []
          )}
        />
      </Switch>
    </>
  );
}
