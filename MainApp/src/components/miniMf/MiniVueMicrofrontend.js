import React, { useRef, useEffect, useState } from "react";
import OopsComponent from "../OopsComponent";
import "./miniOopsComponent.scss";

const MicroFrontendLoader = () => {
  const ref = useRef(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const loadMicroFrontend = async () => {
      try {
        const { mount } = await import("vueMf/VueMiniApp");
        mount(ref.current);
      } catch (error) {
        console.error("Microfrontend loading failed:", error);
        setHasError(true);
      }
    };

    loadMicroFrontend();
  }, []);

  if (hasError) {
    return (
      <div className="vue-mini-app" ref={ref}>
        <div
          className="content"
          style={{
            width: "30rem",
            height: "20rem",
            backgroundColor: "#2c3e50",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            marginBottom: "1rem",
          }}
        >
          <OopsComponent />
        </div>
      </div>
    );
  }

  return <div className="vue-mini-app" ref={ref} />;
};

export default MicroFrontendLoader;
