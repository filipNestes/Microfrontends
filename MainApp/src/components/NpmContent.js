import React, { useEffect, useRef } from "react";
import helloWorld from "npmpackage";

const NpmPackagePage = () => {
  console.log("hello", helloWorld());
  /*
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const { default: MySvelteComponent } = require("my-svelte-component");
      new MySvelteComponent({
        target: containerRef.current,
        props: { message },
      });
    }
  }, [message]);*/

  return (
    <div>
      <div>{helloWorld()}</div>
      {/*  <div ref={containerRef} /> */}
    </div>
  );
};

export default NpmPackagePage;
