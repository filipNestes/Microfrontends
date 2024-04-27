import { mount } from "vueMicrofrontend/vueMicrofrontend";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
    console.log("VUE REFFF", ref.current);
  }, []);

  return <div ref={ref} />;
};
