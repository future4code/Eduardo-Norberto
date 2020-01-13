import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import ApplicationForm from "../ApplicationForm"




export const routes = {
  root: "/",
  form: "/application-form",
  contract: "/login",
  createTrips: "/trips/create",
  listTrips: "/trips/list",
  detailsTrips: "/trips/details"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={HomePage} />
        <Route path={routes.contract} component={LoginPage} />
        <Route path={routes.form} component={ApplicationForm} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
