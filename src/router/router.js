import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "../hoc/Layout/Layout";
import { routes, Roles } from "../utility/constants/constants";
import Home from "../Containers/Home/home";
import RecipeContainer from "../Containers/RecipeContainer/recipeContainer";
import SignIn from "../Containers/SignIn/signIn";
import SingUp from "../Containers/SignUp/signUp";
import Oux from "../hoc/Oux/Oux";
import Ingredients from "../Containers/Ingredients/ingredients";
import { useSelector } from "react-redux";
import About from "../Containers/About/about";

const Router = (props) => {
  let routeList = null;
  const role = useSelector((state) => state.authReducer?.user?.role);

  if (props.token) {
    if (role === Roles.USER) {
      //when user is logged in
      routeList = (
        <Switch>
          <Route exact path={routes.ROOT} component={Home} />
          <Route
            exact
            path={routes.RECIPIES_LIST}
            component={RecipeContainer}
          />
           <Route
            exact
            path={routes.MY_RECIPIES}
            component={RecipeContainer}
          />
          <Route exact path={routes.ABOUT} component={About} />
          <Route path="*" render={() => <Redirect to={routes.ROOT} />} />
        </Switch>
      );
    } else if (role === Roles.ADMIN) {
      // when admin is logged in
      routeList = (
        <Switch>
          <Route exact path={routes.ROOT} component={Home} />
          <Route
            exact
            path={routes.RECIPIES_LIST}
            component={RecipeContainer}
          />
           <Route
            exact
            path={routes.MY_RECIPIES}
            component={RecipeContainer}
          />
          <Route exact path={routes.INGREDIENTS} component={Ingredients} />
          <Route exact path={routes.ABOUT} component={About} />
          <Route path="*" render={() => <Redirect to={routes.ROOT} />} />
        </Switch>
      );
    }
  } else {
    //when user is not logged in
    routeList = (
      <Switch>
        <Route exact path={routes.SIGN_IN} component={SignIn} />
        <Route exact path={routes.SIGN_UP} component={SingUp} />
        <Route path="*" render={(props) => <Redirect to={routes.SIGN_IN} />} />
      </Switch>
    );
  }

  return props.token ? <Layout>{routeList}</Layout> : <Oux>{routeList}</Oux>;
};

export default Router;

export const NotFound = () => {
  return (
    <h1 className="text-center" style={{ margin: "100px" }}>
      404. Page not found.
    </h1>
  );
};
