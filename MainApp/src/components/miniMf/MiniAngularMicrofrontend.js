import React, { useEffect, useRef } from "react";
import { mount } from "angularMf/miniAngularMf";

const angularMiniMicrofrontend = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount();
  }, []);
  return (
    <div className="mini-app-module">
      <app-root></app-root>
    </div>
  );
};

export default angularMiniMicrofrontend;
