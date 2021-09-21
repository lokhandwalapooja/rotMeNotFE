import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "../hoc/Layout/Layout";
import { routes } from "../utility/constants/constants";
import Home from "../Containers/Home/home";

const Router = (props) => {
  let routeList = null;

  if (props.token) {
    //when user is logged in
    routeList = (
      <Switch>
        <Route exact path={routes.ROOT} component={Home} />
        {/*
        <Route exact path={routes.FILTERS} component={Filters} />
        <Route exact path={routes.DEVICES} component={DeviceList} />
        <Route exact path={routes.EQUIPMENT} component={DeviceList} /> */}
        <Route path="*" render={() => <Redirect to={routes.ROOT} />} />
      </Switch>
    );
  } else {
    //when user is not logged in
    routeList = (
      <Switch>
        <Route path="*" render={(props) => <Redirect to={routes.ROOT} />} />
      </Switch>
    );
  }

  return <Layout>{routeList}</Layout>;
};

export default Router;

export const NotFound = () => {
  return (
    <h1 className="text-center" style={{ margin: "100px" }}>
      404. Page not found.
    </h1>
  );
};
