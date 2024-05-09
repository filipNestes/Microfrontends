import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Layout from "../layout/Layout.js";

export default function App(props) {
  const [showPage, setShowPage] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    setShowPage(true);
  }, []);

  return (
    <CSSTransition
      in={showPage}
      nodeRef={nodeRef}
      timeout={500}
      classNames="enter-page-transition"
      unmountOnExit
    >
      <div ref={nodeRef}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/all" />
            </Route>
            <Layout {...props} />
          </Switch>
        </Router>
      </div>
    </CSSTransition>
  );
}
