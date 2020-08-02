/* eslint-disable quotes */
import React from "react";
import { render } from "react-dom";
import css from "./styles/style.styl";
import Main from "./components/Main";
import Sigle from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Single from "./components/Single";

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
);
render(router, document.getElementById("root"));
