import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "../hoc/Layout/Layout";
import { routes } from "../utility/constants/constants";
import Home from "../Containers/Home/home";
import RecipeContainer from "../Containers/RecipeContainer/recipeContainer";

const Router = (props) => {
  let routeList = null;

  if (props.token) {
    //when user is logged in
    routeList = (
      <Switch>
        <Route exact path={routes.ROOT} component={Home} />
        <Route exact path={routes.RECIPIES_LIST} component={RecipeContainer}/>
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
