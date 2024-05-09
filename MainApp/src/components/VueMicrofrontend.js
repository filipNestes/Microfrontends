import React, { useRef, useEffect, useState } from "react";
import OopsComponent from "./OopsComponent";

const MicroFrontendLoader = () => {
  const ref = useRef(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const loadMicroFrontend = async () => {
      try {
        const { mount } = await import("vueMf/VueMainMf");
        mount(ref.current);
      } catch (error) {
        console.error("Microfrontend loading failed:", error);
        setHasError(true);
      }
    };

    loadMicroFrontend();
  }, []);

  if (hasError) {
    return <OopsComponent />;
  }

  return <div ref={ref} />;
};

export default MicroFrontendLoader;
