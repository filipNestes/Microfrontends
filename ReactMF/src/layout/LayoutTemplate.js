import React from "react";
import App from "../components/App";

export default function Template(props) {
  console.log("layouit", props);
  return <App {...props} />;
}
