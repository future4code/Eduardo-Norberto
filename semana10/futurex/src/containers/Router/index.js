import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import ApplicationForm from "../ApplicationForm";
import CreateTripsPage from "../CreateTripsPage";
import ListTripsPage from "../ListTripsPage";
import TripDetailsPage from "../TripDetailsPage";
import AdminPage from "../AdminPage";
import TripAdmin from "../TripAdmin";


export const routes = {
  home: "/",
  form: "/application-form",
  contract: "/login",
  createTrips: "/trips/create",
  listTrips: "/trips/list",
  detailsTrips: "/trips/details",
  admin:"/admin",
  adminTrips:"/admin/details"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.contract} component={LoginPage} />
        <Route exact path={routes.form} component={ApplicationForm} />
        <Route exact path={routes.createTrips} component={CreateTripsPage}/>
        <Route exact path={routes.listTrips} component={ListTripsPage}/>
        <Route exact path={routes.detailsTrips} component={TripDetailsPage}/>
        <Route exact path={routes.admin} component={AdminPage}/>
        <Route exact path={routes.adminTrips} component={TripAdmin}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
