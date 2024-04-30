import { mount } from "vueMicrofrontend/vueMiniApp";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return (
    <div
      className="vue-mini-app"
      ref={ref}
      style={{
        width: "48%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "5rem 0",
      }}
    />
  );
};
