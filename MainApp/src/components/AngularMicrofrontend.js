import React, { useEffect, useRef } from "react";
import { mount } from "angularMf/AngularMainMf";

const angularMicrofrontend = () => {
  const ref = useRef(null);
  let isLoaded = false;

  useEffect(() => {
    if (!isLoaded) {
      mount();
      isLoaded = true;
    }
  }, []);
  return (
    <div className="angular-microfrontend-module">
      <app-root></app-root>
    </div>
  );
};

export default angularMicrofrontend;
