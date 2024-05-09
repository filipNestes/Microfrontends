import React, { useEffect, useRef } from "react";
import { mount } from "angularMf/MiniAngularMf";

const angularMiniMicrofrontend = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount();
  }, []);
  return (
    <div
      className="mini-apps"
      style={{
        width: "48%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "5rem 0",
      }}
    >
      <app-root></app-root>
    </div>
  );
};

export default angularMiniMicrofrontend;
