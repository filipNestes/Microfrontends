import React from "react";
import Navbar from "./Navbar";
import Footer from "../components/FooterVue";
import "./layout.scss";

export default function Layout(props) {
  console.log("props", props);
  return (
    <div className="layout-root">
      <div>
        <div className="layout-content-division">
          <Navbar items={props}></Navbar>
          <div className="page-view-wrapper">{props.children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
