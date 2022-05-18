import React from "react";
import ReactDOM from "react-dom";
import ProtectedRoute from "components/ProtectedRoute";
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

import Auth from "layouts/Auth.js";
import Landing from "views/Landing.js";
import Dashboard from "views/Dashboard";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/Landing" exact component={Landing} />
      <ProtectedRoute exact path="/dash" component={Dashboard} />
      <Redirect from="*" to="/Landing" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
