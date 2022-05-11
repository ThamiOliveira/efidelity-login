import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/auth" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);